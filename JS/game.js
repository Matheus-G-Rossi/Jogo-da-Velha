let board = ['','','',
'','','',
'','','']

let playerTime = 0;
let symbols = ['O', 'X']
let gameover = false;

function handleMove(position){

    if(gameover){return true;}

    if(board[position] == ''){
        board[position] = symbols[playerTime];

        gameover = isWin();

        playerTime = (playerTime == 0) ? 1 : 0;

       
        
    }else {
        console.log("local ja preenchido");
    }
    
    return gameover;
}

function isWin(){
    let winStets = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [8,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [0,3,6],
        [2,4,6]
    ]

    for(let i =0; i<winStets.length; i++){
        let seq = winStets[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(board[pos1] == board[pos2] 
            && board[pos1] == board[pos3] 
            && board[pos1] != ''){
            return true;
        }
    }

    return false;
}