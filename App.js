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
