function calculateQuote() {
  let squareFeet = parseFloat(document.getElementById("squareFeet").value);
  let jobType = parseFloat(document.getElementById("jobType").value);
  let laborRate = parseFloat(document.getElementById("laborRate").value); 
  let laborHours = parseFloat(document.getElementById("laborHours").value);
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

  let quote = {
    squareFeet: squareFeet,
    jobType: jobType,
    total: total 
  };
  let quotes = 
    JSON.parse(localStorage.getItem("quotes")) ||
    [];
  quotes.push(quote);

  localStorage.setItem("quote",
  JSON.stringify(quotes));

  displayQuotes();
  
document.getElementById("result").innerHTML = "Total Quote: $" + total.toFixed(2);
  document.getElementById("breakdown").innerHTML = "Job Cost: $" + jobCost.toFixed(2) + "<br>" + "Labor Cost: $" + laborCost.toFixed(2) + "<br>" +
    "Materials: $" + materials.toFixed(2) + "<br>" + "Profit: $" + profitAmount.toFixed(2) + "<br>" + "Tax: $" + taxAmount.toFixed(2);
}
function displayQuotes() {
  let quotes = 
    JSON.parse(localStorage.getItem("quotes")) ||
    [];
  let list = 
    document.getElementById("savedQuotes");
  list.innerHTML = "";
  quotes.forEach(function(q) {
    let item = document.createElement("li");
    
     item.textContent = 
     q.squareFeet + " sq ft - $" +
     q.total.toFixed(2);
  list.appendChild(item);
});
}
displayQuotes();
