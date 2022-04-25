// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let amount = JSON.parse(localStorage.getItem('amount'));
console.log(amount);
let wallet = document.getElementById('wallet');
wallet.innerText=amount;

 async function main(){
     try{
    const query = document.getElementById('search').value;
    const search = await fetch(`https://www.omdbapi.com/?apikey=2a12030&s=${query}`)

    const data = await search.json();
    // console.log(data.Search);
         return data.Search;
        //  remain(data.Search)
     }catch (error){
         console.log(error);
     }
}

async function remain(){
    let noww = await main();
    if(noww==undefined){
        return;
    }
   append(noww);
    console.log(noww)
 }

 function append(movie){
     document.getElementById('movies').innerHTML=null;
     console.log(movie)
     movie.forEach(function(el){
         let div = document.createElement('div');
         div.setAttribute('class', 'movie-tab');

         let btn= document.createElement('button');
         btn.innerText='Book Now';
         btn.setAttribute('class', 'book_now');
        //  let data = [el.Poster, el.Title,];
        //  console.log(data);
         btn.addEventListener('click',function() {
           info(el)
         })

         let image = document.createElement('img');
         let h3 = document.createElement('h3');

         image.src=el.Poster;
         h3.innerText=el.Title;

         div.append(image,h3,btn);
         document.getElementById('movies').append(div);
     })
 }
let id;
 function debouncing(func,delay){
     if (id){
         clearTimeout(id);
     }
     id=setTimeout(function(){
         func()
     },delay*1000)
 }

 function info(x){
    localStorage.setItem('movie',JSON.stringify(x))
    window.location.href = 'checkout.html';
     console.log(1);
 }