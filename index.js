let Amt, term, rate, ans, isRepayment;
const Mor = document.getElementById("repayment");
const interest = document.getElementById("interestOnly");
const dis = document.getElementById("column2");
const resultElement = document.getElementById("result"); // Selecting the result display element

async function calculate() {
    Amt = parseFloat(document.getElementById("mortgageAmount").value);
    term = parseFloat(document.getElementById("mortgageTerm").value);
    rate = parseFloat(document.getElementById("interestRate").value);
    
    if (Mor.checked) {
        isRepayment = true;
    } else {
        isRepayment = false;  
    }
    
    if (isRepayment) {
        // Principal and Interest (P&I) Repayment Mortgage calculation
        const monthlyRate = (rate * 0.01) / 12;
        const numberOfPayments = term * 12;
        ans = (Amt * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
              (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        console.log(`Principal & Interest Repayment: ₹${ans.toFixed(2)}`);
    } else {
        // Interest-Only Mortgage calculation
        ans = (Amt * (rate * 0.01)) / 12;
        console.log(`Interest-Only Payment: ₹${ans.toFixed(2)}`);
    }
    
    resultElement.innerHTML = `<h4 style="color: white;">Monthly Repayment: ₹${ans.toFixed(2)}</h4>`;
}
