//JS PORTFOLIO WEB - PERSONAL

//Menu icon navbar ---------------------------------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

//Función para filtrar las categorías de los proyectos
function verCategoria(cat){
    const items = document.getElementsByClassName("item");
    for(let i=0; i < items.length;i++){
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i<itemCat.length;i++){
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".portfolio nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
}

// BOTÓN DE SCROLL
//-------------------------------------------------------------------------------------
// Obtener el botón de scroll
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Función para mostrar u ocultar el botón de scroll según la posición de la página
window.onscroll = function() {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    }
  });

  scrollFunction();

  // Función para hacer el navbar sticky
  let header = document.querySelector(`.header`);
    
  header.classList.toggle('sticky',  window.scrollY > 100);

    // remove navbar when click navbar link (scoll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Función para desplazarse suavemente hacia arriba cuando se hace clic en el botón
scrollToTopBtn.onclick = function() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
};

// -------------- Dark light mode --------------
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-moon');
    document.body.classList.toggle('light-mode');
};


