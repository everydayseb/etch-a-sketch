const container = document.querySelector("#container");

const createGrid = function (container, rows, cols) {
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const div = document.createElement("div");
            div.setAttribute("class", "cell");
            container.appendChild(div);
        }
    }
}

createGrid(container, 16, 16);

const cells = container.querySelectorAll("div");

cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "#363636";
    });
});