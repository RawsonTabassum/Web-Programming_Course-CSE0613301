// change background color with click
const button = document.getElementById('bg-btn');
const container = document.getElementById('container');
button.addEventListener('click', () => {
    if (container.style.backgroundColor != 'lightpink') {
        container.style.backgroundColor = 'lightpink';
    } else {
        container.style.backgroundColor = 'white';
    }
})

// increase counter with click
const h2 = document.getElementById('count');
const IncBtn = document.getElementById('inc-btn');
IncBtn.addEventListener('click', () => {
    let count = Number(h2.innerText);
    count++;
    h2.innerText = count;
})

// decrease counter with click
const DecBtn = document.getElementById('dec-btn');
DecBtn.addEventListener('click', () => {
    let count = Number(h2.innerText);
    count--;
    h2.innerText = count;
})


// delete an image with click
const image = document.getElementById('image');
const visibility = document.getElementById('visibility')
visibility.addEventListener('click', () => {
    if (image.style.display != 'none') {
        image.style.display = 'none';
        visibility.innerText = 'Show Image';
    } else {
        image.style.display = 'block';
        visibility.innerText = 'Hide Image';
    }
})

// hide a content with click
const p = document.getElementById('para');
const hideText = document.getElementById('hide-text');
hideText.addEventListener('click', () => {
    if (p.style.display != 'none') {
        p.style.display = 'none';
        hideText.innerText = 'Show Text';
    } else {
        p.style.display = 'block';
        hideText.innerText = 'Hide Text';
    }
})

// font size change with mouseover
const h3 = document.getElementById('font');
h3.addEventListener('mouseover', ()=> {
    h3.style.fontSize = '50px';
})

// show text upon keypress
const parentDiv = document.getElementById('form');
const input = document.getElementById('text-input');
const inp = document.createElement('p');
input.addEventListener('keyup', ()=> {
    inp.innerText = input.value;
})
inp.style.fontSize = '15px';
parentDiv.appendChild(inp);

// submit a form



// focus input field


// blur input field