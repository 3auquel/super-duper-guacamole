let drink = 0;

function shoot(arrow, headshot, fail) {
    console.log('вы сделали выстрел...');
    setTimeout(function () {
        Math.random() > .5 ? headshot({}) : fail('вы промохнулись');
    }, 3000)
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
shoot({},
    function (mark) {
        console.log('вы попали в цель');
        win(mark, buyBeer, giveMoney);
    },
    function (miss) {
        console.error(miss)
        loose();
    }
)