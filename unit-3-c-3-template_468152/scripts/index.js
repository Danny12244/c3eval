// Store the wallet amount to your local storage with key "amount"


let sum=0;
function addwallet(){

    let amount = document.getElementById("amount").value;
   
    let wallet = document.getElementById("wallet");
    let total =  sum+=Number(amount);
    wallet.innerText=total

    localStorage.setItem("amount", JSON.stringify(total));
}