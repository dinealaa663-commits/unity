const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const editor = document.getElementById("code-editor");

editor.value = `
// مرحبا بك في DevPlay Engine 🚀

ctx.fillStyle = "cyan";
ctx.fillRect(100, 100, 120, 120);
`;

function runCode() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    try {
        eval(editor.value);
    } catch(error) {
        alert("خطأ فالكود: " + error.message);
    }
}

document.getElementById("run-btn")
.addEventListener("click", runCode);

document.getElementById("reset-btn")
.addEventListener("click", () => {

    editor.value = `
ctx.fillStyle = "cyan";
ctx.fillRect(100,100,120,120);
`;

    runCode();
});

runCode();
let x = 100;
let y = 100;

document.addEventListener("keydown", (e) => {

    if(e.key === "ArrowRight") x += 10;
    if(e.key === "ArrowLeft") x -= 10;
    if(e.key === "ArrowUp") y -= 10;
    if(e.key === "ArrowDown") y += 10;

    draw();
});

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "cyan";
    ctx.fillRect(x,y,80,80);
}

draw();
ctx.beginPath();
ctx.arc(300,200,10,0,Math.PI*2);
ctx.fillStyle = "yellow";
ctx.fill();
