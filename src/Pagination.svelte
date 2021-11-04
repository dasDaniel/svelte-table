<script>
    export let pagination, currentPage, showPageCount, paginationOpts;
</script>

<div class="table-pagination">
    <div>
      <ul>
          <li>
            <button on:click={() => currentPage = pagination.currentPage - 1}
                disabled={pagination.currentPage == pagination.startPage}>
                {paginationOpts.previous}
            </button>
          </li>

          {#each pagination.pages as page}
              <li>
                  <button on:click={() => currentPage = page}
                      disabled={page == pagination.currentPage}>
                      {page}
                  </button>
              </li>
          {/each}

          <li>
            <button on:click={() => currentPage = pagination.currentPage + 1}
                disabled={pagination.currentPage == pagination.endPage}>
                {paginationOpts.next}
            </button>
          </li>
      </ul>
    </div>

    {#if showPageCount}
      <div>
          {#if pagination.totalItems}
            {paginationOpts.info
                .replace('{start}', pagination.startIndex + 1)
                .replace('{end}', pagination.endPage == pagination.currentPage ?
                    pagination.totalItems :
                    pagination.startIndex + 1 * pagination.pageSize)
                .replace('{rows}', pagination.totalItems)}
            {:else}
                {paginationOpts.noResults}
            {/if}
      </div>
    {/if}
</div>

<style>
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  ul li {
    display: inline-block;
  }

  .table-pagination {
    display: flex;
    justify-content: space-between;
  }
</style>
