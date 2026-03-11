function calculateQuote() {
  let squareFeet = parseFloat(document.getElementById("squareFeet").value);
  let jobType = parseFloat(document.getElementById("jobType").value);
  let laborRate = parseFloat(document.getElementById("laborRate").value); 
  let laborHours = parseFloat(document.getElementById("laborHours).value);
  let materials = parseFloat(document.getElementById("materials").value);
  let profit = parseFloat(document.getElementById("profit").value);
  let tax = parseFloat(document.getElementById("tax").value);

if(isNaN(squareFeet) || isNaN(laborRate) || isNaN(laborHours)){
  alert("Please fill in required fields");
  return;}

  let jobCost = squareFeet * jobType;
  let laborCost = laborRate * laborHours;
  let subtotal = jobCost + laborCost + materials;
  let profitAmount = subtotal * (profit / 100);
  let taxAmount = subtotal * (tax / 100);
  let total = subtotal + profitAmount + taxAmount;
  
document.getElementById("result").innerHTML = "Total Quote: $" + total.toFixed(2);
}
