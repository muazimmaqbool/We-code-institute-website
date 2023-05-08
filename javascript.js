let menu=document.querySelector("#menu");
let navbar=document.querySelector(".navbar");
menu.onclick=()=>{
    menu.classList.toggle("fa-times"); //fa-times : means X i.e menu becomes X
    navbar.classList.toggle("active");
}


