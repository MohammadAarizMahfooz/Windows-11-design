let startbtn = document.getElementsByClassName("start-btn")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

startbtn.addEventListener('click', () => {
    if (startmenu.style.bottom=="46px") {
        startmenu.style.bottom = "-650px";
    }
    else{
        startmenu.style.bottom = "46px";
    }
})