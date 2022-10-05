class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getType(){
        console.log('Человек');
    }
    getName(){
        console.log(`name: ${this.name}`);
    } 
    getAge(){
        console.log(`name: ${this.age}`);
    } 
}

// Human.getType = function(){
//     console.log('Человек');
// };

class Tester extends Human{
    constructor(name,age){
        super(name,age);
        this.job = 'Tester';
    }
    getJob(){
        console.log(`job: ${this.job}`);
    }
}

class Programmer extends Human{
    constructor(name,age){
        super(name,age);
        this.job = 'Programmer';
    }
    getJob(){
        console.log(`job: ${this.job}`);
    }
}

class ITCompany {
    create(employeeType,...args) {
        if (employeeType === 'QA') {
            return new Tester(...args);
        }
        if (employeeType === 'DEV') {
            return new Programmer(...args);
        }
    }
}

// let human = new Programmer('Oleh', 24);

// human.getType();
// human.getName();
// human.getAge();

let Company = new ITCompany();
let tester = Company.create('QA','Max', 24);
tester.getName();
tester.getAge();
tester.getJob();



const obj = {
    a: '1',
    b: '2',
    c: '3',
    e: '4',
    o: '5'
}

Object.defineProperty(obj,'a',
    {
        value: '1', 
        writable: false
    }
);
Object.defineProperty(obj,'e',
{
    value: '4', 
    writable: false
});
Object.defineProperty(obj,'o',
{
    value: '5',
    writable: false
});
obj.a = '7';
obj.e = '7';
obj.o = '7';
console.log(obj);
