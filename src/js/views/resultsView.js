import PreviwView from "./previewView.js";

class ResultsView extends PreviwView {
  _parentElement = document.querySelector(".results");
  _message = "";
}

export default new ResultsView();
