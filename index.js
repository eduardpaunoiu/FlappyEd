/*
let myDiv=document.querySelector('p');
function DoSthg()
{
return doAlert
}
function doAlert()
{
    alert("SALLL!")
}
myDiv.addEventListener(
    'click',
    DoSthg()
) */

/*-> alerta la pagina
alert("Do you wanna play the game? "); */

//->modificare text html folosind js
let myDiv = document.querySelector('h1');
myDiv.textContent = 'EddyBird v2.0'

//->la click pe buton, mesaj!
let start = document.querySelector('button');
function func() {
    x = 0;
    score.textContent = '0';

}
start.addEventListener('click', func)

//scor
let x = 0;
let score = document.querySelector('.score');
document.addEventListener(
    'keydown',
    keypressed
)
let player = document.querySelector('.squary')

function reload() {
    player.classList.remove('capSus');
}

function keypressed(e) {
    if (e.keyCode === 32) {
        /*score.textContent = x + 1;
        x++;*/
        player.classList.add('capSus')
        setTimeout(reload, 500);

    }
}
// incrementare scor la fiecare secunda

let y = 0;
function cresteScor() {
    score.textContent = y + 1;
    y++;
}
setInterval(cresteScor, 1000);

//obstacole

let obstacol = document.querySelector('.obstacol')

function restart() {
    obstacol.style.transition = 'none';
    obstacol.classList.remove('obstacolStanga');
}

function animatie() {
    obstacol.style.transition = '2s all linear';
    obstacol.classList.add('obstacolStanga');
    setTimeout(restart, 3000);
}
animatie();

setInterval(animatie, 4000);

//coliziune
function coliziune() {
    let r1 = player.getBoundingClientRect();
    let r2 = obstacol.getBoundingClientRect();
    if (r1.right >= r2.right && r1.bottom>=r2.top &&  r1.left<=r2.left) 
    {
        alert("Ai pierdut! Scor " + y);
        y=0;
        restart();

    }

}
setInterval(coliziune,100); 