document.addEventListener('DOMContentLoaded', () =>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

    
})


function resetClick(){
    
    board = ['','','','','','','','',''];
    resetSquares();
    gameover = false;
    playerTime = 0;
}

function handleClick(event){
    

    let square =  event.target;
    let position = square.id;
    
    if(handleMove(position)){
        setTimeout(()=>{
            let vencedor =playerTime + 1;
            alert("GG - O vencedor foi o jogador: " + vencedor);
        }, 10)
    };

    updateSquares();
    
    
    
   
       
    
}


function updateSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let position = square.id;
        let symbol = board[position];

        

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }

   })
}


function resetSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let position = square.id;
        let symbol = board[position];

        

        
            square.innerHTML = `<div class=''></div>`
        

   })
}