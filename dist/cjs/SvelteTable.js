'use strict';

function noop() {}

function add_location(element, file, line, column, char) {
	element.__svelte_meta = {
		loc: { file, line, column, char }
	};
}

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

function run_all(fns) {
	fns.forEach(run);
}

function is_function(thing) {
	return typeof thing === 'function';
}

function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function append(target, node) {
	target.appendChild(node);
}

function insert(target, node, anchor) {
	target.insertBefore(node, anchor);
}

function detach(node) {
	node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
	for (let i = 0; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].d(detaching);
	}
}

function element(name) {
	return document.createElement(name);
}

function text(data) {
	return document.createTextNode(data);
}

function space() {
	return text(' ');
}

function listen(node, event, handler, options) {
	node.addEventListener(event, handler, options);
	return () => node.removeEventListener(event, handler, options);
}

function children(element) {
	return Array.from(element.childNodes);
}

function set_data(text, data) {
	data = '' + data;
	if (text.data !== data) text.data = data;
}

function select_option(select, value) {
	for (let i = 0; i < select.options.length; i += 1) {
		const option = select.options[i];

		if (option.__value === value) {
			option.selected = true;
			return;
		}
	}
}

function select_value(select) {
	const selected_option = select.querySelector(':checked') || select.options[0];
	return selected_option && selected_option.__value;
}

let current_component;

function set_current_component(component) {
	current_component = component;
}

const dirty_components = [];

const resolved_promise = Promise.resolve();
let update_scheduled = false;
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];

function schedule_update() {
	if (!update_scheduled) {
		update_scheduled = true;
		resolved_promise.then(flush);
	}
}

function add_render_callback(fn) {
	render_callbacks.push(fn);
}

function flush() {
	const seen_callbacks = new Set();

	do {
		// first, call beforeUpdate functions
		// and update components
		while (dirty_components.length) {
			const component = dirty_components.shift();
			set_current_component(component);
			update(component.$$);
		}

		while (binding_callbacks.length) binding_callbacks.shift()();

		// then, once components are updated, call
		// afterUpdate functions. This may cause
		// subsequent updates...
		while (render_callbacks.length) {
			const callback = render_callbacks.pop();
			if (!seen_callbacks.has(callback)) {
				callback();

				// ...so guard against infinite loops
				seen_callbacks.add(callback);
			}
		}
	} while (dirty_components.length);

	while (flush_callbacks.length) {
		flush_callbacks.pop()();
	}

	update_scheduled = false;
}

function update($$) {
	if ($$.fragment) {
		$$.update($$.dirty);
		run_all($$.before_render);
		$$.fragment.p($$.dirty, $$.ctx);
		$$.dirty = null;

		$$.after_render.forEach(add_render_callback);
	}
}

function mount_component(component, target, anchor) {
	const { fragment, on_mount, on_destroy, after_render } = component.$$;

	fragment.m(target, anchor);

	// onMount happens after the initial afterUpdate. Because
	// afterUpdate callbacks happen in reverse order (inner first)
	// we schedule onMount callbacks before afterUpdate callbacks
	add_render_callback(() => {
		const new_on_destroy = on_mount.map(run).filter(is_function);
		if (on_destroy) {
			on_destroy.push(...new_on_destroy);
		} else {
			// Edge case - component was destroyed immediately,
			// most likely as a result of a binding initialising
			run_all(new_on_destroy);
		}
		component.$$.on_mount = [];
	});

	after_render.forEach(add_render_callback);
}

function destroy(component, detaching) {
	if (component.$$) {
		run_all(component.$$.on_destroy);
		component.$$.fragment.d(detaching);

		// TODO null out other refs, including component.$$ (but need to
		// preserve final state?)
		component.$$.on_destroy = component.$$.fragment = null;
		component.$$.ctx = {};
	}
}

function make_dirty(component, key) {
	if (!component.$$.dirty) {
		dirty_components.push(component);
		schedule_update();
		component.$$.dirty = {};
	}
	component.$$.dirty[key] = true;
}

function init(component, options, instance, create_fragment, not_equal$$1, prop_names) {
	const parent_component = current_component;
	set_current_component(component);

	const props = options.props || {};

	const $$ = component.$$ = {
		fragment: null,
		ctx: null,

		// state
		props: prop_names,
		update: noop,
		not_equal: not_equal$$1,
		bound: blank_object(),

		// lifecycle
		on_mount: [],
		on_destroy: [],
		before_render: [],
		after_render: [],
		context: new Map(parent_component ? parent_component.$$.context : []),

		// everything else
		callbacks: blank_object(),
		dirty: null
	};

	let ready = false;

	$$.ctx = instance
		? instance(component, props, (key, value) => {
			if ($$.ctx && not_equal$$1($$.ctx[key], $$.ctx[key] = value)) {
				if ($$.bound[key]) $$.bound[key](value);
				if (ready) make_dirty(component, key);
			}
		})
		: props;

	$$.update();
	ready = true;
	run_all($$.before_render);
	$$.fragment = create_fragment($$.ctx);

	if (options.target) {
		if (options.hydrate) {
			$$.fragment.l(children(options.target));
		} else {
			$$.fragment.c();
		}

		if (options.intro && component.$$.fragment.i) component.$$.fragment.i();
		mount_component(component, options.target, options.anchor);
		flush();
	}

	set_current_component(parent_component);
}

