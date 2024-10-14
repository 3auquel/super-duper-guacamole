// let box = document.querySelector(".box"),
//     btn = document.querySelector('button');
// let width = box.clientWidth,
//     height = box.clientHeight;


//     console.log(box.getBoundingClientRect().left);
//     console.log(document.documentElement.clientWidth);
//     console.log(document.documentElement.clientHeight);
//     console.log(document.documentElement.scrollTop) ;


// btn.addEventListener('click', function () {
//     box.scrollTop =0;



// });
// scrollBy(0,200);
// scrollTo(0,200)
// function User(name,id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log('Hello ' + this.name);
//     }
// }
// User.prototype.exit = function(name){
//     console.log("user " + this.name + " leave")
// }

// let ivan = new User('Ivan', 22),
//     alex = new User('Alex', 11);

// ivan.exit();

// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//         hello() {
//             console.log(`Hello! ${this.name}`);
//         }
//         exit() {
//             console.log(`User ${this.name} leave`)

//         }

// }
// let ivan = new User('Ivan', 22),
//     alex = new User('Alex', 11);
// console.log(ivan);
// console.log(alex);
// ivan.hello();
// alex.hello();

// 'use strict';
// function showThis(a,b){
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a +b;

//     }
//     console.log(sum());
// }
// showThis(4,5);
// showThis(9,5);

//1 просто вызов  функции undefined\window
//2

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//     }
// }
// obj.sum();
// 2 метод обьекта-this= обьект
// 3 конструктор 9new) -tis = новый созданный обьект

// let user = {
//     name: "ivan"
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name);
//     console.log(this.name + " " + surname);

// }
// console.log(sayName.call(user, ' vanov'));
// console.log(sayName.apply(user, ['snow']));

// function count(n) {
//     return this * n
// }
// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));

// 4 указаник конкретного контекста - call.apply,bind
let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
})