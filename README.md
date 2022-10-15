# info2180-lab3
This is Lab 3 for Ryan Badaloo

const xClass = 'x';
const oClass = 'O';
const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [0, 4, 6]];

onload=function(){ 
    
    var board = document.querySelectorAll('#board div');
    const childLength = board.length;
    var pos = 0;
    var current = xClass;
    var state = [];

    while (pos <= childLength-1){ 
        board[pos].className+='square';
        board[pos].addEventListener('click', handleClicked, { once: true});    
        board[pos].addEventListener('mouseover', hoverOver);
        board[pos].addEventListener('mouseout', hoverOut);
        document.querySelector("button").addEventListener('click', restartGame);  
        pos += 1;
    }


    function handleClicked(clickedEvent){               
        if (current == xClass){ 
            current= oClass; 
            this.innerHTML='X';
            this.classList.add('X'); 
            state.push(this.innerHTML);
            checkWinner();
        }
        else{
               
            current= xClass;
            this.innerHTML='O';
            this.classList.add('O');  
            state.push(this.innerHTML);  
            checkWinner();    
        }   
    } 

    

    function hoverOver(hoverEvent){
        this.classList.add('hover');
    }
    

    function hoverOut(hoveroutEvent){
            this.classList.remove('hover');
    }



    function checkWinner(){
        if(board[0].innerHTML !== "" && board[0].innerHTML === board[1].innerHTML && board[0].innerHTML === board[2].innerHTML){
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + board[0].innerHTML + " is the winner!";
        }
        else if(board[3].innerHTML !== "" && board[3].innerHTML === board[4].innerHTML && board[3].innerHTML === board[5].innerHTML){
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + board[3].innerHTML + " is the winner!";
        }
        else if(board[6].innerHTML !== "" && board[6].innerHTML === board[7].innerHTML && board[6].innerHTML === board[8].innerHTML){
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + board[6].innerHTML + " is the winner!";
        }
        else if(board[0].innerHTML !== "" && board[0].innerHTML === board[3].innerHTML && board[0].innerHTML === board[6].innerHTML){
            console.log(board[0].innerHTML);
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + board[0].innerHTML + " is the winner!";
        }
        else if(board[1].innerHTML !== "" && board[1].innerHTML === board[4].innerHTML && board[1].innerHTML === board[7].innerHTML){
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + board[1].innerHTML + " is the winner!";          
        }
        else if(board[2].innerHTML !== "" && board[2].innerHTML === board[5].innerHTML && board[2].innerHTML === board[8].innerHTML){
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + board[2].innerHTML + " is the winner!";
        }
        else if(board[0].innerHTML !== "" && board[0].innerHTML === board[4].innerHTML && board[0].innerHTML === board[8].innerHTML){
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + board[0].innerHTML + " is the winner!";
        }
        else if(board[2].innerHTML !== "" && board[2].innerHTML === board[4].innerHTML && board[2].innerHTML === board[6].innerHTML){
            document.getElementById("status").className = "you-won";
            document.getElementById("status").textContent = "Congratulations! " + board[2].innerHTML + " is the winner!";
        }
    }



    function restartGame(){
        for(z=0; z<childLength; z++){
            board[z].classList.remove('X');
            board[z].classList.remove('O');
            document.getElementById("status").textContent = "Select a square to place an 'X' or and 'O'";
            document.getElementById("status").classList.remove("you-won");
            board[z].innerHTML = "";
            current = xClass;
            board[z].addEventListener('click', handleClicked, { once: true});
        }
    }    
}   
