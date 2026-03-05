function calculateQuote(){
  alert("Button works!");
}
let squareFeet = Number(document.getElementById("squareFeet").value);
  let jobRate = Number(document.getElementById("jobType").value);
  let laborRate = Number(document.getElementById("laborRate").value);
  let laborhours = Number(document.getElementById("laborHours").value);
  let materials = Number(document.getElementById("materials").value);
  let profit = Number(document.getElementById("profit").value);
  let Tax = Number(document.getElementById("tax").value);

if(
  isNaN(squareFeet) ||
  isNaN(jobRate) ||
  isNaN(laborRate) ||
  isNaN(laborHours) ||
  ){
  alert("Please fill out required fields");
  return;
}
  let materialCost = squareFeet * jobRate;
  let laborCost = laborRate * laborHours;
  let subtotal = materialCost + laborCost + (materials || 0);
  let profitAmount = subtotal * ((profit || 0) /100);
  let taxAmount = subtotal * ((tax || 0) /100);
  let total = subtotal + profitAmount + taxAmount;

document.getElementById("result").innerText = "Total Estimate: $" + total.toFixed(2);
}
function savEstimate() {
  let resultText = documentElementById("result").innerText;
  localStorage.setItem("savedEstimate",resultText);
  document.getElementById("savedMessage").innerText = :"Estimate Saved Successfully";
}
window.onload = function() {
  let saved = localStorage.getItem("savedEstimate");
  if(saved){ 
  document.getElementById("savedMessage").innerText = "Last Saved Estimate:" + saved;
  }
}