class SvelteComponent {
	$destroy() {
		destroy(this, true);
		this.$destroy = noop;
	}

	$on(type, callback) {
		const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
		callbacks.push(callback);

		return () => {
			const index = callbacks.indexOf(callback);
			if (index !== -1) callbacks.splice(index, 1);
		};
	}

	$set() {
		// overridden by instance, if it has props
	}
}

class SvelteComponentDev extends SvelteComponent {
	constructor(options) {
		if (!options || (!options.target && !options.$$inline)) {
			throw new Error(`'target' is a required option`);
		}

		super();
	}

	$destroy() {
		super.$destroy();
		this.$destroy = () => {
			console.warn(`Component was already destroyed`); // eslint-disable-line no-console
		};
	}
}

/* src\SvelteTable.svelte generated by Svelte v3.1.0 */

const file = "src\\SvelteTable.svelte";

function get_each_context_1(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.col = list[i];
	return child_ctx;
}

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.row = list[i];
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.col = list[i];
	return child_ctx;
}

function get_each_context_4(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.option = list[i];
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.col = list[i];
	return child_ctx;
}

// (77:1) {#if showFilterHeader}
function create_if_block_1(ctx) {
	var tr;

	var each_value_3 = ctx.columns;

	var each_blocks = [];

	for (var i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
	}

	return {
		c: function create() {
			tr = element("tr");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			tr.className = "svelte-5jx64d";
			add_location(tr, file, 77, 2, 1713);
		},

		m: function mount(target, anchor) {
			insert(target, tr, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed.filterValues || changed.columns || changed.undefined || changed.filterSettings) {
				each_value_3 = ctx.columns;

				for (var i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block_3(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(tr, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value_3.length;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(tr);
			}

			destroy_each(each_blocks, detaching);
		}
	};
}

// (81:5) {#if filterValues[col.key] !== undefined}
function create_if_block_2(ctx) {
	var select, option, dispose;

	var each_value_4 = ctx.filterValues[ctx.col.key];

	var each_blocks = [];

	for (var i = 0; i < each_value_4.length; i += 1) {
		each_blocks[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
	}

	function select_change_handler() {
		ctx.select_change_handler.call(select, ctx);
	}

	return {
		c: function create() {
			select = element("select");
			option = element("option");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			option.__value = ctx.undefined;
			option.value = option.__value;
			add_location(option, file, 82, 7, 1861);
			if (ctx.filterSettings[ctx.col.key] === void 0) add_render_callback(select_change_handler);
			select.className = "svelte-5jx64d";
			add_location(select, file, 81, 6, 1808);
			dispose = listen(select, "change", select_change_handler);
		},

		m: function mount(target, anchor) {
			insert(target, select, anchor);
			append(select, option);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			select_option(select, ctx.filterSettings[ctx.col.key]);
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			option.value = option.__value;

			if (changed.filterValues || changed.columns) {
				each_value_4 = ctx.filterValues[ctx.col.key];

				for (var i = 0; i < each_value_4.length; i += 1) {
					const child_ctx = get_each_context_4(ctx, each_value_4, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block_4(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value_4.length;
			}

			if ((changed.filterSettings || changed.columns)) select_option(select, ctx.filterSettings[ctx.col.key]);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(select);
			}

			destroy_each(each_blocks, detaching);

			dispose();
		}
	};
}

// (84:8) {#each filterValues[col.key] as option}
function create_each_block_4(ctx) {
	var option, t_value = ctx.option.name, t, option_value_value;

	return {
		c: function create() {
			option = element("option");
			t = text(t_value);
			option.__value = option_value_value = ctx.option.value;
			option.value = option.__value;
			add_location(option, file, 84, 8, 1953);
		},

		m: function mount(target, anchor) {
			insert(target, option, anchor);
			append(option, t);
		},

		p: function update(changed, ctx) {
			if ((changed.filterValues || changed.columns) && t_value !== (t_value = ctx.option.name)) {
				set_data(t, t_value);
			}

			if ((changed.filterValues || changed.columns) && option_value_value !== (option_value_value = ctx.option.value)) {
				option.__value = option_value_value;
			}

			option.value = option.__value;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(option);
			}
		}
	};
}

// (79:4) {#each columns as col}
function create_each_block_3(ctx) {
	var th;

	var if_block = (ctx.filterValues[ctx.col.key] !== ctx.undefined) && create_if_block_2(ctx);

	return {
		c: function create() {
			th = element("th");
			if (if_block) if_block.c();
			add_location(th, file, 79, 5, 1750);
		},

		m: function mount(target, anchor) {
			insert(target, th, anchor);
			if (if_block) if_block.m(th, null);
		},

		p: function update(changed, ctx) {
			if (ctx.filterValues[ctx.col.key] !== ctx.undefined) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(th, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(th);
			}

			if (if_block) if_block.d();
		}
	};
}

// (97:4) {#if sortKey === col.key}
function create_if_block(ctx) {
	var t_value = ctx.sortOrder === 1 ? '▲' : '▼', t;

	return {
		c: function create() {
			t = text(t_value);
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		p: function update(changed, ctx) {
			if ((changed.sortOrder) && t_value !== (t_value = ctx.sortOrder === 1 ? '▲' : '▼')) {
				set_data(t, t_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (94:3) {#each columns as col}
function create_each_block_2(ctx) {
	var th, t0_value = ctx.col.title, t0, t1, th_class_value, dispose;

	var if_block = (ctx.sortKey === ctx.col.key) && create_if_block(ctx);

	function click_handler() {
		return ctx.click_handler(ctx);
	}

	return {
		c: function create() {
			th = element("th");
			t0 = text(t0_value);
			t1 = space();
			if (if_block) if_block.c();
			th.className = th_class_value = "" + [(ctx.col.sortable ? 'isSortable' : '' ),(ctx.col.headerClass !== ctx.undefined && ctx.col.headerClass)].join(' ') + " svelte-5jx64d";
			add_location(th, file, 94, 4, 2121);
			dispose = listen(th, "click", click_handler);
		},

		m: function mount(target, anchor) {
			insert(target, th, anchor);
			append(th, t0);
			append(th, t1);
			if (if_block) if_block.m(th, null);
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			if ((changed.columns) && t0_value !== (t0_value = ctx.col.title)) {
				set_data(t0, t0_value);
			}

			if (ctx.sortKey === ctx.col.key) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(th, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if ((changed.columns) && th_class_value !== (th_class_value = "" + [(ctx.col.sortable ? 'isSortable' : '' ),(ctx.col.headerClass !== ctx.undefined && ctx.col.headerClass)].join(' ') + " svelte-5jx64d")) {
				th.className = th_class_value;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(th);
			}

			if (if_block) if_block.d();
			dispose();
		}
	};
}

// (105:4) {#each columns as col}
function create_each_block_1(ctx) {
	var td, raw_value = ctx.col.renderValue ? ctx.col.renderValue(ctx.row) : ctx.col.value(ctx.row), td_class_value;

	return {
		c: function create() {
			td = element("td");
			td.className = td_class_value = "" + (ctx.col.class !== ctx.undefined && ctx.col.class) + " svelte-5jx64d";
			add_location(td, file, 105, 5, 2449);
		},

		m: function mount(target, anchor) {
			insert(target, td, anchor);
			td.innerHTML = raw_value;
		},

		p: function update(changed, ctx) {
			if ((changed.columns || changed.c_rows) && raw_value !== (raw_value = ctx.col.renderValue ? ctx.col.renderValue(ctx.row) : ctx.col.value(ctx.row))) {
				td.innerHTML = raw_value;
			}

			if ((changed.columns) && td_class_value !== (td_class_value = "" + (ctx.col.class !== ctx.undefined && ctx.col.class) + " svelte-5jx64d")) {
				td.className = td_class_value;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(td);
			}
		}
	};
}

// (103:1) {#each c_rows as row}
function create_each_block(ctx) {
	var tr, t;

	var each_value_1 = ctx.columns;

	var each_blocks = [];

	for (var i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	return {
		c: function create() {
			tr = element("tr");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = space();
			add_location(tr, file, 103, 2, 2412);
		},

		m: function mount(target, anchor) {
			insert(target, tr, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}

			append(tr, t);
		},

		p: function update(changed, ctx) {
			if (changed.columns || changed.undefined || changed.c_rows) {
				each_value_1 = ctx.columns;

				for (var i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(tr, t);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value_1.length;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(tr);
			}

			destroy_each(each_blocks, detaching);
		}
	};
}

function create_fragment(ctx) {
	var table, t0, tr, t1;

	var if_block = (ctx.showFilterHeader) && create_if_block_1(ctx);

	var each_value_2 = ctx.columns;

	var each_blocks_1 = [];

	for (var i = 0; i < each_value_2.length; i += 1) {
		each_blocks_1[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	var each_value = ctx.c_rows;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c: function create() {
			table = element("table");
			if (if_block) if_block.c();
			t0 = space();
			tr = element("tr");

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t1 = space();

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			add_location(tr, file, 92, 1, 2086);
			table.className = "svelte-5jx64d";
			add_location(table, file, 75, 0, 1679);
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			insert(target, table, anchor);
			if (if_block) if_block.m(table, null);
			append(table, t0);
			append(table, tr);

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(tr, null);
			}

			append(table, t1);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(table, null);
			}
		},

		p: function update(changed, ctx) {
			if (ctx.showFilterHeader) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(table, t0);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (changed.columns || changed.undefined || changed.sortKey || changed.sortOrder) {
				each_value_2 = ctx.columns;

				for (var i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(changed, child_ctx);
					} else {
						each_blocks_1[i] = create_each_block_2(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(tr, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}
				each_blocks_1.length = each_value_2.length;
			}

			if (changed.columns || changed.undefined || changed.c_rows) {
				each_value = ctx.c_rows;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(table, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(table);
			}

			if (if_block) if_block.d();

			destroy_each(each_blocks_1, detaching);

			destroy_each(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { columns, rows } = $$props;
	console.log({columns, rows});
	let sortOrder = 1;
	let sortKey = "";
	let sortBy = r => "";
	let showFilterHeader = columns.some(c => c.filterOptions !== undefined);
	let filterValues = {};
	let filterSettings = {};
	let columnByKey = {};
	columns.forEach(col => {
	  columnByKey[col.key] = col; $$invalidate('columnByKey', columnByKey);
	});

	const calculateFilterValues = () => {
	  $$invalidate('filterValues', filterValues = {});
	  columns.forEach(c => {
	    if (typeof c.filterOptions === "function") {
	      filterValues[c.key] = c.filterOptions(rows); $$invalidate('filterValues', filterValues);
	    } else if (Array.isArray(c.filterOptions)) {
	      filterValues[c.key] = [...c.filterOptions]; $$invalidate('filterValues', filterValues);
	    }
	  });
	};

	const handleSort = col => {
	  if (col.sortable === true && typeof col.value === "function") {
	    if (sortKey === col.key) {
	      $$invalidate('sortOrder', sortOrder = sortOrder === 1 ? -1 : 1);
	    } else {
	      $$invalidate('sortOrder', sortOrder = 1);
	      $$invalidate('sortKey', sortKey = col.key);
	      $$invalidate('sortBy', sortBy = r => col.value(r));
	    }
	  }
	};

	if (showFilterHeader) {
	  calculateFilterValues();
	}

	function select_change_handler({ col }) {
		filterSettings[col.key] = select_value(this);
		$$invalidate('filterSettings', filterSettings);
		$$invalidate('columns', columns);
		$$invalidate('filterValues', filterValues);
		$$invalidate('undefined', undefined);
	}

	function click_handler({ col }) {
		return handleSort(col);
	}

	$$self.$set = $$props => {
		if ('columns' in $$props) $$invalidate('columns', columns = $$props.columns);
		if ('rows' in $$props) $$invalidate('rows', rows = $$props.rows);
	};

	let c_rows;
	$$self.$$.update = ($$dirty = { rows: 1, filterSettings: 1, columnByKey: 1, sortBy: 1, sortOrder: 1 }) => {
		if ($$dirty.rows || $$dirty.filterSettings || $$dirty.columnByKey || $$dirty.sortBy || $$dirty.sortOrder) { $$invalidate('c_rows', c_rows = rows
			  .filter(r =>
			    Object.keys(filterSettings).every(f => {
			      // console.log(f, filterSettings[f], columnByKey[f])
			      let ret =  (
			        filterSettings[f] === undefined ||
			        filterSettings[f] === columnByKey[f].filterValue(r)
						);
						return ret;
			    })
			  )
			  .map(r => ({ ...r, $sortOn: sortBy(r) }))
			  .sort((a, b) => {
			    if (a.$sortOn > b.$sortOn) return sortOrder;
			    else if (a.$sortOn < b.$sortOn) return -sortOrder;
			    return 0;
			  })); }
	};

	return {
		columns,
		rows,
		sortOrder,
		sortKey,
		showFilterHeader,
		filterValues,
		filterSettings,
		handleSort,
		undefined,
		c_rows,
		select_change_handler,
		click_handler
	};
}

class SvelteTable extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["columns", "rows"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.columns === undefined && !('columns' in props)) {
			console.warn("<SvelteTable> was created without expected prop 'columns'");
		}
		if (ctx.rows === undefined && !('rows' in props)) {
			console.warn("<SvelteTable> was created without expected prop 'rows'");
		}
	}

	get columns() {
		throw new Error("<SvelteTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set columns(value) {
		throw new Error("<SvelteTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get rows() {
		throw new Error("<SvelteTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set rows(value) {
		throw new Error("<SvelteTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

module.exports = SvelteTable;
//# sourceMappingURL=SvelteTable.js.map
