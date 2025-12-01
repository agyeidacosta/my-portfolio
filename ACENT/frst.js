





  const hamburger = document.querySelector('.hamburger'); 
  const navMenu = document.querySelector('.nav-menu'); 
  const closeBtn = document.querySelector('.nav-menu .close'); 
  const navLinks = document.querySelectorAll('.nav-menu a'); // select all links 
 
  // Open menu 
  hamburger.addEventListener('click', () => { 
    navMenu.classList.add('active'); 
  }); 
 
  // Close menu with close button 
  closeBtn.addEventListener('click', () => { 
    navMenu.classList.remove('active'); 
  }); 
 
  // Close menu when a link is clicked 
  navLinks.forEach(link => { 
    link.addEventListener('click', () => { 
      navMenu.classList.remove('active'); 
    }); 
  }); 
 
   








function myfunction() {
  

const mess = document.getElementById("mess");
mess.style.display="block";

setTimeout(()=>{
mess.style.display="none";
},900);
}






function cost(){
const as=document.querySelector(".motive")
as.style.display="flex"

setTimeout(()=>{
as.style.display="none";
},5000);

}



function code(){
  const sad=document.querySelector(".las")
  sad.style.display="flex"

  setTimeout(()=>{
sad.style.display="none";
},5000);
}




