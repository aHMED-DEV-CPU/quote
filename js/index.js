
function generator() {
    var quotes = {
    author1:{
    text : `<p class=" fs-2 fw-bolder mt-4" >“Be yourself; everyone else is already taken.”</p>
        <p class=" fs-2 fw-bolder mt-4" >--Oscar Wilde</p>`,
    },
    author2:{
    text : `<p class=" fs-2 fw-bolder mt-4" >“So many books, so little time.”</p>
        <p class=" fs-2 fw-bolder mt-4" >--Frank Zappa</p>`,
    },
    author3:{
    text : `<p class=" fs-2 fw-bolder mt-4" >“A room without books is like a body without a soul.”</p>
        <p class=" fs-2 fw-bolder mt-4" >--Marcus Tullius Cicero</p>`
    },
    author4:{
    text : `<p class=" fs-2 fw-bolder mt-4" >“You only live once, but if you do it right, once is enough.”</p>
        <p class=" fs-2 fw-bolder mt-4" >--Mae West</p>`
    }
}
var randomArray =[quotes.author1.text , quotes.author2.text , quotes.author3.text , quotes.author4.text]
    document.getElementById("quotetext").innerHTML=randomArray[Math.floor(Math.random() * randomArray.length)];
}
var friends = [ 2 ,3 , 5 , 7]
console.log(friends.slice(1 , 3));
console.log(friends);
