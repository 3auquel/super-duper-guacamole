// let num = 20;
// function showFirstMessagde(text){
//     alert(text);

//     console.log(num);
// }


// showFirstMessagde("далеко за полем поле");
// console.log(num);
// function calcul(a, b) {
//     return (a + b);
// }


// function returnVar() {
//     let num = 50;
//     return num;
// }
// let anotherNum = returnVar();
// console.log(anotherNum);

// let calc = function (a, b) {
//     return (a * b);
// }
// console.log(calc(2,4));
// console.log(calcul(2,4));

// let calc = (a, b) => a + b
// console.log(calc(4, 6))
// let str = 'test';
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// let eleven = "12.2px";
// // console.log(Math.round(eleven));
// console.log(parseInt(eleven));
// console.log(parseFloat(eleven));
// function learnJs(lang, callback){
//     console.log("I learn" + lang);
//     callback();
// }
// function done(){
//     console.log("I stady  3rd lesson")
// }
// learnJs("Js", done);
// let options = {
//     width:1024,
//     height: 1024,
//     name: "test"
// };
// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };
// delete options.bool;
// console.log(options);
// for(let key in options){
//     console.log("свойство " + key + " имеет значение " + options[key]);
// }
// console.log(Object.keys(options).length);
// let arr = ["first", 2, 3, "four", 5];

// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");
// console.log(arr);
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// arr.forEach(function (item, i, mass) {
//     console.log(i + ':' + item + "(массив: " + mass + ')');
// })
// let mass = [1, 2, 3, 4, 5, 6, 7];
// for (let key of mass) {
//     console.log(key);
// }
// let ans = prompt('', ''),
//     arr = [];
// arr = ans.split(',');
// console.log(arr);
// let arr = ["asffsas", 'saffsasf', 'asffsas', 'assaas'],
//     i =  arr.join(', ');
//     console.log(i);
let arr = [2,14,5],
    i =  arr.sort(compareNum);
    function compareNum(a,b){
        return a-b;
    }
    console.log(arr);
let soldier= {
    health: 400,
    armor: 100
};
let john = {
    health:100
};
john.__proto__ = soldier;
console.log(john);
console.log(john.armor);