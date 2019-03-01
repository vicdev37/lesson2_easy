

// if (num < 49) {
// 	console.log('Неверно')
// } else if (num > 100) {
// 	console.log("Много!")
// } else {
// 	console.log('Верно')
// };

// // тернарный оператор для сокращения записи цикла
// (num == 50) ? console.log('Верно'): console.log('Неверно')


// switch (num) {
// 	case num < 49:
// 		console.log('Неверно');
// 		break;
// 	case num > 100:
// 		console.log("Много!");
// 		break;
// 	case num > 80:
// 		console.log("Все еще много!");
// 		break;
// 	case 50:
// 		console.log("Верно!");
// 		break;
// 	default:
// 		console.log("Что-то пошло не так");
// 		break;	
// }

// // циклы (ПОКА переменная num будет меньше 55, мы будем выполнять определенные условия)
// let num = 50;
// // while (num < 55) {
// // 	console.log(num);
// // 	num++
// // }

// // сделай что то
// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
// 	if (i == 6) {
// 		continue
// 	}
// 	console.log(i)
// }

'use strict';

let money = +prompt("Ваш бюджет на месяц?"),
	time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};
console.log(appData.expenses)


// цикл While

// let i = 0;
// while (i < 2) {
// 	i++
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');

// 	if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
// 		a != '' && b != '' && a.length < 50) {
// 		console.log("done");
// 		appData.expenses[a] = b;
// 	} else {

// 	}
// };

// цикл do while

// let i = 0
// do {
// 	i++
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');

// 	if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
// 		a != '' && b != '' && a.length < 50) {
// 		console.log("done");
// 		appData.expenses[a] = b;
// 	} else {

// 	}
// } while(i < 2);



for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');

	if ( (typeof (a))=== 'string' && (typeof (a)) != null && (typeof (b)) != null
		&& a != '' && b != '' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;
	} else {

	}
};

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка")
}

