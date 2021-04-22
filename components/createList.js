import { saveToStorage, getFromStorage } from "../utils/saveToStorage.js";
const listKey = "list";

export default function createList(listItems) {
  const listContainer = document.querySelector("ul");

  listContainer.innerHTML = "";

  listItems.forEach((listItem) => {
    let checked = "";
    if (listItem.complete) {
      checked = "checked";
    }

    listContainer.innerHTML += `<li><span class="${checked}">${listItem.item}</span><input ${checked} type="checkbox" data-id="${listItem.id}"/></li>`;
  });

  const checkboxes = document.querySelectorAll("li input");

  checkboxes.forEach((box) => {
    box.addEventListener("click", toggleComplete);
  });

  function toggleComplete(event) {
    const id = event.target.dataset.id;
    const checked = event.target.checked;
    updateList(listItems, id, checked);

    const updatedList = updateList(listItems, id, checked);
    saveToStorage(listKey, updatedList);

    createList(updatedList);
  }
}

// update list
// once checked
function updateList(listItems, id, checked) {
  //   console.log("listItems", listItems);
  //   console.log("id", id);
  //   console.log("checked", checked);

  const thisItemIndex = listItems.findIndex(function (item) {
    if (item.id === parseInt(id)) {
      return true;
    }
  });

  listItems[thisItemIndex].complete = checked;

  //   console.log(listItems);

  return listItems;
}
