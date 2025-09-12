const container = document.querySelector("#container");
const resize = document.querySelector("#resize");

drawBoard(16);

container.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                        ${Math.floor(Math.random() * 256)}, 
                                        ${Math.floor(Math.random() * 256)})`;
});

resize.addEventListener("click", e => {
    let validInput = false;
    let inputSize;

    while(!validInput) {
        inputSize = Number.parseInt(prompt("Input size:"));

        inputSize <= 100 ? validInput = true : validInput = false;
    }

    drawBoard(inputSize);
});

function drawBoard(size) {

    container.replaceChildren();

    for (let index = 0; index < size; index++) {
        
        for (let index = 0; index < size; index++) {
            const div = document.createElement("div");
            div.style.flex = `0 0 calc(100% / ${size})`;
            container.appendChild(div);
        }
        
    }
}
