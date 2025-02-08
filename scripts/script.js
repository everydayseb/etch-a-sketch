let gridSize = 16;

const container = document.querySelector("#container");

const createGrid = function (container, size) {
    const cellSize = 640 / size;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.setAttribute("class", "cell");
            div.style.width = `${cellSize + "px"}`;
            div.style.height = `${cellSize + "px"}`;
            container.appendChild(div);
        }
    }
    const cells = container.querySelectorAll("div");

    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "#363636";
        });
    });
}

const deleteGrid = function (container) {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

createGrid(container, gridSize);

sizeButton = document.querySelector("button");

sizeButton.addEventListener("click", () => {
    gridSize = prompt("What do you want the new size to be? (4 - 100)");
    if (gridSize >= 4 && gridSize <= 100) {
        deleteGrid(container);
        createGrid(container, gridSize);
    }
});

