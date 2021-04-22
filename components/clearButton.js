import createList from "./createList.js";

export default function clearButton() {
  const clearBtn = document.querySelector("#clear");

  clearBtn.addEventListener("click", clearList);

  function clearList() {
    if (confirm("are you sure?")) {
      // clear localstorage
      localStorage.clear();
      // clear the UL list
      createList([]);
    }
  }
}
