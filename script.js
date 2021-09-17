// variable key
let keyW = false;
let keyA = false;
let keyS = false;
let keyD = false;

// variables
let container = document.getElementById("container")
let player = document.getElementById("player");
let box = document.getElementById("box");
let score = document.querySelector(".score");
let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
let dor = document.getElementById("dor");
let death = document.getElementById("death");
let audio = document.getElementById("audio");
let deadplayer = document.getElementById("deadplayer");
var bullet;
let x = 30;
let y = 30;
let hidup = true;
let angka = 0;
let level = 1;


// pertanyaan
let jawaban = confirm("selamat datang, wasd/arrow untuk bergerak, left click/space untuk menembak");



// menembak
window.addEventListener("keypress", function(){
    


    if(event.keyCode == "32"){
        audio.play();
        dor.play();
        bullet = document.createElement("div");
        bullet.classList.add("bullet");
        bullet.style.top = (y + 15) + "px";
        bullet.style.left = (x + 30) + "px";
        bullet.style.animation = "bullet .1s forwards"
        container.appendChild(bullet);
    
    if(x < xBox){
        if(y >= yBox - 20 && y <= yBox + 30){
            death.play();
            angka += 15
            xBox = 800;
            yBox = Math.floor(Math.random() * (400 - 50))
            box.style.top = yBox + "px";
        }else {
            angka -= 10;
        }
    }
    
    }
}
)

window.addEventListener("click", function(){
    audio.play();

    dor.play();

    bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.style.top = (y + 15) + "px";
    bullet.style.left = (x + 30) + "px";
    bullet.style.animation = "bullet .1s forwards"
    container.appendChild(bullet);
    
    if(x < xBox){
        if(y >= yBox - 20 && y <= yBox + 30){
            death.play();
            angka += 15
            xBox = 800;
            yBox = Math.floor(Math.random() * (400 - 50))
            box.style.top = yBox + "px";
        }else {
            angka -= 10;
        }
    }
})

// random box
let yBox = 0;
let xBox = 800 - 50;
box.style.left = xBox + "px";
setInterval(() => {
    
}, 10000000);

// Enemy jalan
setInterval(() => {
    if(hidup == true){
        xBox -= level;
        box.style.left = xBox + "px";
    }

    if(xBox <= 0 - 50){
        angka -= 10
        xBox = 800;
        yBox = Math.floor(Math.random() * (400 - 50))
        box.style.top = yBox + "px";
    }

    
    if(angka >= 200){
        level = 5;
    }else if (angka >= 150){
        level = 4;
    }else if (angka >= 100){
        level = 3;
    }else if (angka >= 50){
        level = 2;
    }
    
    // cek kotak = player
    if(y >= yBox - 50 && y <= yBox + 50){
        if(x + 50 >= xBox){
            deadplayer.play()
            alert("ur deadass, ok to restart");
            xBox = 800;
            location.reload();
        }
    }
}, 1);

// Movement Programs
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

// functions
function onKeyDown(event) {
    if(event.keyCode == "87" || event.keyCode == "38"){
        keyW = true;
    }else if(event.keyCode == "65" || event.keyCode == "37"){
        keyA = true;
    }else if(event.keyCode == "83" || event.keyCode == "40"){
        keyS = true;
    }else if(event.keyCode == "68" || event.keyCode == "39"){
        keyD = true;
    }
}

function onKeyUp(event) {
    if(event.keyCode == "87" || event.keyCode == "38"){
        keyW = false;
    }else if(event.keyCode == "65" || event.keyCode == "37"){
        keyA = false;
    }else if(event.keyCode == "83" || event.keyCode == "40"){
        keyS = false;
    }else if(event.keyCode == "68" || event.keyCode == "39"){
        keyD = false;
    }
}

// arah player
setInterval(() => {
    if(keyA == true){
        x -= 1;
        player.style.left = x + "px";
    }
},hard);

setInterval(() => {
    if (keyW == true){
        y -= 1;
        player.style.top = y + "px";
    }
},1);

setInterval(() => {
    if (keyS == true){
        y += 1;
        player.style.top = y + "px";
    }

    console.log()
    
},1);

setInterval(() => {
    if (keyD == true){
        x += 1;
        player.style.left = x + "px";
    }
},1);

// cek batas container
setInterval(() => {
    if(x < 0){
        x = 0;
    }else if(x > 200 - 50){
        x = 200 - 50;
    }

    if(y < 0){
        y = 0;
    }else if(y >= 400 - 50){
        y = 400 - 50;
    }
}, 1);

// SISTEM SKOR
setInterval(() => {
    score.innerHTML = "Score: " + angka;
}, 1);

// Set interval speed
setInterval(() => {
    
}, 1);









