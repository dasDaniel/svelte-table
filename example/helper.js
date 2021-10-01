/**
 * Create filter array from rows
 * @param {string} key row key
 * @returns {function}
 */
export const generateFilter = key => rows => {
  let values = {};
  rows.forEach(row => {
    let val = row[key];
    if (values[val] === undefined)
      values[val] = {
        name: `${val}`,
        value: val,
      };
  });
  // fix order
  values = Object.entries(values)
    .sort()
    .reduce((o, [k, v]) => ((o[k] = v), o), {});
  return Object.values(values);
};
