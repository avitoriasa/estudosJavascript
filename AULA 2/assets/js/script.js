let currentNumberWapper = document.getElementById("currentNumber");
let currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWapper.innerHTML = currentNumber;
}