import icons from "url:../../img/icons.svg";

export default class View {
  _data;
  _errorMessage =
    "We couldn't find that recipe! Please check your VPN and try another recipe.";

  /**
   *
   * @param {*} data
   * @returns
   */
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._markupGenerator();
    this._clearElement();

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._markupGenerator();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const curElements = Array.from(this._parentElement.querySelectorAll("*"));

    newElements.forEach((newEl, i) => {
      const curEl = curElements.at(i);

      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        curEl.textContent = newEl.textContent;
      }

      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach((attr) => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  renderSpinner() {
    const spinner = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
      `;
    this._clearElement();
    this._parentElement.insertAdjacentHTML("afterbegin", spinner);
  }

  renderError(err = this._errorMessage) {
    const markup = `
        <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${err}</p>
        </div>
      `;
    this._clearElement();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  renderMessage(err = this._message) {
    const markup = `
        <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${err}</p>
        </div>
      `;
    this._clearElement();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  _clearElement() {
    this._parentElement.innerHTML = "";
  }
}
