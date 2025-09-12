const container = document.querySelector("#container");

const CONTAINER_ROWS = 16;
const CONTAINER_COLUMNS = 16;

for (let index = 0; index < CONTAINER_ROWS; index++) {
    
    for (let index = 0; index < CONTAINER_COLUMNS; index++) {
        const div = document.createElement("div");
        container.appendChild(div);
    }
    
}

container.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "black";
});