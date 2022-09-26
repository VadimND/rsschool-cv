const year = document.getElementById("year");
let today = new Date(); 

document.addEventListener("DOMContentLoaded", function(event) {
    year.innerText = today.getFullYear(); 
});