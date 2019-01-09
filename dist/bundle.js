require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"tictactoe-experiment":[function(require,module,exports){
module.exports = class Game {

    constructor() {

        this.squares = Array(9).fill(null);
        this.end = {};
        this.isXNext = true;
    }


    static getBoard() {
        return [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    }

    prueba() {
        console.log("This is a message from tictactoe package");
    }

    chooseSquare(square) {

        if (this.squares[square] || this.end.winner) return;
        this.squares.splice(square, 1, this.isXNext ? 'X' : 'O');
        this.isXNext = !this.isXNext;
        this.end = this.calculateWinner(this.squares);
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
                this.end = { winner: squares[a], lines: [a, b, c] };
                return this.end;
            }
        }
        this.end = { winner: null, lines: null };
        return this.end;
    }

    getWinnerLines() {
        return this.end.lines ? this.end.lines : [];
    }

    isWinnerSquare(square) {
        return this.end.lines ? this.end.lines.includes(square) : false;
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


},{}]},{},[]);