export function fieldGeneration() {
    for (let i = 1; i < 16; i++) {
        const cell = new Cell(i, 'cell');
        const element = document.createElement(cell.tag);
        element.textContent = cell.value;
        if (i <= 4) {
            element.classList.add(cell.tagClass, '1row', `${i}col`, 'animated');
        }
        else if (i <= 8) {
            element.classList.add(cell.tagClass, '2row', `${i - 4}col`, 'animated');
        }
        else if (i <= 12) {
            element.classList.add(cell.tagClass, '3row', `${i - 8}col`, 'animated');
        }
        else {
            element.classList.add(cell.tagClass, '4row', `${i - 12}col`, 'animated');
        }
        document.querySelector('.game-board').appendChild(element);
    }
    const cell = new Cell('', 'cell');
    const element = document.createElement(cell.tag);
    element.classList.add(cell.tagClass, '4row', '4col', 'animated', 'emptyCell');
    document.querySelector('.game-board').appendChild(element);
}

class Cell {
    tag = "div";
    constructor(value, tagClass, row, col) {
        this.value = value;
        this.tagClass = tagClass;
    }
}