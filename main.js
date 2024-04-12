let saveLists = [];

function add() {
  console.log("running add function");

  const textInput = document.querySelector("#input-text");
  const list = document.querySelector("#Lists");

  if (!isValidated(textInput.value.trim(), list.value)) {
    console.log("Invalid input");
    return "false";
  }

  const newLi = document.createElement("li");
  newLi.className = "flex gap-2 text-xl";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("class", "w-5 h-5 bg-blue-600 text-white rounded-sm");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("d", "m4.5 12.75 6 6 9-13.5");

  svg.appendChild(path);
  newLi.appendChild(svg);

  const textSpan = document.createElement("span");
  textSpan.textContent = textInput.value.trim();
  newLi.appendChild(textSpan);

  const listSpan = document.createElement("span");
  listSpan.textContent = list.value;
  listSpan.className = "rounded-lg p-2 text-xs text-white";

  switch (list.value) {
    case "React":
      listSpan.classList.add("bg-blue-400");
      break;
    case "JavaScript":
      listSpan.classList.add("bg-yellow-300");
      break;
    case "CSS":
      listSpan.classList.add("bg-blue-700");
      break;
    case "HTML":
      listSpan.classList.add("bg-[#E7573B]");
      break;
    default:
      break;
  }

  newLi.appendChild(listSpan);

  const ul = document.querySelector("#ul");
  ul.appendChild(newLi);

  textInput.value = "";
  list.value = "";
}

document.querySelector("#ul").addEventListener("click", (m) => {
  console.log(m.target);
  if (m.target.tagName === "span" || m.target.tagName === "svg") {
    let listItem = m.target.parentNode;
    listItem.remove();
  }
  localStorage.setItem("listItem", JSON.stringify(listItem));
});

function isValidated(textInput, list) {
  console.log("running isValidated function");
  let isValid = false;

  if (textInput !== "" && list !== "") {
    isValid = true;
  } else {
    if (textInput === "") {
      document.getElementById("input-text").classList.add("border-red-500");
      alert("There is not any text 🤷‍♂️");
    }
    if (list === "") {
      document.getElementById("Lists").classList.add("border-red-500");
      alert("There is not any text 🤷‍♂️");
    }
  }
  return isValid;
}

function updateLocalStorage() {
  const listItems = document.querySelectorAll("#ul li");
  listItems.forEach((item) => {
    const text = item.querySelector("span:first-child").textContent;
    const catagory = document.querySelector("span:last-child").textContent;
    saveLists.push({ text, catagory });
  });
  localStorage.setItem("list", JSON.stringify(saveLists));
}

document.querySelector("#btn").addEventListener("click", function (m) {
  m.preventDefault();
  add();
});

window.addEventListener("load", () => {
  const saveLists = JSON.parse(localStorage.getItem("list")) || [];
  saveLists.forEach((item) => {
    const newLi = document.createElement("li");
    newLi.className = "flex gap-2 text-xl";

    const textInput = document.querySelector("#input-text");
    const list = document.querySelector("#Lists");

    const ul = document.querySelector("#ul");
    ul.appendChild(newLi);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.5");
    svg.setAttribute("class", "w-5 h-5 bg-blue-600 text-white rounded-sm");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("d", "m4.5 12.75 6 6 9-13.5");

    svg.appendChild(path);
    newLi.appendChild(svg);

    const textSpan = document.createElement("span");
    textSpan.textContent = item.text;
    newLi.appendChild(textSpan);

    const listSpan = document.createElement("span");
    listSpan.textContent = item.catagory;
    listSpan.className = "rounded-lg p-2 text-xs text-white";

    switch (list.value) {
      case "React":
        listSpan.classList.add("bg-blue-400");
        break;
      case "JavaScript":
        listSpan.classList.add("bg-yellow-300");
        break;
      case "CSS":
        listSpan.classList.add("bg-blue-700");
        break;
      case "HTML":
        listSpan.classList.add("bg-[#E7573B]");
        break;
      default:
        break;
    }

    newLi.appendChild(listSpan);
  });
});
