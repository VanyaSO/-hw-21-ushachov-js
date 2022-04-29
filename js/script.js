'use strict'

// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’
console.log('///TS1')
const arrFirst = [`a`, `b`, `c`, `d`];
let string = arrFirst.toString();
let string1 = string.replace(/\,/g,"+");
let string2 = string1.replace(/\+c/,",c");

console.log(string2);

// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
// Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной
console.log('///TS2')

const arrSecond = [2, 5, 3, 9];
let result = (arrSecond[0] * arrSecond[1]) + (arrSecond[2] + arrSecond[3]);

console.log(result);

// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
console.log('///TS3')
const arrThird = [ [1, 2, 3], [4, 5, 6], [7,8,9] ].flat();

for( let i = 0; i < arrThird.length; i += 1){
    if(arrThird[i] === 4){
        console.log(arrThird[i]);
    }
}
// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.
console.log('///TS4')
const objectFour = {
    js:['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};

console.log(objectFour.js[0]);

// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
console.log('///TS5');
const arrFive = [];
let strX = 'x';

for (let i = 0; i < 5; i++) {
    arrFive.push(strX);
    strX += 'x';
}
console.log(arrFive);

// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.?
console.log('///TS6');
const arrSix = [];

for (let i = 1; i <= 5; i++) {
    let numX = '';
    for(let y = 0; y < i; y++){
        numX += i;
    }
    arrSix.push(numX);
}
console.log(arrSix);

// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
// Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
// Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].
console.log('///TS7');
const arrSeven = [];

function arrayFill(item,amount){
    for(let i = 1; i <= amount; i++) {
        arrSeven.push(item);
    }
}
arrayFill('x',5);
console.log(arrSeven);

//8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
console.log('///TS8');
const arr = [2,7,2,34,6];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 10) {
        console.log(i + 1);
        break;
    }
}
// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
console.log('///TS9');
const arrNine = ['a','b','c'];
const arrNineNew = [];

for(let i = arrNine.length - 1; i >= 0; i -= 1){
    arrNineNew.push(arrNine[i]);
}
console.log(arrNineNew);


// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
console.log('///TS10');
const arrTen = [[1, 2, 3], [4, 5], [6]];

let sumArrTenEl = arrTen.flat().reduce(function(acc, cur) {
    return acc + cur;
}, 0);

console.log(sumArrTenEl);

// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
console.log('///TS11');
const arrEleven = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let sumArrEleven =  arrEleven.flat(2).reduce(function(acc, cur) {
    return acc + cur;
}, 0);

console.log(sumArrEleven);
