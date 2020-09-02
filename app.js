// Console.time
console.time();

// Map function
let letters = ["M", "F", "F"];

const mapped = letters.map((letter) => {
  return "" + letter + "";
});

// Console.log
console.log(mapped);

// Filter function
let numbers = [-34, 903, 9, 81, 75, 110, 6];

const filtered = numbers.filter((number) => {
  if (number >= 9) return numbers;
  return false;
});

// Console.log
console.log(filtered);

// Reduce function
const newNumbers = numbers.reduce((acc, current) => {
  return acc + current;
});

// Console.log
console.log(newNumbers);

// ForEach function
let names = ["MFF", "Real Madrid", "PSG", "Bayern Munchen"];

names.forEach((name, index) => {
  document.querySelector("#demo").innerHTML += index + 1 + ": " + name + "<br>";
});

// Arrow function
document.querySelector("#testing").addEventListener("click", () => {
  document.querySelector("#testing").innerHTML =
    "Here are the top clubs: " + "<br>";
});

// Console.table
console.table(names);

console.timeEnd();

// Map function
const squareRoot = numbers.map(Math.sqrt);

// testing console.table - prints resultat in table
console.table(squareRoot);

// Filter function
let ages = [9, 45, 99, 16, 45, 12];

const checkAdult = ages.filter((age) => {
  return age >= 25;
});

// Console.log
console.log(checkAdult);

// Reduce
const multipliedNumbers = numbers.reduce((total, num) => {
  return total * num;
});

// Location object properties
function loadMff() {
  location.assign("https://mff.se");
}

// TreateElement - AppendChild function
function createButton() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "MFF!";
  document.body.appendChild(btn);
}

// Location Host
document.querySelector(".btnHost").addEventListener("click", () => {
  document.querySelector(".hostTest").innerHTML = location.host;
});

// QuerySelectorAll - addEventListener
document.querySelector(".btnSelAll").addEventListener("click", () => {
  var x, i;
  x = document.querySelectorAll(".changeColor");
  for (i = 0; i < x.length; i++) {
    x[i].style.color = "yellow";
  }
});

// QuerySelector - Arrow function - addEventListener
document.querySelector("#checkResult").addEventListener("click", () => {
  document.querySelector("#result").innerHTML =
    "Square roots of numbers (of: " +
    numbers +
    "): <br>" +
    squareRoot +
    "<br>" +
    "Adult ages: " +
    checkAdult +
    "<br>" +
    "Multiplied numbers (of: " +
    numbers +
    ") = " +
    multipliedNumbers;
});

/*
// Location
document.querySelector("#btn1").addEventListener("click" , ()=>{
  var x = location.host;
  document.getElementById("d1").innerHTML = x;
});

// Reduce
var numbers = [550, 50, 300];

document.getElementById("modul1").innerHTML = numbers.reduce(myFunction);

function myFunction(total, num) {
    return total - num;
}

// QuerySelector
function myFunction3() {
  var x, i;
  x = document.querySelectorAll(".test");
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "yellow";
  }
  document.querySelector(".test").style.backgroundColor = "blue";
}

 // Arrow Function 
 document.querySelector("#btn3").addEventListener("click", () => {
  document.getElementById("d2").innerHTML = "Seccess";
  consol.log("Hello Glajan")
  });

 // Add EventListener
 document.getElementById("myBtn").addEventListener("click", displayDate);
  function displayDate() {
  document.getElementById("d3").innerHTML = Date();
}

// AppendChild
function myFunction() {
var node = document.createElement("LI");
var textnode = document.createTextNode("Great Team");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);

}

// Create Element
function myFunction2() {
  var btn = document.createElement("BTN")
  document.body.appendChild(btn;
}

// Filter
var ages = [18, 32, 25, 67, 55];
function check(age) {
  return age >= 21;
}

// Map
document.querySelector("#btn5").addEventListener("click", () => {
  var numbers2 = [25, 15, 55, 35];
  var newarray = numbers2.map((num) => num +5);

  for (var x = 0 ; x < newarray.length ; x++) {
    var list = document.createElement("a");
    list.innerHTML = newarray[x];
    document.getElementById("d5").appendChild(list);
  }
}); */
