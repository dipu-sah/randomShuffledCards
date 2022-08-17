let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const container = document.getElementById("container");
let colors = [
  "red",
  "green",
  "blue",
  "olive",
  "pink",
  "brown",
  "grey",
  "skyblue",
  "purple",
];
const shuffleButton = document.getElementById("shuffleButton");
const sortButton = document.getElementById("sortButton");
shuffleButton.addEventListener("click", shuffle);
sortButton.addEventListener("click", sortArray);
renderNumbersInContainer();

function sortArray() {
  numbers.sort(); // inbuilt js function to sort the array
  renderNumbersInContainer();
}
shuffle(); // start with shuffled array
function shuffle() {
  // code to randomizely shuffle the array
  let tempArray = [...numbers];
  let n = Math.floor(Math.random() * numbers.length); // random length for the loo[]
  for (let i = 0; i < n; i++) {
    let j = Math.floor(Math.random() * n); // random position
    [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
  }
  numbers = tempArray;
  renderNumbersInContainer();
}

// function to render the numbers
function renderNumbersInContainer() {
  // create the html for the container using numbers
  let childrens = numbers.reduce((prev, el) => {
    return (
      prev +
      `<div style='background-color:${
        colors[el - 1]
      }; color:white; ' class='w-1/3 flex items-center justify-center text-4xl'>
    ${el}
    </div>
    `
    );
  }, "");
  container.innerHTML = childrens;
}
