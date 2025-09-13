const container = document.querySelector("#container");
const resize = document.querySelector("#resize");

drawBoard(16);

container.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                        ${Math.floor(Math.random() * 256)}, 
                                        ${Math.floor(Math.random() * 256)})`;

    if(parseFloat(e.target.style.opacity) === 0) {
        return;
    }
    let current = parseFloat(e.target.style.opacity) || 1; // start at 1 if not set
    if (current >= 0) {
        e.target.style.opacity = (current - 0.1).toFixed(2); // decrease step
    }
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
            div.style.backgroundColor = "white";
            container.appendChild(div);
        }
        
    }
}
