let userName = 'alex',
    age = 30,
    mail = 'mail@mail.ru';

document.write(`Пользователю ${userName} ${age} лет, его почта ${mail}`);


function makeArr() {
    var items = [];
    for (let i = 0; i < 10; i++) {
        var item = function () {
            console.log(i);
        };
        items.push(item);
    }

    return items;
}
var arr = makeArr();
arr[1]();
arr[3]();
arr[7]();

let fun = () => {
    console.log(this);
};

fun();

let obj = {
    num: 5,
    saynumbr: function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
};
obj.saynumbr();

let btn = document.querySelector("button");

btn.addEventListener('click', function () {
    let show = () => {
        console.log(this);
    
    };
    show();
});

function calcOrDoble(number,basis=2){
    console.log(number*basis);
}

calcOrDoble(3,5);
calcOrDoble(6);

class Rectagle {
    constructor(height,width=3){
        this.height = height;
        this.width = width;
    }

    calcArea(){
        return this.width*this.height;
    }
}
const square = new Rectagle(4);
console.log(square.calcArea());


let video= [ 'ytube','twich','rutube'],
blogs = ['word', 'calc', 'math'],
internet = [...video,...blogs,'vk','facebook'];
console.log(internet);

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a+b+c);
}

let numbers = [2,5,3];
log(...numbers);