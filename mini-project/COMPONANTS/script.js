//scroll bare
let proLine = document.getElementById("proLine");
window.addEventListener("scroll", function () {
  let scrol = window.scrollY;
  let srHight = document.body.scrollHeight - window.innerHeight;
  let persent = (scrol / srHight) * 100;
  proLine.style.width = persent + "%";
});

// sosial mideya follower

let count =document.querySelectorAll('.count');
count.forEach(counter=>{
    counter.innerHTML="0";
    let target= +counter.getAttribute('data-target');
    let coun=0;
    function incrementcouter(){
    if(coun<target){
        coun++
        counter.innerText=coun;
        setInterval(incrementcouter,1);
    }else{
        counter.innerText=target;
    }
}
incrementcouter(); 
})

//FOR TYPPING STATUS

let Typing= document.querySelector('#Typing');
      let statas= document.querySelector('#status');
      let typingTimer;


      const hide=()=>{statas.style.display='none';}

      Typing.addEventListener('keydown',(e)=>{
        clearTimeout(typingTimer);
       statas.style.display='block';
       typingTimer = setTimeout(hide,10);
      })

      let send= document.querySelector('#send');
      send.addEventListener('click', function(){
        if (Typing.value !== "") {
       let add= Typing.value;
        sendKaro(add);
        Typing.value="";
        }else{

        }
      })

      function sendKaro(add1){
        let chatBox= document.querySelector('.chatBox');
        let Newh2 = document.createElement(`h2`);
        Newh2.classList.add('sendMsg');
        chatBox.appendChild(Newh2);
        Newh2.innerText=`${add1}`;
              



      }
      
     