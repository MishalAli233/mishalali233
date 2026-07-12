const search = document.getElementById("search");

if(search){
search.addEventListener("keyup", function(){

let value = search.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

if(card.innerText.toLowerCase().includes(value)){
card.parentElement.style.display = "block";
}
else{
card.parentElement.style.display = "none";
}

});

});
}
