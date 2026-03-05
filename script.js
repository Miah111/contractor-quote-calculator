function calculateQuote() {
  alert("Button works!");
}
let squareFeet = parseFloat(document.getElementById("squareFeet").value);
  let jobRate = parseFloat(document.getElementById("jobType").value);
  let laborRate = parseFloat(document.getElementById("laborRate").value);
  let laborHours = parseFloat(document.getElementById("laborHours").value);

if (isNaN(squareFeet) || isNaN(laborRate) || isNaN(laborHours)) {
  alert("Please fill out all fields");
  return;
}
  let materialCost = squareFeet * jobRate;
  let laborCost = laborRate * laborHours;

let total = materialCost + laborCost;

document.getElementById("result").innerText
  =
  "total: $" + total.toFixed(2);
}
