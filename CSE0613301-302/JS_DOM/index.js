// change background color
const body = document.body;
body.style.backgroundColor = 'lightblue';

// set background image
const bg = document.getElementById('container');
bg.style.backgroundImage = 'url(./moon.jpg)';
bg.style.height = '500px';
bg.style.width = '700px';
bg.style.backgroundRepeat= 'no-repeat';
bg.style.backgroundSize = 'cover';

// change heading styles
const heading = document.getElementById('heading');
heading.style.fontSize = '30px';
heading.style.color = 'lightgray';
heading.style.textAlign = 'center';

// change paragraph styles
const para = document.getElementById('para');
para.style.fontSize = '20px';
para.style.color = 'lightgray';
para.style.textAlign = 'center';


// create new image element
const newImage = document.createElement('img');
const parent = document.getElementById('container');
newImage.setAttribute('src', './moon.jpg');
newImage.setAttribute('width', '200px');
parent.appendChild(newImage);

// change innerText and innerHTML
const p = document.getElementById('para');
p.innerText = 'new text';
const h3 = document.getElementById('heading');
h3.innerHTML = '<p>This is the new HTML </p>'


// traverse an array of elements
const divs = document.getElementsByClassName('border');
for(let i=0; i<divs.length; i++){
    divs[i].innerText = `This is div${i}`;
    divs[i].style.border = '2px solid black';
    divs[i].style.padding = '20px';
}


// add a new class to an element's existing class list
for(let i=0; i<divs.length; i++){
    divs[i].classList.add('set-width');
}