// console.log('1 задание:');
// let p = document.createElement('p');
// let imgUrl = [
//     'https://rat.in.ua/wp-content/uploads/2019/11/6012-Pickle-Rick-200x200.png',
//     'https://rat.in.ua/wp-content/uploads/2019/11/6010-Open-Rick-200x200.png',
//     'https://pngimg.com/uploads/rick_morty/small/rick_morty_PNG4.png',
//     'https://rat.in.ua/wp-content/uploads/2019/11/6005-Morty-Sad-200x200.png',
//     'https://pngimg.com/uploads/rick_morty/small/rick_morty_PNG34.png',
//     'https://rat.in.ua/wp-content/uploads/2019/11/6024-Sun-200x200.png',
//     'https://st.gorodzovet.ru/uploads/ru/2022/5/30/photo600-9122917.jpg',
//     'https://pngimg.com/uploads/rick_morty/small/rick_morty_PNG34.png',
//     'https://rat.in.ua/wp-content/uploads/2019/11/6024-Sun-200x200.png',
//     'https://st.gorodzovet.ru/uploads/ru/2022/5/30/photo600-9122917.jpg'
// ]
// p.innerHTML = 'press to show image';
// p.style.cursor = 'pointer';
// p.style.border = '1px solid black';
// p.style.padding = '20px 0';
// p.style.textAlign ='center';
// document.body.append(p);

// //отрисовка картинки 
// function showImage(){
//     let img = document.createElement('img');
//     // let randomUrl = Math.floor(Math.random(0,imgUrl.length)*10);
//     let randomUrl = Math.floor(Math.random()*10);
//     img.setAttribute('src', imgUrl[randomUrl]);
//     img.onclick = function(){
//         this.remove();
//     }
//     document.body.append(img);
// }

// p.onclick = function(){
//     showImage();
// }


// console.log('2 задание:');

// // первый вариант
// const arrayForSum = [1, 2, 3, 0, 4, 5, 6];
// const arrayForSum1 = [1, 2, 3, 5, 4, 5, 6];

// Array.prototype.sumInArray = function(){
//     console.log('массив: ', this);
//     let result = 0;
//     if(this.indexOf(0) < 0){
//         return finalSum(this);
//     } else {
//         return cutArr(this);
//     }
// }

// function cutArr(arr){
//     arr = arr.reverse();
//     let result = arr.slice(0, arr.indexOf(0));
//     return finalSum(result);
// }

// function finalSum(arr){
//     let sum = 0; 
//     arr.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }

// let result = arrayForSum1.sumInArray();
// console.log('первый способ: ',result);
// let result1 = arrayForSum.sumInArray();
// console.log('первый способ: ',result1);

// // второй вариант 
// const arrayForSum3 = [1, 2, 3, 0, 4, 5, 6];
// const arrayForSum4 = [1, 2, 3, 5, 4, 5, 6];

// let sumOfArrayElements =  (array) => {
//     console.log('массив: ', array);
//     let zeroIndex = array.indexOf(0);
//     return array.reverse().slice(0, zeroIndex === -1 ? array.length : zeroIndex).reduce((res, acc) => res += acc , 0);
// };

// let newResult = sumOfArrayElements(arrayForSum3);
// console.log('второй способ: ', newResult);
// let newResult1 = sumOfArrayElements(arrayForSum4);
// console.log('второй способ: ', newResult1);


// console.log('3 Задание');

// function moreThanTen(arr){
//     let sum = 0;
//     let i = 0;
//     for(i; sum <= 10; i++){
//         sum +=arr[i];
//     }
//     return i;
// }

// let iteratorOfCount = moreThanTen(arrayForSum4);
// console.log( `итераций для суммы больше 10 - ${iteratorOfCount} `);


// console.log( '4 задание');

// let btn = document.querySelector('.button');
// btn.addEventListener('click', (e)=>{
//     console.log(document.querySelector('.console-text').value);
//     document.querySelector('.console-text').value = '';
// });


// console.log( '5 задание');

// let link = document.querySelectorAll('a');

// link.forEach(element=> {
//     element.addEventListener('mouseover',(e)=>{
//         element.innerText += ( ' ' + element.href);
//     });
// });
// link.forEach(element=> {
//     element.addEventListener('mouseout',(e)=>{
//         let text = element.innerText;
//         if(text.indexOf(element.href) > 0){
//             element.innerText = text.substring(0, text.indexOf(element.href));
//         }
//     });
// });


// console.log( '6 задание');

// let button = document.querySelector('.btn');

// button.addEventListener('click', (e)=> {
//     button.style.display = 'none';
// });


// console.log( '7 задание');

// let inputVal = document.querySelector('.validation-input');
// let circle = document.querySelector('.circle');
// let buttonVal = document.querySelector('.validation-button').addEventListener('click', function(){
//     inputVal.value.length == 0 || inputVal.value <= 0 || inputVal.value >= 601 ? inputVal.value = 'ERROR':  circle.style.left = inputVal.value + 'px';
// });

// inputVal.addEventListener('keydown', (e)=>{
//     if(isNaN(Number(inputVal.value))){
//         inputVal.value = ' ';
//     }
// });


// console.log( '8 задание');

// let buttons = document.querySelectorAll('.wrap-btn button');

// function logDataAttr(e){
//     console.log(`кол-во атрибутов у элемента - ${Object.keys(e.target.dataset).length}`);
//     for (key in e.target.dataset) {
//         console.log(`Атрибут ${key} - ${e.target.dataset[key]}`);
//     }
// }

