import {game} from './game.js';

export function start() {
    const cell = document.querySelectorAll('.cell');
    const arr = new Array(cell.length - 1);
    let i = 0;
    while (i < arr.length) {
        const num = Math.round(Math.random() * 14) + 1;
        if (!arr.includes(num)) {
            arr[i] = num;
            cell[i].textContent = num;
            i++;
        }
    }
    game();
}

function timer() {
    const timer = document.getElementById('timer');
}