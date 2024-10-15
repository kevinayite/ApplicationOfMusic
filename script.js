// const menuOpen = document.getElementById("menu-open");
// const menuClose = document.getElementById("menu-close");

// const sidebar = document.getElementById('.container .sidebar');

// menuOpen.addEventListener('click', ()=> sidebar.style.left ='0');
// menuClose.addEventListener('click', () => sidebar.style.left = '-100%');




const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");

// Use querySelector to select the sidebar by class
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => sidebar.style.left = '0');
menuClose.addEventListener('click', () => sidebar.style.left = '-100%');
