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
            cell[i].classList.remove('emptyCell');
            i++;
        }
    }
    if (!cell[cell.length - 1].classList.contains('emptyCell')) {
        cell[cell.length - 1].classList.add('emptyCell');
        cell[cell.length - 1].textContent = ' ';
    }
    game();
}