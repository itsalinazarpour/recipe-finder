import PreviwView from "./previewView.js";

class BookmarksView extends PreviwView {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = "No bookmarks yet!";
  _message = "";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
}

export default new BookmarksView();
