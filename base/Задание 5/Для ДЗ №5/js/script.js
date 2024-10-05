'use strict'

let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    answer = document.querySelector('#prompt'),
    menuItemLi = document.createElement('li');



menu.insertBefore(menuItem[2], menuItem[1]);
menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый элемент';
menu.appendChild(menuItemLi);


title.textContent = 'Мы продаем только подлинную технику Apple';
document.body.style.backgroundImage = 'url("img/apple_true.jpg")';
adv.remove();

let form = prompt("Ваше отношение к технике Apple?");

answer.textContent = form;

