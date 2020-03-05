export function fieldGeneration() {
    for (let i = 1; i < 16; i++) {
        const cell = new Cell(i, 'cell');
        const element = document.createElement(cell.tag);
        element.textContent = cell.value;
        element.classList.add(cell.tagClass, i - 1);
        document.querySelector('.game-board').appendChild(element);
    }
    const cell = new Cell('', 'cell');
    const element = document.createElement(cell.tag);
    element.classList.add(cell.tagClass, '15', 'emptyCell');
    document.querySelector('.game-board').appendChild(element);
}

class Cell {
    tag = "div";
    constructor(value, tagClass) {
        this.value = value;
        this.tagClass = tagClass;
    }
}