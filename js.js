var menubtn = document.querySelector('.menu-btn')
var triangle = document.querySelector('.triangle')
var menuphone = document.querySelector('.main-nav-li')

//recheck addeventListeners and how they work!
menubtn.addEventListener('click', show)

function show(){  
    menuphone.classList.toggle('show')
    triangle.classList.toggle('show')

}
