// 1
console.log('Получить сумму квадратов всех чисел от 1 до числа, которое ввел юзер.');

function toSquare(number){
    let count = 0;
    for(let i = 1; i <= number; i++){
        count += i *i;     
    }
    return count;    
}

let userNumber;
let squareNumber;

do{
    userNumber = Number(prompt("Введите число"));
    console.log(`число ${userNumber}`);
    squareNumber = isNaN(userNumber) ? alert('значение не является числом') : toSquare(userNumber);

}while(isNaN(userNumber));

console.log(`сумма квадратов ${squareNumber}`);


// 2
console.log('Получить сумму квадратов всех чисел от 1 до числа, которое ввел юзер.');
let arrFilter = [3, 5, 12, 9, 23, 93, 17].filter(isBigEnough);

function isBigEnough(arrItem) {
    return arrItem > 2 && arrItem < 20
}

let arrSum = 0;
console.log(arrFilter);
arrFilter.forEach(elem => arrSum += elem);
console.log(arrSum);


// 3
console.log('Отфильтровать массив так, чтобы остались только те числа, которые больше 2 и меньше 20. И потом получить их сумму.');
let someArr = [[1, 6, 3, '6'], [10, 15, 13, '10']];

console.log(someArr);

function findNumber(arr){
    let number = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(typeof arr[i][j] === "number" && (arr[i][j] % 2) == 0 ){
                console.log(arr[i][j]);
                number.push(arr[i][j]); 
            }
        }
    }
    return findSum(number);
}

function findSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let newArr = findNumber(someArr);

console.log(newArr);


// 4
console.log('Написать функцию, которая устанавливает новые свойства в объект.');
const myObj = {
    name : 'Andrew',
    surname : 'dsfsdfsdf',
}


function newProperty(key, value, obj){
    obj[key] ? console.log("Уже есть") : obj[key] = value;
}

newProperty('height', 180 ,myObj);

console.log(myObj);


// 5
console.log('Создать цикл на 10 итераций. На каждой итерации если i четное, то вывести в консоль слово Fiz, если i не четное, то вывести в консоль слово Buz, если i кротное цифре 3, то вывести FizBuz.');

for(let i = 1; i <= 10; i++){
    // console.log(i);
    ((i % 3) == 0)||((i % 3) == 0 && (i % 2) == 0) ? console.log("FizBuz") : (i % 2) == 0 ? console.log("Fiz") : console.log("Buz");
} 

// 6
console.log('Написать логику нахождения факториала числа 10.');

function factorial(num){
    for(let i = num-1; i > 0; i--){
        num *= i;
    }
    return num;
}
let numToFac = 10;
let facOfNum = factorial(numToFac);
console.log(`Факториал числа ${numToFac} => ${facOfNum}`);


// 7
console.log('В пачке бумаги 500 листов. За неделю в офисе расходуется 1200 листов. Какое наименьшее количество пачек бумаги нужно купить в офис на 8 недель?');
function amountOfPaper(sheetsInReamPaper, consumptionPerWeek, weeksAmount){
    console.log(((consumptionPerWeek * weeksAmount) / sheetsInReamPaper) % 10);
    let requiredAmount = (consumptionPerWeek * weeksAmount) / sheetsInReamPaper;
    return requiredAmount + 1;
}
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let requiredAmount = amountOfPaper(sheetsInReamPaper, consumptionPerWeek, weeksAmount);

console.log(requiredAmount);