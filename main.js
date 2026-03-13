// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log("Числа от 1 до 10:");
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// console.log("\nЧётные числа от 1 до 10:");
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log("\nСумма чисел от 1 до 10:", sum);

// let count = 0;
// while (count < 3) {
//     console.log("Count:", count);
//     count++;
// }


// let number = 5;
// while (number >= 0) {
//     console.log(number);
//     number--;
// }

// let doValue = 0;
// do {
//     console.log("Value:", doValue);
//     doValue++;
// } while (doValue < 3);


// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i === 8) {
//         break;
//     }
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// for (let i = 1; i <= 4; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(3, 5));

// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(3, 5));

// function sayHello(name) {
//     console.log(`Hello, ${name}`);
// }
// sayHello("Тимофей");

// function printInfo(name, age) {
//     console.log("Имя:", name);
//     console.log("Возраст:", age);
// }
// printInfo("Настя", 20);
// printInfo("Никита", 22);

// function greet(name = "Гость") {
//     console.log("Привет, " + name);
// }
// greet();
// greet("Анастасия");

// function calculateDiscount(price, discount = 10) {
//     return price - (price * discount / 100);
// }
// console.log(calculateDiscount(1000));
// console.log(calculateDiscount(1000, 20));
// console.log(calculateDiscount(500, 5));

// const add = function (a, b) {
//     return a + b;
// };
// console.log(add(2, 3));

// function makeCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }
// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function sumFunc(a, b) {
//     return a + b;
// }

// const sumFunc2 = (a, b) => a + b;

// const double = x => x * 2;

// constsumFunc3 = (a, b) => a + b;

// constsayGreeting = () => console.log("Hello");

// const square = x => x * x;

// const calculate = (a, b) => {
//     let result = a + b;
//     return result * 2;
// }

let numbersArr = [1, 2, 3, 4, 5];
console.log(numbersArr);

console.log(numbersArr[0]);
console.log(numbersArr[1]);

let colors = ["красный", "зелёный", "синий"];
console.log("Первый элемент:", colors[0]);
console.log("Последний элемент:", colors[2]);
colors[1] = "жёлтый";
console.log("Изменённый массив:", colors);

console.log(numbersArr.length);

numbersArr.push(10);
console.log(numbersArr);

numbersArr.pop();
console.log(numbersArr);

let students = [];
students.push("Вадим");
students.push("Влад");
students.push("Лиза");
students.pop();
console.log(students);

let numbers2 = [10, 20, 30];
for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i]);
}

for (let value of numbers2) {
    console.log(value);
}

let mixedArray = [1, "text", true, 3.14];
console.log(mixedArray);

console.log(numbersArr.includes(1));
console.log(numbersArr.index0f(2));

console.log(fruits.includes("яблоко"));
console.log(fruits.includes("манго"));

let cities = ["Москва", "Санкт-Петербург", "Казань", "Новосибирск", "Екатеринбург"];
let searchCity = "Казань";
let index = cities.indexOf(searchCity);
if (index !== -1) {
    console.log(`Город "${searchCity}" найден! Индекс: ${index}`);
} else {
    console.log(`Город "${searchCity}" не найден в массиве`);
}

