// toggle nav menu when screen turn small
const menuButton = document.getElementById("menu");
let navigation = document.getElementById("nav-bar-links");
let downloadBtn = document.getElementById("nav-bar-btn")
menuButton.addEventListener("click", ()=>{
 menuButton.classList.toggle("change");

  navigation.classList.toggle("active");
} );









// scroll button  on the whole page
const scrollBtn = document.getElementById("back-to-top");
 window.onscroll = ()=>{
  if(window.scrollY >= 100){
    scrollBtn.classList.add("fixed");
  }else{
    scrollBtn.classList.remove("fixed");
  }
}