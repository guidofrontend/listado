const namesNodeList = document.querySelectorAll(".person > h2 > a");
const namesArray = Array.from(namesNodeList);

const form = document.forms[0];
const buscador = form.elements.search;

let mayusNames = namesArray.map((person) => person.innerText.toUpperCase());

buscador.oninput = function () {
  for (name of mayusNames) {
    if (!name.includes(buscador.value.toUpperCase())) {
      namesNodeList.forEach(function (currentValue) {
        if (currentValue.innerText.toUpperCase() === name) {
          currentValue.parentElement.parentElement.style.display = "none";
        }
      }, name);
    } else {
      namesNodeList.forEach(function (currentValue) {
        if (currentValue.innerText.toUpperCase() === name) {
          currentValue.parentElement.parentElement.style.display = "";
        }
      }, name);
    }
  }
};

buscador.onchange = () => (buscador.value = "");
