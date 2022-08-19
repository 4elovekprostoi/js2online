console.log('1 задание');

let countOfTasks = 0;
let toDoCounter = document.querySelector('.counter');
let btnToDo = document.querySelector('.add-item-btn').addEventListener('click', function(){
    let toDoText = document.querySelector('.add-item-text');
    let parent = document.querySelector('.list-item-parent');
    if(toDoText.value !== ''){   
        let li = document.createElement('li');
        let input = document.createElement('input');
        let span = document.createElement('span');
        let btn = document.createElement('button');
        li.className = 'listItem';
        input.type = 'checkbox';
        input.className = 'DoneCheckbox';
        input.addEventListener('click', function(){ // выполнена или не выполнена задача
            btn.parentElement.classList.toggle('done');
            showTaskCount(toDoCounter,countOfDoneTasks(),countOfTasks);


        });
        span.className = 'TodoText';
        span.innerText = toDoText.value;
        btn.innerText = 'Remove';
        btn.addEventListener('click', function(){ // удаление задачи
            btn.parentElement.remove();
            countOfTasks --;
            showTaskCount(toDoCounter,countOfDoneTasks(),countOfTasks);
        });
        li.append(input);
        li.append(span);
        li.append(btn);
        countOfTasks ++;
        parent.appendChild(li); //тут должно быть обновление счетчика 
        showTaskCount(toDoCounter,countOfDoneTasks(),countOfTasks); 
        toDoText.value = '';    
    }
});

function showTaskCount(counter,doneTask, allTask){
    counter.innerText = '';
    doneTask == 0 && allTask == 0 ? counter.innerText ='' : counter.innerText += `${doneTask} / ${allTask}`;
}

function countOfDoneTasks(){
    let DoneTasks = document.querySelectorAll('.list-item-parent .done');
    return DoneTasks.length;
}


console.log('2 задание');

let num = 5;

function findSum(num){
    let sum = 0;
    for(let i = 0; i<= num; i++){
        sum+=i;
    }
    return sum;
}

num = findSum(num);
console.log(num);


console.log('3 задание');

let from = 3;
let to = 6;

function printNumbers(from,to) {
    let interval = setInterval(()=>{
        if(from === to){
            clearInterval(interval);
        }
        console.log('setInterval',from);
        from++;
    },1000);
}

function printNumdersTimeout(from, to){
    console.log('setTimeout',from);
    let timeout = setTimeout( printNumdersTimeout,1000,++from,to);
    if(from > to){
        clearTimeout(timeout);
    }
}

setTimeout(printNumdersTimeout,1000, from, to);

printNumbers(3,6);

console.log('4 задание');

function numOfSeconds(seconds) {
    let counter = 1;
    let interval = setInterval(()=>{      
        if(counter === 5){
            clearInterval(interval);
        }
        console.log(`Прошло: ${counter} сек.`);
        counter++;
    },1000);
}

numOfSeconds(5);