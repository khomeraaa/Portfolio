"use strict";

//Activating Mobile Menu
const coords = { x: 0, y: 0 };
const colors = [
  "#5361ff",
  "#fafaff",
];
window.onload = function () {
  window.scrollTo(0, 0);
};
// Assuming 'circles' is a NodeList of elements
const circles = document.querySelectorAll('.circle'); // Adjust '.circle' to match your class

circles.forEach((circle) => {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[1];
  // console.log(colors[]);
});

const homeSection = document.getElementById('home');
const header = document.querySelector('.l-header')


// -------------------------------------------
window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

homeSection.addEventListener('mouseleave', () => {
  circles.forEach(circle => {
    circle.style.backgroundColor = colors[0]; // or simply 'black'
  });
});
homeSection.addEventListener('mouseenter', () => {
  circles.forEach(circle => {

    circle.style.backgroundColor = colors[1]; 
  });
});
header.addEventListener('mouseleave', () => {
  circles.forEach(circle => {
    circle.style.backgroundColor = colors[0]; // or simply 'black'
  });
});
header.addEventListener('mouseenter', () => {
  circles.forEach(circle => {

    circle.style.backgroundColor = colors[1]; 
  });
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 4 + "px";
    circle.style.top = y - 4 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.4;
    y += (nextCircle.y - y) * 0.4;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();





const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

//Toggling Menu by clicking in mobile menu links

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Changing Active Menu section while scrolling

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}

// Scroll Reveal Settings

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: false
})

sr.reveal('.home-title', {delay: 200});
sr.reveal('.home-scroll', {delay: 300});
sr.reveal('.home-img', {origin: 'right', delay: 400 });

sr.reveal('.about-img', {delay: 550});
sr.reveal('.about-subtitle', {delay: 600});
sr.reveal('.about-profession', {delay: 550});
sr.reveal('.about-text', {delay: 500});
sr.reveal('.about-social-icon', {delay: 600, interval: 200});

sr.reveal('.skills-subtitle', {});
sr.reveal('.skills-name', {distance: '20px', delay: 40, interval: 80});
// sr.reveal('.skills-img', {delay: 400});

sr.reveal('.portfolio-img', {interval: 200});

sr.reveal('.contact-subtitle', {delay: 100});
sr.reveal('.contact-text', {interval: 100});
sr.reveal('.contact-input', {delay: 400});
sr.reveal('.contact-button', {delay: 500});


function setFullHeight() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

window.addEventListener('resize', setFullHeight);
setFullHeight();




var glowInTexts = document.querySelectorAll(".glowIn");
glowInTexts.forEach(function (glowInText) {
  var letters = glowInText.textContent.split("");
  glowInText.textContent = "";
  letters.forEach(function (letter, i) {
    var span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = i * 0.07 + "s";
    glowInText.append(span);
  });
});
