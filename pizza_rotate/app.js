let pre = document.getElementById('pre');
let next = document.getElementById('next');
let images = document.querySelector('.images');
let items = document.querySelectorAll('.images .item');
let contant =document.querySelectorAll('.contant .item');

let rotate =0;
let active = 0;
let count = items.length;
let rotateAdd = 360/count;

function show(){
    images.style.setProperty('--rotate', rotate+'deg');
    contant.forEach((contant,key)=>{
        if(key===active){
            contant.classList.add('active');
        }else{
            contant.classList.remove('active');
        }
    })
}

function nextSlider(){
    active = active + 1 > count-1 ? 0 : active + 1;
    rotate = rotate + rotateAdd;
    show();
}
function preSlider(){
    active = active-1 < 0 ? count-1 : active -1;
    rotate = rotate - rotateAdd;
    show();
}
next.onclick= nextSlider;
pre.onclick= preSlider;
