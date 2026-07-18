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
// Dark Mode

const darkBtn = document.getElementById("darkBtn");

if(darkBtn){

darkBtn.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

});

}


// Search Tools

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let value = searchInput.value.toLowerCase();

let tools = document.querySelectorAll(".tool-card");


tools.forEach(function(tool){

let text = tool.innerText.toLowerCase();

if(text.includes(value)){

tool.style.display = "block";

}else{

tool.style.display = "none";

}

});

});

}
