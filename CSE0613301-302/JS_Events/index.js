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
const sForm = document.getElementById('submit-form');
sForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    const text = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const div = document.getElementById('show');
    div.innerHTML = `<h3>Name: ${text}</h3>
                    <p>Email: ${email}</p>`;
})

const text = document.getElementById('name-input');
text.style.padding = '10px';
text.addEventListener('focus', ()=> {
    text.style.backgroundColor = 'lightgreen';
    text.style.border = '1px solid green';
    text.style.borderRadius = '5px';
})
const email = document.getElementById('email-input');
email.style.padding = '10px';
email.addEventListener('focus', ()=> {
    email.style.backgroundColor = 'lightyellow';
    email.style.border = '1px solid yellow';
    email.style.borderRadius = '5px';
})