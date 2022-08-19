const name = 'Sergey';

let check = typeof name == 'string' ? 'Hello ' + name : 'Ошибка, не тот тип данных';
console.log(check);

console.log('======================');

let temp = 1;
console.log(temp + ' -> ' + typeof temp);
temp = 'word';
console.log(temp + ' -> ' + typeof temp);
temp = true;
console.log(temp + ' -> ' + typeof temp);
temp = 234567890123456n;
console.log(temp + ' -> ' + typeof temp);
temp = null;
console.log(temp + ' -> ' + typeof temp);
temp = NaN;
console.log(temp + ' -> ' + typeof temp);
temp = undefined;
console.log(temp + ' -> ' + typeof temp);
console.log('prompt -> ' + typeof prompt);
temp = {
    city: 'Kharkiv'
}
console.log(temp + ' -> ' + typeof temp);
temp = ['one', 'two'];
console.log(temp + ' -> ' + typeof temp);
// temp = NaN;
// console.log('word -> ' + typeof 'wrod');
// console.log('true -> ' + typeof true);
// console.log('234567890123456n -> ' + typeof 234567890123456n);
// console.log('null -> ' + typeof null);
// console.log('NaN -> ' + typeof NaN);
// console.log('undefined -> ' + typeof undefined);
// console.log('prompt -> ' + typeof prompt);
// console.log('' + typeof undefined);
