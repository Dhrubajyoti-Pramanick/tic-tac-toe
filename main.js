let clickCount=1;
let flag=0;

console.log(clickCount);
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let btn5=document.getElementById("btn5");
let btn6=document.getElementById("btn6");
let btn7=document.getElementById("btn7");
let btn8=document.getElementById("btn8");
let btn9=document.getElementById("btn9");


let x,o;
x=`<span class="buttons">X</span>`
o=`<span class="buttons">O</span>`
function oddEven(btn) {
    if(btn.disabled==false){
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
// setTimeout(()=>{
//     reset()},3000);
function clear() {
    btn1.innerHTML="";
    btn2.innerHTML="";
    btn3.innerHTML="";
    btn4.innerHTML="";
    btn5.innerHTML="";
    btn6.innerHTML="";
    btn7.innerHTML="";
    btn8.innerHTML="";
    btn9.innerHTML="";
    document.getElementById("locate").innerHTML="";
    flag=0;
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
function notDisable() {
    btn1.disabled=false;
    btn2.disabled=false;
    btn3.disabled=false;
    btn4.disabled=false;
    btn5.disabled=false;
    btn6.disabled=false;
    btn7.disabled=false;
    btn8.disabled=false;
    btn9.disabled=false;
}
function result(){
    if(clickCount>=5){
        if(btn1.value=="X" && btn2.value=="X" && btn3.value=="X"){
            flag=1;
        }else if(btn4.value=="X" && btn5.value=="X" && btn6.value=="X"){
            flag=1;
        }else if(btn7.value=="X" && btn8.value=="X" && btn9.value=="X"){
            flag=1;
        }else if(btn1.value=="X" && btn4.value=="X" && btn7.value=="X"){
            flag=1;
        }else if(btn2.value=="X" && btn5.value=="X" && btn8.value=="X"){
            flag=1;
        }else if(btn3.value=="X" && btn6.value=="X" && btn9.value=="X"){
            flag=1;
        }else if(btn1.value=="X" && btn5.value=="X" && btn9.value=="X"){
            flag=1;
        }else if(btn3.value=="X" && btn5.value=="X" && btn7.value=="X"){
            flag=1;
        }
        
        if(btn1.value=="O" && btn2.value=="O" && btn3.value=="O"){
            flag=2;
        }else if(btn4.value=="O" && btn5.value=="O" && btn6.value=="O"){
            flag=2;
        }else if(btn7.value=="O" && btn8.value=="O" && btn9.value=="O"){
            flag=2;
        }else if(btn1.value=="O" && btn4.value=="O" && btn7.value=="O"){
            flag=2;
        }else if(btn2.value=="O" && btn5.value=="O" && btn8.value=="O"){
            flag=2;
        }else if(btn3.value=="O" && btn6.value=="O" && btn9.value=="O"){
            flag=2;
        }else if(btn1.value=="O" && btn5.value=="O" && btn9.value=="O"){
            flag=2;
        }else if(btn3.value=="O" && btn5.value=="O" && btn7.value=="O"){
            flag=2;
        }

        if(flag==0 && clickCount==9){
            document.getElementById("locate").innerHTML="Draw";
            disable();
        }else{
            if(flag==1){
                document.getElementById("locate").innerHTML="X wins";
                disable();
            }else if(flag==2){
                document.getElementById("locate").innerHTML="O wins";
                disable();
            }
        }
        
    }
}
document.getElementById("btn1").addEventListener("click",()=>{
    oddEven(btn1);
    console.log(btn1.value);
})
console.log(clickCount);
document.getElementById("btn2").addEventListener("click",()=>{
    oddEven(btn2);
    console.log(btn2.value);
})
document.getElementById("btn3").addEventListener("click",()=>{
    oddEven(btn3);
    console.log(btn3.value);
})
document.getElementById("btn4").addEventListener("click",()=>{
    oddEven(btn4);
    console.log(btn4.value);
})
document.getElementById("btn5").addEventListener("click",()=>{
    oddEven(btn5);
    console.log(btn5.value);
})
document.getElementById("btn6").addEventListener("click",()=>{
    oddEven(btn6);
    console.log(btn6.value);
})
document.getElementById("btn7").addEventListener("click",()=>{
    oddEven(btn7);
    console.log(btn7.value);
})
document.getElementById("btn8").addEventListener("click",()=>{
    oddEven(btn8);
    console.log(btn8.value);
})
document.getElementById("btn9").addEventListener("click",()=>{
    oddEven(btn9);
    console.log(btn9.value);
})

document.getElementById("reset").addEventListener("click",()=>{
    notDisable();
    clickCount=0;
})
