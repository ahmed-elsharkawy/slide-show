let left = document.getElementById('left');
let play = document.getElementById('play');
let stop = document.getElementById('stop');
let right = document.getElementById('right');

let img = document.querySelector('img');

let counter = 2;
let run;
let buzzy = false;

function slideForward(){
    counter += 1;
    if(counter == 7){
        counter = 1;
    }    
    img.src = `imgs/${counter}.jpg`;
}

function slideBackward(){
    counter -= 1;
    if(counter == 0){
        counter = 6;
    }    
    img.src = `imgs/${counter}.jpg`;
}

right.addEventListener('click', slideForward);
left.addEventListener('click', slideBackward);
play.addEventListener('click', () => {
    if(buzzy == false){
        run = setInterval(slideForward, 1000);
        buzzy = true;
    }
});
stop.addEventListener('click', () => {
    buzzy = false;
    window.clearInterval(run);
});