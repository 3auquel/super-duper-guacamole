let money, time;


function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("ВВедите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
};
start();




let appData = {
    budget: money,
    times: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = +prompt("Во сколько обойдется?", '');
        if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseExpenses();

function chooseOptExpenses() {

    for (let i = 0; i < 3; i++) {
        let a = prompt("Введите необязательную статью расходов в этом месяце", ''),
            b = +prompt("Во сколько обойдется?", '');
        if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            
            appData.optionalExpenses[i+1] = b;
        } else {
            i--;
        }
    }
};
chooseOptExpenses();

function detectPerDay() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
};
detectPerDay();

function detectLevel() {

    if (appData.moneyPerDay < 100) {
        console.log("минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log(" Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("вы богаты");
    } else {
        console.log("Ошибка");

    }
};
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("какова сумма накоплений"),
            percent = +prompt("какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с депозита: " + appData.monthIncome);
    }
}
checkSavings();