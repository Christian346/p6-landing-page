
//arrays
var peoplepara = [" We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit. ",
" Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience. ",
"Incredible end results! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!  "];
var people = ["Emily R","Thomas S.","Jennie F."];
var peoplepos = [" Marketing Director","Chief Operating Officer","Business Owner"];
var images =["images/image-emily.jpg","images/image-thomas.jpg","images/image-jennie.jpg"]


for(var i = 0; i < people.length; i++){
   
//create element
contentdiv = document.createElement('div');

//select where text will go
var accounts = document.querySelector(".people")

//create variable with content
var content = `
<div>
      <p class = "para"> 
             <img src="${images[i]}" alt="" class="img-people">
                   ${peoplepara[i]}
                    <p class = "user">${people[i]}</p> 
                    <p class = "position">${peoplepos[i]}</p>
                 </p>
       </div>
 <div>
                 
`;

//inject into account content with inner html included
contentdiv.innerHTML = content;
   accounts.append(contentdiv) 
}

var menubtn = document.querySelector('.menu-btn')
var triangle = document.querySelector('.triangle')
var menuphone = document.querySelector('.main-nav-li')

//recheck addeventListeners and how they work!
menubtn.addEventListener('click', show)

function show(){  
    menuphone.classList.toggle('show')
    triangle.classList.toggle('show')

}

