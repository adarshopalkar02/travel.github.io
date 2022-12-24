




let menu =document.querySelector('#search-btn');
let navbar= document.querySelector('.search-bar-container');

let formBtn=document.querySelector('#login-btn');
let loginform= document.querySelector('.login-form-container');
let formclose= document.querySelector('#form1');

let polymenu = document.querySelector('#menu-bar');
let polynav = document.querySelector('.navbar');
let videoBtn = document .querySelectorAll('.vid-btn');



window.onscroll =() =>{
   menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    polymenu.classList.remove('fa-times');
    polynav.classList.remove('active');
    loginform.classList.remove('active');

 }
 menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    polymenu.classList.remove('fa-times');
    polynav.classList.remove('active');
    loginform.classList.remove('active');

 }
 polymenu.onclick = () => {
    polymenu.classList.toggle('fa-times');
    polynav.classList.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginform.classList.remove('active');

 }
 formBtn.onclick = () => {

    loginform.classList.toggle('active');

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    polymenu.classList.remove('fa-times');
    polynav.classList.remove('active');
 }
 formclose.onclick = () => {

    loginform.classList.remove('active');

 }


videoBtn.forEach( btn => {
   btn.addEventListener('click', ()=>{
      document.querySelector('.controls .active').classList.remove('active');
      btn.classList.add('active');
      let src = btn.getAttribute('data-src');
      document.querySelector('.video-slider').src =src;
   });
});


