// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let amount = JSON.parse(localStorage.getItem('amount'));
console.log(amount);
let wallet = document.getElementById('wallet');
wallet.innerText=amount;


let  detail = JSON.parse(localStorage.getItem('movie'));
console.log(detail);

let div = document.createElement('div');
div.setAttribute('class', 'tab');
let image = document.createElement('img');
let h3 = document.createElement('h3');
image.src=detail.Poster;
h3.innerText=detail.Title;
div.append(image,h3)
document.getElementById('movie').append(div);

function submit(){
    let seat = document.getElementById('number_of_seats').value;
    let st1 = seat*100
    if(st1>amount || seat==''){
        alert('Insufficient balance');
    }
    else if (st1<=amount ){
        alert('Booking Successfull');
        let num = amount-st1;
        console.log(num);
        document.getElementById('user_name').value='';
  
        wallet.innerText=num;
        localStorage.setItem('amount',JSON.stringify(num));
        window.location.reload();
    }
}