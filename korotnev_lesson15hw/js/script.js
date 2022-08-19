// 1
console.log('Создать свой метод getUnique для любых массивов, который отфильтрует массив и оставит в нем только уникальные значения');

const arr = [1, 1, 2, 2, 3];

function getUnique() {
    let temp = [];
    for(let i = 0; i < this.length; i++){
        if(this.includes(i)){
            temp.push(this[i]);
        } 
    }
    return temp;
  }
  Array.prototype.getUnique = getUnique;
  let newArr = arr.getUnique();
  console.log(newArr);

// 2
console.log('Есть объект {a: 1, b: 2, c: 3, d: false, e: 0}; Нужно создать 2 метода для любых объектов');

const myObj = {
    a: 1, 
    b: 2, 
    c: 3, 
    d: false, 
    e: 0};

function getKeySum() {
    console.log(this);
    let temp = 0;
    let objValues = Object.values(this);

    for(let i = 0; i < objValues.length; i++){
        if(objValues[i]){
            temp += objValues[i];
        }
    }
    return temp;
}

Object.prototype.getKeySum = getKeySum;
let objKeySum = myObj.getKeySum();
console.log(objKeySum);  


function reversKey() {
    let arrKeys = Object.keys(this);  //получаем ключи в массив 
    console.log(arrKeys);
    let arrVal = Object.values(this); //получаем значения в массив 
    console.log(arrVal);

    
    let obj = {};
    for(let i = 0; i < arrKeys.length; i++){
        obj[arrVal[i]] = arrKeys[i]
    }
    console.log(obj);
    return obj;
}

Object.prototype.reversKey = reversKey;
let revObj = myObj.reversKey();

// 3
console.log('Используя JS, добавить такие блоки в div с классом holder');
let wrapper = document.querySelector('.holder');
console.log(wrapper);
let count = 5;

for(i = 1; i <= count; i++){
    let block = document.createElement('div');
    block.className = 'item';
    block.innerHTML = i;    
    wrapper.appendChild(block);
    // console.log(i)
}
