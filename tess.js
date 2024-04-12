//array
let saveList = [];

function add() {
  console.log("running add function");

  // Get input elements
  const textInput = document.querySelector("#input-text");
  const list = document.querySelector("#List");

  // Validate input
  if (!isValidated(textInput.value.trim(), list.value)) {
    console.log("Invalid input");
    return;
  }

  // Create a new list item (li)
  var newLi = document.createElement("li");
  newLi.className = "pt-1 pb-1 flex";

  // Create an icon (SVG)
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "currentColor");
  svg.setAttribute("class", "w-6 h-6 text-blue-500 ");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute(
    "d",
    "M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
  );

  svg.appendChild(path);
  newLi.appendChild(svg);

  // Add text content
  const textSpan = document.createElement("span");
  textSpan.textContent = textInput.value.trim();
  newLi.appendChild(textSpan);

  // Add option (list value)
  const listSpan = document.createElement("span");
  listSpan.textContent = list.value;
  listSpan.className = "ml-2 pl-2 pr-2   rounded-lg";

  // Apply background color based on list value
  switch (list.value) {
    case "fruit":
      listSpan.classList.add("bg-green-300");
      break;
    case "dairy":
      listSpan.classList.add("bg-gray-300");
      break;
    case "drink":
      listSpan.classList.add("bg-yellow-200");
      break;
    case "meat":
      listSpan.classList.add("bg-pink-300");
      break;
    default:
      break;
  }

  newLi.appendChild(listSpan);

  // Append the new li to an existing ul (assuming you have an element with ID "ul")
  const ul = document.querySelector("#ul");
  ul.appendChild(newLi);

  //local storage
  const saveList = JSON.parse(localStorage.getItem("list"));
  saveList.push({ text: textInput.value.trim(), catagory: list.value });
  localStorage.setItem("list", JSON.stringify(saveList));

  // Clear input fields
  textInput.value = "";
  list.value = "";
}
//delete part
document.querySelector("#ul").addEventListener("click", (e) => {
  console.log("hello");
  console.log(e.target);
  if (e.target.tagName === "span" || e.target.tagName === "svg") {
    let listItem = e.target.parentNode;
    // console.log(listItem)
    listItem.remove();
    updateLocalStorage();
  }
});
function isValidated(textInput, list) {
  console.log("running isValidated function");
  let isValid = false;

  if (textInput !== "" && list !== "") {
    isValid = true;
  } else {
    if (textInput === "") {
      document.getElementById("input-text").classList.add("border-red-500");
      alert("it is empty");
    }
    if (list === "") {
      document.getElementById("List").classList.add("border-red-500");
      alert("it is empty");
    }
  }
  return isValid;
}

//updateLocalStorage
function updateLocalStorage() {
  const listItems = document.querySelectorAll("#ul li");
  listItems.forEach((item) => {
    const text = item.querySelector("span:first-child").textContent;
    const catagory = document.querySelector("span:last-child").textContent;
    saveList.push({ text, catagory });
  });
  localStorage.setItem("list", JSON.stringify(saveList));
}
//=======================
document.querySelector("#btn").addEventListener("click", function (e) {
  e.preventDefault();
  add();
});
window.addEventListener("load", () => {
  const saveList = JSON.parse(localStorage.getItem("list")) || [];
  saveList.forEach((item) => {
    const newLi = document.createElement("li");
    newLi.className = "pt-1 pb-1 flex";
    console.log("local");
    // Get input elements
    const textInput = document.querySelector("#input-text");
    const list = document.querySelector("#List");

    const ul = document.querySelector("#ul");
    ul.appendChild(newLi);

    // Create an icon (SVG)
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("class", "w-6 h-6 text-blue-500 ");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute(
      "d",
      "M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
    );

    svg.appendChild(path);
    newLi.appendChild(svg);

    // Add text content
    const textSpan = document.createElement("span");
    textSpan.textContent = item.text;
    newLi.appendChild(textSpan);

    // Add option (list value)
    const listSpan = document.createElement("span");
    listSpan.textContent = item.catagory;
    listSpan.className = "ml-2 pl-2 pr-2   rounded-lg";

    // Apply background color based on list value
    switch (item.catagory) {
      case "fruit":
        listSpan.classList.add("bg-green-300");
        break;
      case "dairy":
        listSpan.classList.add("bg-gray-300");
        break;
      case "drink":
        listSpan.classList.add("bg-yellow-200");
        break;
      case "meat":
        listSpan.classList.add("bg-pink-300");
        break;
      default:
        break;
    }

    newLi.appendChild(listSpan);
  });
});
