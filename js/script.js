const grass = document.querySelectorAll('.grass');
const corona = document.querySelectorAll('.corona');
const papanScore = document.querySelector('.papan-score')
const spray = document.querySelector('#spray')
const close = document.querySelectorAll('.close');
const applause = document.querySelector('#applause')
const waiting = document.querySelector('#waiting')

let grassSebelumnya;
let selesai;
let score;



function randomGrass(grass) {
    const g = Math.floor(Math.random() * grass.length);
    const gRandom = grass[g]
    if(gRandom == grassSebelumnya) {
        randomGrass(grass);
    }
    grassSebelumnya = gRandom;
    return gRandom
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

function munculkanCorona() {
    const gRandom = randomGrass(grass);
    const wRandom = randomWaktu(300, 1500)
    gRandom.classList.add('muncul');

    setTimeout(() => {
        gRandom.classList.remove('muncul');
        if(!selesai){
            munculkanCorona();
        }
    }, wRandom);
}



function mulai(){
    selesai = false;
    score = 0;
    papanScore.textContent = 0;
    munculkanCorona();
    setTimeout(() => {
        selesai = true
        applause.play();
        pop()
    }, 15000);

}

function semprot(){
    score++;
    this.parentNode.classList.remove('muncul');
    spray.play();
    papanScore.textContent = score;
}

function pop(){
    if (selesai = true) {
            document.getElementById('box').style.display = 'block';
    } 
    document.getElementById("score").innerHTML = score
}

function toClose(){
        document.getElementById('box').style.display = 'none';
}

corona.forEach(c => {
    c.addEventListener('click', semprot);
});

close.forEach(p => {
    p.addEventListener('click', toClose);
});


