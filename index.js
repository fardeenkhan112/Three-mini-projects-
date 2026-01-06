let count = 0;
function myFunction(action) {
  switch (action) {
  case 'add':
   count++;
  break;
 case 'subtract':
    count--;
  break;
 case 'reset':
  count = 0;
  break;
  default:
  return;
}
document.getElementById("num").innerText = count;
}
function showPassword() {
var pass = document.getElementById("password");
if (pass.type === "password") {
    pass.type = "text";
} else {
   pass.type = "password";
}
}
function checkNumber() {
var num = document.getElementById("number").value;
var result = document.getElementById("result");
if (num === "") {
 result.innerText = "Pehle number to daal bhai mere";
 result.style.color = "orange";
return;
}
    var number = Number(num);
    var oddEvenText = "";
    var oddEvenColor = "";
    var primeText = "";
    var primeColor = "";
    var isPrime = true;
switch (number % 2) {
  case 0:
 oddEvenText = "Even number hai";
 oddEvenColor = "green";
  break;
  default:
  oddEvenText = "Odd number hai";
  oddEvenColor = "red";
}
if (number <= 1) {
   isPrime = false;
} else {
for (var i = 2; i < number; i++) {
if (number % i === 0) {
  isPrime = false;
break;
}}}
if (isPrime) {
  primeText = "Prime hai";
  primeColor = "green";
} else {
  primeText = "Prime nahi hai";
  primeColor = "red";
}
result.innerHTML =
number + " " +"<span style='color:" + oddEvenColor + "'>" + oddEvenText + "</span>" +" OR " +"<span style='color:" + primeColor + "'>" + primeText + "</span>";
}
