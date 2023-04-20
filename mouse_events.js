var num = 0
window.document.getElementById("number").innerText = num;

var Btn = document.getElementById("btn")
    Btn.addEventListener("click" , soma1)
    // Btn.addEventListener("mousedown", soma1)
    // Btn.addEventListener("mouseup" , soma1)
    // Btn.addEventListener("mousemove" , soma1)

function soma1() {
    num ++;
    document.getElementById("number").innerText = num;
}

var Btn = document.getElementById("minus")
    Btn.addEventListener("click" , sub1)

function sub1() {
    num --;
    document.getElementById("number").innerText = num;
}

// window.document.getElementById("btn").onclick()