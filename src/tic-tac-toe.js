let firstPlayer = 'x';
let secondPlayer = 'o';

let nextPlayer = {
    [firstPlayer]: secondPlayer,
    [secondPlayer]: firstPlayer,
}


class TicTacToe {
    constructor() {
        this.currentPlayer = firstPlayer;
        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];

    }

   

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] != null) {
            return  ;
        } else {
            this.gameField[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = nextPlayer[this.currentPlayer];
        }
        
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        function cmp(a, b, c) {
            if (a && b && c ) {
                return (a === b) && (a === c) && (b === c) 
            }
                
        }
        for (let i = 0; i < 3; i++) {
            if (cmp(this.gameField[i][0], this.gameField[i][1], this.gameField[i][2])) {
               
                return this.gameField[i][0];
            }
        }
        for (let i = 0; i < 3; i++) {
            if (cmp(this.gameField[0][i], this.gameField[1][i], this.gameField[2][i])) {
               
                return this.gameField[0][i];
            }
        }
        
        
        if (cmp(this.gameField[0][0], this.gameField[1][1], this.gameField[2][2])) {
                
                return this.gameField[0][0];
        }
        
        if (cmp(this.gameField[0][2], this.gameField[1][1], this.gameField[2][0])) {
           return this.gameField[0][2];
        }
        return null;

    }


    noMoreTurns() {
        let countBusy = 0;;
                for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (this.gameField[i][j] == null) {
                    return false
                } else countBusy++;
                    
            } 
        }
        if (countBusy === 9) return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
