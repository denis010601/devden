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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X190aXRsZVwiKTtcbiAgICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XG4gICAgY29uc3QgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fYnRuXCIpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ29cIik7XG5cblxuICAgIGJ1cmdlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKS5zdHlsZS5oZWlnaHQ9IFwiMTAwJVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKS5zdHlsZS5ib3JkZXJSYWRpdXM9IFwiMFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKS5zdHlsZS50b3A9IFwiMFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKS5zdHlsZS5yaWdodD0gXCIwXCI7XG4gICAgICAgIGJ0bkNsb3NlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QuYWRkKFwiZG5cIik7XG4gICAgICAgIGxvZ28uc2V0QXR0cmlidXRlKCdzcmMnLCAnaW1nL2xvZ29XLnN2ZycpO1xuICAgIH0sXG4gICAgXG4gICAgYnRuQ2xvc2Uub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVNpZGVuYXZcIikuc3R5bGUuaGVpZ2h0PSBcIjBcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVNpZGVuYXZcIikuc3R5bGUudG9wPSBcIjBweFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKS5zdHlsZS5yaWdodD0gXCIwcHhcIjtcbiAgICAgICAgYnRuQ2xvc2UuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJkblwiKTtcbiAgICAgICAgbG9nby5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpbWcvbG9nby5zdmcnKTtcbiAgICB9ICAgIFxuICB9KTsiXSwiZmlsZSI6Im1haW4uanMifQ==