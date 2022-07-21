document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".nav__title");
    const navMenu = document.querySelector(".nav");
    const btnClose = document.querySelector(".nav__btn");
    const logo = document.querySelector("#logo");


    burger.onclick = function () {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.height= "100%";
        document.getElementById("mySidenav").style.borderRadius= "0";
        document.getElementById("mySidenav").style.top= "0";
        document.getElementById("mySidenav").style.right= "0";
        btnClose.classList.add("active");
        burger.classList.add("dn");
        logo.setAttribute('src', 'img/logoW.svg');
    },
    
    btnClose.onclick = function () {
        document.getElementById("mySidenav").style.height= "0";
        document.getElementById("mySidenav").style.top= "0px";
        document.getElementById("mySidenav").style.right= "0px";
        btnClose.classList.remove("active");
        burger.classList.remove("dn");
        logo.setAttribute('src', 'img/logo.svg');
    }    
  });