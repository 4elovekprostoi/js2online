//1 задание
document.cookie = "user=Serhii";
document.cookie = "age=24";
console.log(document.cookie);


//2 задание
// localStorage.clear();
function showInput() {
    let parent = document.querySelector('.wrapper');
    let birthday = document.createElement('input');
    birthday.setAttribute('type', 'date');
    birthday.className = 'DR';

    let time = new Date();
    let arr = [];
    arr.push(time.getFullYear());
    arr.push(time.getMonth() + 1);
    arr.push(time.getDate());

    arr[1] = arr[1] < 10 ? '0' + arr[1] : arr[1];
    arr[2] = arr[2] < 10 ? '0' + arr[2] : arr[2];
    let maxDate = arr.join('-');
    console.log(maxDate);
    birthday.max = maxDate;
    parent.appendChild(birthday);
    // birthday.max = new Date().toISOString().split("T")[0];

    let button = document.createElement('button');
    button.className = 'btn';
    button.innerText = 'confirm age';
    button.addEventListener('click', function (e) {
        if (birthday.value !== '') {
            timeToDr(birthday.value);
            localStorage.setItem('birthday', birthday.value);
        }
    });
    parent.appendChild(button);
}

function timeToDr(DOB) {
    let arr = DOB.split('-');
    let monthOfBirthday = Number(arr[1]);
    let birthday = Number(arr[2]);

    let time = new Date();
    let currentMonth = time.getMonth() + 1;
    let currentDay = time.getDate();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let monthLeft = currentMonth < monthOfBirthday ? monthOfBirthday - currentMonth : (12 - currentMonth) + monthOfBirthday;
    let daysLeft = currentDay < birthday ? birthday - currentDay : (30 - currentDay) + birthday;
    let hoursLeft = 24 - hours;
    let minutesLeft = 60 - minutes;
    let secondsLeft = 60 - seconds;

    alert(`до дня рождения осталось ${monthLeft} месяцев ${daysLeft} дней ${hoursLeft} часов ${minutesLeft} минут ${secondsLeft} секунд`);
    let parent = document.querySelector('.wrapper');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

if(localStorage.birthday){
    timeToDr(localStorage.birthday);
} else {
    showInput();
}

let text = document.querySelector('#textToSave');
text.addEventListener('keyup', function(){
    localStorage.setItem('text', this.value);
});

if(localStorage.text) {
    text.value = localStorage.text;
}

//3 задание 

let arr = [1, 2, 3, 4, 5];
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
console.log(arr);
let result = arr.splice(4, 0, 'e');
result = arr.splice(3, 0, 'c');
result = arr.splice(1, 0, 'a', 'b');

