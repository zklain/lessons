// const addClass = (elem, class) => {
// //   elem.classList.add(class);
// // // };

// const redButton = document.getElementById('makeRed');
// const greenButton = document.getElementById('makeGreen');

// redButton.addEventListener('click', () => {
//   const nadpis = document.getElementById('heading');

//   if (nadpis.classList.contains('green')) {
//     nadpis.classList.remove('green');
//   }
//   nadpis.classList.toggle('red');
// });

// greenButton.addEventListener('click', () => {
//   document.getElementById('heading').classList.toggle('green');
// });

const arr = [12, 12, 12, 12];

const res = arr.map(elem => elem ** 2);

console.log(res);

const base = document.getElementsByName('base')[0].value;
const power = document.getElementsByName('power')[0].value;
console.log(base ** power);
