export function game() {
    const board = document.querySelector('.game-board');
    const elements = document.querySelectorAll('.cell');
    board.addEventListener('click', function(e) {
        const target = e.target;
        if (target.classList.contains('cell')) {
            let num = +target.classList[1];
            try {
                if (elements[num + 1].classList.contains('emptyCell')) {
                    elements[num + 1].textContent = target.textContent;
                    elements[num + 1].classList.remove('emptyCell');
                    target.textContent = ' ';
                    target.classList.add('emptyCell');
                }
                if (elements[num - 1].classList.contains('emptyCell')) {
                    elements[num - 1].textContent = target.textContent;
                    elements[num - 1].classList.remove('emptyCell');
                    target.textContent = ' ';
                    target.classList.add('emptyCell');
                }
                if (elements[num + 4].classList.contains('emptyCell')) {
                    elements[num + 4].textContent = target.textContent;
                    elements[num + 4].classList.remove('emptyCell');
                    target.textContent = ' ';
                    target.classList.add('emptyCell');
                }
                if (elements[num - 4].classList.contains('emptyCell')) {
                    elements[num - 4].textContent = target.textContent;
                    elements[num - 4].classList.remove('emptyCell');
                    target.textContent = ' ';
                    target.classList.add('emptyCell');
                }
            }
            catch {

            }
        }
    });
}