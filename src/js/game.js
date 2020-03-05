export function game() {
    const turn = document.getElementById('turn');
    turn.textContent = 0;
    const board = document.querySelector('.game-board');
    const solution = document.getElementById('solution');
    board.removeEventListener('click', gameStart);
    board.addEventListener('click', gameStart);
    solution.removeEventListener('click', sol);
    solution.addEventListener('click', sol);
    setInterval(timer, 1000);
}

function move(empty, toMove) {
    empty.classList.remove('emptyCell');
    empty.textContent = toMove.textContent;
    toMove.classList.add('emptyCell');
    toMove.textContent = ' ';
}

function gameStart(e) {
    const target = e.target;
        if (target.classList.contains('cell')) {
            const row = parseInt(target.classList[1]);
            const col = parseInt(target.classList[2]);
            const nextSib = document.getElementsByClassName(`${row}row ${col + 1}col`)[0];
            const prevSib = document.getElementsByClassName(`${row}row ${col - 1}col`)[0];
            const upSib = document.getElementsByClassName(`${row + 1}row ${col}col`)[0];
            const bottomSib = document.getElementsByClassName(`${row - 1}row ${col}col`)[0]
            if (nextSib && nextSib.classList.contains('emptyCell')) {
                move(nextSib, target);
                count();
                win();
            }
            if (prevSib && prevSib.classList.contains('emptyCell')) {
                move(prevSib, target);
                count();
                win();
            }
            if (upSib && upSib.classList.contains('emptyCell')) {
                move(upSib, target);
                count();
                win();
            }
            if (bottomSib && bottomSib.classList.contains('emptyCell')) {
                move(bottomSib, target);
                count();
                win();
            }
        }
}

function sol() {
    const element = document.querySelectorAll('.cell');
    for (let i = 0; i < element.length - 1; i++) {
        element[i].textContent = i + 1;
        element[i].classList.remove('emptyCell');
    }
    element[element.length - 1].textContent = ' ';
    element[element.length - 1].classList.add('emptyCell');
    win();
}

function win() {
    const element = document.querySelectorAll('.cell');
    let result = true;
    for (let i = 0; i < element.length - 1; i++) {
        if (parseInt(element[i].textContent) != i + 1) {
            result = false;
        }
    }
    if (result) {
        const img = document.querySelector('.win');
        const screen = document.querySelector('.black-screen');
        const button = document.getElementById('close');
        button.addEventListener('click', () => {
            img.classList.add('hidden');
            screen.classList.add('hidden');
        })
        img.classList.remove('hidden');
        screen.classList.remove('hidden');
    }
}

function count() {
    const turn = document.getElementById('turn');
    turn.textContent = parseInt(turn.textContent) + 1;
}

function timer() {
    const time = document.getElementById('timer');
    const arr = time.textContent.split(':');
    let sec = parseInt(arr[1]);
    let min = parseInt(arr[0])
    if (sec < 60) {
        sec++;
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (min < 10) {
            min = '0' + min;
        }
    }
    else {
        min++;
        sec = '00';
        if (min < 10) {
            min = '0' + min;
        }
    }
    time.textContent = `${min}:${sec}`;
}