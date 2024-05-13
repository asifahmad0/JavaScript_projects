Draggable.create('#dragme',{
    type:'x',
    bounds:'.contaner'

})

function checkOverlap(){
    var div1 = document.querySelector('#dragme');
    var div2 = document.querySelector('.cir');

    let cir1=div1.getBoundingClientRect();
    let cir2=div2.getBoundingClientRect();
    

    if(cir2.left < cir1.right){
        document.querySelector('#video2').style.opacity='1';
        
        
    }else{
        document.querySelector('#video2').style.opacity='0';
    }
}

window.addEventListener('mousemove',()=>{
    checkOverlap();
})


let lightOn = document.querySelector('#lightOn');
let video = document.querySelector('#video2');
let statuse = 'off';

lightOn.addEventListener('click', () => {
    if (statuse === 'off') {
        video.style.opacity = '1';
        statuse = 'on';
    } else {
        video.style.opacity = '0';
        statuse = 'off';
    }

})

