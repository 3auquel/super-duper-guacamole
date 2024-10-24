let drink = 0;

function shoot(arrow) {
    console.log('вы сделали выстрел...');
    let promise = new Promise(function(resolve,reject){
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject('вы промохнулись');
        }, 3000);
    })
    return promise;
    
};

function win() {
    console.log('вы победили');
    (drink == 1) ? buyBeer(): giveMoney();

}

function buyBeer() {
    console.log('вам купили пиво');
}

function giveMoney() {
    console.log('вам дали деньги');
}

function loose() {
    console.log('вы проиграли');
}
shoot({})
.then(mark => console.log('вы попали в цель'))
.then(win)
.catch(loose)
