/**
 * index.js
 constAll our useful JS goes here, awesome!
 */
const input = document.getElementById("names-input");
const output = document.getElementById("output");
const butt = document.getElementById("butt");

const parseInput = names => {
  let namesArr = names.split(",");
  output.innerHtml = namesArr[0];
};

butt.addEventListener("click", () => {
  //  take input
  let names = input.value;
  // create array
  let namesArr = names.split(",");
  // remove white space (spaces, tabs....)
  let formated = namesArr.map(n => n.trim());
  // filter
  let filtered = formated.filter(n => n !== "dada patrasova");
  // set content of the output
  output.innerHTML = filtered;
});
