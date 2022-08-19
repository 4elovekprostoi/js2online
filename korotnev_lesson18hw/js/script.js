let combinationToWin = [
    [1, 2, 3],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [4, 5, 6],
    [5, 8, 9]
];

let arrX = [];
let arrO = [];
let player = "X";

let items = document.querySelectorAll('.item').forEach(item => item.addEventListener('click', writeSimbol));
let newGameBtn = document.querySelector('.restart').addEventListener('click', newGame);

function newGame(){
    arrX = [];
    arrO = [];
    player = "X";
    document.querySelectorAll('.item').forEach(elem => elem.innerHTML = '');
}

function writeSimbol(){
    if (this.innerHTML === '') {
        this.innerHTML += player;
        if(player === "X"){
            check(this.id,arrX);
        } else {
            check(this.id,arrO);
        }
        player = player === "X" ? "O" : "X";
    }
}

function check(id,arr){
    arr.push(Number(id));
    let iterator = 0;
    document.querySelectorAll('.item').forEach(function(elem){
        if(elem.innerHTML !== ''){
            iterator++;
            console.log(iterator);
        }
        if(iterator === 9){
            alert('ничья');
            newGame();
        }
    });
    let count;
    combinationToWin.forEach((element)=>{      
        count = 0;
        for(let i = 0; i < arr.length; i++){
            if(element.includes(arr[i])){
                count++;
            }           
        }   
        if(count === 3){
            alert(`выиграли  ${player}`);
            newGame();
        }       
    });   
}



