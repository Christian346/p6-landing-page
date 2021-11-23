var menubtn = document.querySelector('.menu-btn')
var triangle = document.querySelector('.triangle')
var menuphone = document.querySelector('.main-nav-li')


menubtn.addEventListener('click', show)

function show(){  
    menuphone.classList.toggle('show')
    triangle.classList.toggle('show')

}
