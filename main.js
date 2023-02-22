let clickCount=0;
let flag=0;
let tl = gsap.timeline();
let arr=[];

let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let btn5=document.getElementById("btn5");
let btn6=document.getElementById("btn6");
let btn7=document.getElementById("btn7");
let btn8=document.getElementById("btn8");
let btn9=document.getElementById("btn9");

btn1.disabled=false;
btn2.disabled=false;
btn3.disabled=false;
btn4.disabled=false;
btn5.disabled=false;
btn6.disabled=false;
btn7.disabled=false;
btn8.disabled=false;
btn9.disabled=false; 

let x,o;
x=`<span class="buttons">X</span>`
o=`<span class="buttons">O</span>`
function oddEven(btn) {
    if(btn.innerHTML=="" && btn.disabled==false){
        if(clickCount%2==0){
            btn.innerHTML=x;
            btn.value="X";
        } else {
            btn.innerHTML=o;
            btn.value="O";
        }
        clickCount++;
        result();
    }
    btn.disabled=true;
}
function disable() {
    btn1.disabled=true;
    btn2.disabled=true;
    btn3.disabled=true;
    btn4.disabled=true;
    btn5.disabled=true;
    btn6.disabled=true;
    btn7.disabled=true;
    btn8.disabled=true;
    btn9.disabled=true;
}

function result(){
    if(clickCount>=5){
        if(btn1.value=="X" && btn2.value=="X" && btn3.value=="X"){
            flag=1;
            arr=["#btn1","#btn2","#btn3"];
        }else if(btn4.value=="X" && btn5.value=="X" && btn6.value=="X"){
            flag=1;
            arr=["#btn4","#btn5","#btn6"];
        }else if(btn7.value=="X" && btn8.value=="X" && btn9.value=="X"){
            flag=1;
            arr=["#btn7","#btn8","#btn9"];
        }else if(btn1.value=="X" && btn4.value=="X" && btn7.value=="X"){
            flag=1;
            arr=["#btn1","#btn4","#btn7"];
        }else if(btn2.value=="X" && btn5.value=="X" && btn8.value=="X"){
            flag=1;
            arr=["#btn2","#btn5","#btn8"];
        }else if(btn3.value=="X" && btn6.value=="X" && btn9.value=="X"){
            flag=1;
            arr=["#btn3","#btn6","#btn9"];
        }else if(btn1.value=="X" && btn5.value=="X" && btn9.value=="X"){
            flag=1;
            arr=["#btn1","#btn5","#btn9"];
        }else if(btn3.value=="X" && btn5.value=="X" && btn7.value=="X"){
            flag=1;
            arr=["#btn3","#btn5","#btn7"];
        }
        
        if(btn1.value=="O" && btn2.value=="O" && btn3.value=="O"){
            flag=2;
            arr=["#btn1","#btn2","#btn3"];
        }else if(btn4.value=="O" && btn5.value=="O" && btn6.value=="O"){
            flag=2;
            arr=["#btn4","#btn5","#btn6"];
        }else if(btn7.value=="O" && btn8.value=="O" && btn9.value=="O"){
            flag=2;
            arr=["#btn7","#btn8","#btn9"];
        }else if(btn1.value=="O" && btn4.value=="O" && btn7.value=="O"){
            flag=2;
            arr=["#btn1","#btn4","#btn7"];
        }else if(btn2.value=="O" && btn5.value=="O" && btn8.value=="O"){
            flag=2;
            arr=["#btn2","#btn5","#btn8"];
        }else if(btn3.value=="O" && btn6.value=="O" && btn9.value=="O"){
            flag=2;
            arr=["#btn3","#btn6","#btn9"];
        }else if(btn1.value=="O" && btn5.value=="O" && btn9.value=="O"){
            flag=2;
            arr=["#btn1","#btn5","#btn9"];
        }else if(btn3.value=="O" && btn5.value=="O" && btn7.value=="O"){
            flag=2;
            arr=["#btn3","#btn5","#btn7"];
        }

        if(flag==0 && clickCount==9){
            document.getElementById("locate").innerHTML="Draw";
        }else{
            if(flag==1){
                document.getElementById("locate").innerHTML="X wins";
                disable();
                tl.to(arr,{rotation: 360, duration: 2, ease: "bounce.out"});
                // tl.to(arr,{rotation: 360, duration: 2, ease: "bounce.inOut"});
                // tl.to(arr,{rotation: 360, duration: 2, ease: "power1.inout"});
                // tl.to("#locate",{x:620, y:100, duration: 2});
                tl.fromTo("#locate",{y:200, duration: 2},{y: 100, duration: 2},"<");
                
            }else if(flag==2){
                document.getElementById("locate").innerHTML="O wins";
                disable();
                tl.to(arr,{rotation: 360, duration: 2,ease: "bounce.in"});
                // tl.to("#locate",{x:620, y:100, duration: 2});
                tl.fromTo("#locate",{y:200, duration: 2},{y: 100, duration: 2},"<");
                
                
            }
        }
        
    }
}

document.getElementById("btn1").addEventListener("click",()=>{
    oddEven(btn1);
})
console.log(clickCount);
document.getElementById("btn2").addEventListener("click",()=>{
    oddEven(btn2);
})
document.getElementById("btn3").addEventListener("click",()=>{
    oddEven(btn3);
})
document.getElementById("btn4").addEventListener("click",()=>{
    oddEven(btn4);
})
document.getElementById("btn5").addEventListener("click",()=>{
    oddEven(btn5);
})
document.getElementById("btn6").addEventListener("click",()=>{
    oddEven(btn6);
})
document.getElementById("btn7").addEventListener("click",()=>{
    oddEven(btn7);
})
document.getElementById("btn8").addEventListener("click",()=>{
    oddEven(btn8);
})
document.getElementById("btn9").addEventListener("click",()=>{
    oddEven(btn9);
})


// animation

tl.to(".box-1",{x: 470, y: 100, repeat: 2, yoyo: true  ,duration: 1})
    .to(".box-2",{x: -466, y:100,  duration: 1.5},"<")
    .to(".box-3",{x: 470, y:100,  repeat: 2, yoyo: true, duration: 2},"<")
    .to("#reset",{x: 620, y:100,   duration: 2},"<")
    .fromTo(".title",{y: -100, duration: 2.5},{y: 0, duration: 1.5},"<");


