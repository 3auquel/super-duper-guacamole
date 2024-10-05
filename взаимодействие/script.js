let box = document.getElementById("box"),
    btn = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneheart = document.querySelector('.heart');
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'Green';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'Red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue'
// }
// heart.forEach(function (item, i, hearts) {
//     item.style.backgroundColor = "blue";
// });


let div = document.createElement('div'),
    text = document.createTextNode("Тут был я");

div.classList.add('black');    

// document.body.appendChild(div);
//  wrapper.appendChild(div);


// div.innerHTML = '<h1>Hello world! </h1>';
div.textContent = 'hello world!';

document.body.insertBefore(div,circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);
document.body.replaceChild(btn[1],circle[1]);

