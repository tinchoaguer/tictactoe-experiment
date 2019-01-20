module.exports = class Game {

   constructor() {
        this.isXNext = true;
        this.history = [{ squares: Array(9).fill(null), square: null, move: null, end:   {} }];
        this.stepNumber = 0;
    }



    static getBoard() {
        return [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    }

    prueba() {
        console.log("This is a message from tictactoe package");
    }

    currentSate() {
        return this.history[this.stepNumber];
    }

    isADraw() {
        return !this.currentSate().squares.includes(null) && !this.currentSate().end.winner;
    }


    goToMove(i) {
        this.stepNumber = i;
        this.isXNext = (i % 2) === 0;
    }


    saveStatus(history) {
        this.history = history;
    }


    chooseSquare(square) {

        const move = this.stepNumber + 1;
        const history = this.history.slice(0, move);
        const lastStatus = history[history.length - 1];
        const squares = lastStatus.squares.slice(0, 8);
        if (squares[square] || lastStatus.end.winner) return;
        squares.splice(square, 1, this.isXNext ? 'X' : 'O');
        const end = this.calculateWinner(squares);
        this.saveStatus(history.concat([{ squares: squares, square: square, move: move, end: end }]));
        this.stepNumber = move;
        this.isXNext = !this.isXNext;

    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                console.log(a + ' ' + b + ' ' + c);
                return { winner: squares[a], lines: [a, b, c] };
            }
        }
        return { winner: null, lines: null };
    }

    getWinnerLines() {
        const lines = this.currentSate().end.lines;
        return lines ? lines : [];
    }

    isWinnerSquare(square) {
        const lines = this.currentSate().end.lines;
        return lines ? lines.includes(square) : false;
    }


    getColRow(num) {
        let result = '';
        switch (num) {
            case 0:
                result = '1-1';
                break;
            case 1:
                result = '2-1';
                break;
            case 2:
                result = '3-1';
                break;
            case 3:
                result = '1-2';
                break;
            case 4:
                result = '2-2';
                break;
            case 5:
                result = '3-2';
                break;
            case 6:
                result = '1-3';
                break;
            case 7:
                result = '2-3';
                break;
            case 8:
                result = '3-3';
                break;
            default:
                result = '0-0';
        }
        return result;
    }

}

