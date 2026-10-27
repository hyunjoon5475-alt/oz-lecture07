const listEl = document.getElementById("list");
["사과", "배", "감"].forEach((fruit) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = fruit;
  listEl.appendChild(itemEl);
});
const firstEl = document.querySelector("#list li");
listEl.removeChild(firstEl);