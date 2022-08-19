// 1
console.log('Написать функцию bindFunc, которая принимает в себя 2 + аргументов');

let someNumber = 10;

function bindFunc(func, arg, ...args){
    args.forEach(element => arg += element);
    return func(arg);
}

function showResult(showVariable){
    console.log(showVariable);
}

let maybeItRight = bindFunc(showResult, someNumber,5,10,15,10);


// 2
console.log('Написать функцию, которая не принимает никаких аргументов');

const func = function() {
    let sum = 0;
    for(key in this){
        sum += this[key];
    }
    console.log(sum);
   }


const objectA = {
    a: 1,
    b: 2,
    c: 3,
}

func.call(objectA);

// 3 
console.log('Написать функцию, которая возвращает новый массив, в котором должны быть только четные числа, которые больше двуx и меньше 10.');

const valObject0 = {
    values: [1, '2', 4, 8, '8',  3, 10, null, false],
   };

function newArr(){
    const newArr = this.values.filter(number => typeof number == 'number' && number > 2 && number < 10) ;
    return newArr;
}

let arrReult = newArr.call(valObject0);

console.log(arrReult); 

// 4
console.log('Дан объект с городами и странами.');

function getCity(obj){
    let objKeys = Object.keys(obj);
    let objValues = Object.values(obj);
    let finalArr = [];
    for(let i = 0; i < objKeys.length; i++){
        finalArr[i] = objKeys[i] + ' - это ' +  objValues[i];
    }
    return finalArr;
};

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

const finalArr = getCity(citiesAndCountries);
console.log(finalArr);

// 5
console.log('Создать объект с названиями дней недели.');

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница' , 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getDay(lang, day){
    console.log(namesOfDays[lang][day-1]);
}

getDay('ru', 5);

// 6
console.log('Написать универсальную функцию setProto, которая принимает в себя 2 аргумента (currentObj, protoObj).');

const person = {
    name: 'Vlad'
};
const person1 = {
    age: 1
};

function setProto(currentObj, protoObj){
    currentObj.__proto__ = protoObj;
    // return currentObj;
}
console.log(person);
console.log(person1);

setProto(person,person1);
console.log(person.isPrototypeOf(person1));
console.log(person1.isPrototypeOf(person))

// 7
console.log('Создать базовый объект person. Этот объект должен выступать в роли прототипа для объекта person1.');

const myPerson = {
    name : 'Empty',
    age : 0,

    setName(name){
        console.log(`setname ${name}`)
        this.name = name;
    },
    getName(){
        console.log(this.name);
    },
    setAge(age){
        const checkedAge = this.ageValidation(age);
        this.age = checkedAge;
    },
    getAge(){
        console.log(this.age);
    },
    ageValidation(age){
        if(parseInt(age) >= 18){
            return age;
        } else {
            return 'Validation Error';
        }
    }
};

myPerson.setName('Sergey');
myPerson.getName();
myPerson.setAge(10);
myPerson.getAge();
myPerson.setAge(24);
myPerson.getAge();