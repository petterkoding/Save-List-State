import createList from "./components/createList.js";
import { saveToStorage, getFromStorage } from "./utils/saveToStorage.js";
import clearButton from "./components/clearButton.js";

const listKey = "list";
// const listItems = [];
const listItems = getFromStorage(listKey);

createList(listItems);
clearButton();
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addItem);

function addItem() {
  const itemValue = input.value.trim();

  if (itemValue.length >= 1) {
    const newItem = { id: Date.now(), item: itemValue };
    input.value = "";
    input.focus();
    listItems.push(newItem);

    createList(listItems);
    saveToStorage(listKey, listItems);
  }

  console.log(listItems);
}
