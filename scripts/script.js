const container = document.querySelector("#container");

const createGrid = function (container, rows, cols) {
    const cellSize = 640 / rows;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const div = document.createElement("div");
            div.setAttribute("class", "cell");
            div.style.width = `${cellSize + "px"}`;
            div.style.height = `${cellSize + "px"}`;
            container.appendChild(div);
        }
    }
}

createGrid(container, 64, 64);

const cells = container.querySelectorAll("div");

cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "#363636";
    });
});