// 1
let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

console.log(vegetables.join(' | '));
console.log('======================');

// 2
let names = 'Вася;Петя;Вова;Олег'

console.log(names.split(';'));
console.log('======================');

// 3
function hello2(name) {
 let reply = name ? 'Привет ' + name : 'Привет гость';
    console.log(reply); 
}

// let name = prompt('Введите свое имя');
hello2(name);
console.log('======================');

// 4
const fruits = ['яблоко', 'ананас', 'груша'];

for(let i = 0; i < fruits.length; i++){
    fruits[i] = fruits[i].toUpperCase();
}
const fruitsInUpperCase = fruits;
console.log(fruitsInUpperCase);
console.log('======================');

// 5
function addOneForAll(...args) {
    for(let i = 0; i < args.length; i++){
        args[i] += 1;
    }
    return args
}
const val = addOneForAll(1, 2, 3, 4);
console.log(val);
console.log('======================');

// 6
function getSum(...args) {
    let temp = 0;
    for(let i = 0; i < args.length; i++){
        temp += args[i];
    }
    return temp
}

const sum = getSum(1, 2, 3, 4);
console.log(sum); // 10
console.log('======================');

// 7
const arr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
const numberArray = arr.filter(item => typeof item === "number"); // [1, 2, 3, 4, 7];
console.log(numberArray);
console.log('======================');

// 8
const newArr = [0,false,1];

function arrayTesting (array){
    let check = false;
    for(let i = 0; i < array.length; i++){
        if(array[i]){
            check = true;
        }
    }
    let reply = check ? 'Нашли true значение ': 'Ничего нет';
    console.log(reply);
}
arrayTesting(newArr);