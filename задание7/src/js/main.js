let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],
    expensesItem = document.getElementsByClassName('expenses-item')
expensesBtn = document.getElementsByTagName('button')[0],
    optexpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelectorAll('.choose-income'),
    checkboxItem = document.querySelectorAll('#savings'),
    sumValue = document.querySelectorAll('.choose-sum'),
    percentValue = document.querySelectorAll('.choose-percent'),
    yearValue = document.querySelectorAll('.year-value'),
    monthValue = document.querySelectorAll('.month-value'),
    dayValue = document.querySelectorAll('.day-value');





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
    savings: true,
    chooseExpenses: function () {
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
    },
    detectPerDay: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log(" Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("вы богаты");
        } else {
            console.log("Ошибка");

        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("какова сумма накоплений"),
                percent = +prompt("какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Введите необязательную статью расходов в этом месяце", ''),
                b = +prompt("Во сколько обойдется?", '');
            if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {

                appData.optionalExpenses[i + 1] = b;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function () {

        let items = prompt("Что принесет дополнительынй доход? (перечислиет через запятую)", "");
        if ((typeof (items)) != 'string' || (typeof (items) == null) || items == '') {
            console.log("Ошибка!");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что то еще?'));
            appData.income.sort();

        }


        appData.income.forEach(function (itemmassiv, i) {
            alert("Способы доп заработка:" + (i + 1) + " - " + itemmassiv);
        });
    }
};
for (let i in appData) {
    console.log("Наша программа включает в себя данные " + i + " - " + appData[i]);
}