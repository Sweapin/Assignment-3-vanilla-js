let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");


btn.onclick = function() {
    sidebar.classList.toggle('active');
}
searchBtn.onclick = function() {
    sidebar.classList.toggle('active');
}

// Modal element

var modal = document.getElementById('simpleModal');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
    modal.style.display = 'block';
}
// Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }
}
