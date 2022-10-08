class SearchView {
  _parentElement = document.querySelector(".search");

  getQuery() {
    const query = this._parentElement.querySelector(".search__field").value;
    this._clearSearchBar();
    return query;
  }

  addHandlerSearch(handler) {
    this._parentElement.querySelector(".search__field").focus();
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  _clearSearchBar() {
    this._parentElement.querySelector(".search__field").value = "";
  }
}

export default new SearchView();
