const Total_Balance = document.getElementById("Total_Balance");
const Total_Income = document.getElementById('Total_Income');
const Total_expenses = document.getElementById('Total_expenses');
const Total_amount = document.getElementById("Total_amount");
const Full_description = document.getElementById("Full_description");
const btn = document.getElementsByClassName('add');
const transaction_list = document.getElementsByClassName("transaction_list")
// let transaction_lists = JSON.parse( localStorage.getItem("transaction_lists"))

btn[0].addEventListener('submit', function(e) {
    e.preventDefault();
    const  description = Full_description.value().trim();
    const amount = parseFloat(Total_amount.value());
    console.log("description", description);
    console.log("amount", amount);
    //get values from local storage
    let transaction_lists = JSON.parse(localStorage.getItem("transaction_lists")) || [];
    
});