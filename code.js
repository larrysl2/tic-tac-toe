var numbers = []; //empty arry to hold inputs
let display =""; //display holder
var number1 =0;
var number2= 0;
const displayholder = document.getElementById("display"); //get id from dom and store in variable
const one = document.querySelectorAll(".one");
one[0].addEventListener("click", function(){
  numbers[numbers.length]=1; //store 1 at end of array
  display +="1";
  console.log(numbers);// log to show
//   changedisplay();//convert array to string
  displayholder.textContent=display; //store string in array
});
const two = document.querySelectorAll(".two");
two[0].addEventListener("click", function(){
  numbers[numbers.length]=2;
  display +="2";
  console.log(numbers);
//   changedisplay();
  displayholder.textContent=display;
});
const thr = document.querySelectorAll(".thr");
thr[0].addEventListener("click", function(){
  numbers[numbers.length]=3;
  display +="3";
  console.log(numbers);
//   changedisplay();
  displayholder.textContent=display;
});
const fou= document.querySelectorAll(".fou");
fou[0].addEventListener("click", function(){
  numbers[numbers.length]=4;
  display +="4";
  console.log(numbers);
//   changedisplay();
  displayholder.textContent=display;
  
});
const fiv = document.querySelectorAll(".fiv");
fiv[0].addEventListener("click", function(){
  numbers[numbers.length]=5;
  display +="5";
  console.log(numbers);
//   changedisplay();
  displayholder.textContent=display;
});
const six = document.querySelectorAll(".six");
six[0].addEventListener("click", function(){
  numbers[numbers.length]=6;
  display +="6";
  console.log(numbers);
//   changedisplay();
  displayholder.textContent=display;
});
const sev = document.querySelectorAll(".sev");
sev[0].addEventListener("click", function(){
  numbers[numbers.length]=7;
  display +="7";
  console.log(numbers);
//   changedisplay();
  displayholder.textContent=display;
});
const eig = document.querySelectorAll(".eig");
eig[0].addEventListener("click", function(){
  numbers[numbers.length]=8;
  display +="8";
  console.log(numbers);
//   changedisplay();
  displayholder.textContent=display;
});
const nin = document.querySelectorAll(".nin");
nin[0].addEventListener("click", function(){
  numbers[numbers.length]=9;
  display +="9";
  console.log(numbers);
//   changedisplay();
  displayholder.textContent=display;
});
const zer = document.querySelectorAll(".zer");
zer[0].addEventListener("click", function(){
  numbers[numbers.length]=0;
  display +="0";
  console.log(numbers);
//   changedisplay();
  displayholder.textContent=display;
});
const plu = document.querySelectorAll(".plu");
plu[0].addEventListener("click", function(){
  numbers.push("+");
  display +="+";
  console.log(numbers);
//   changedisplay();
  displayholder.textContent=display;
});
const min = document.querySelectorAll(".min");
min[0].addEventListener("click", function(){
  numbers.push("-");
  display +="-";
  console.log(numbers);
//   changedisplay();
  displayholder.textContent=display;
});
const mul = document.querySelectorAll(".mul");
mul[0].addEventListener("click", function(){
  numbers.push("*");
  display +="*";
  console.log(numbers);
//   changedisplay();
  displayholder.textContent=display;
});
const div = document.querySelectorAll(".div");
div[0].addEventListener("click", function(){
  numbers.push("/");
  display +="/";
  console.log(numbers);
//   changedisplay();
  displayholder.textContent=display;
});
const clr = document.querySelectorAll(".clr");
clr[0].addEventListener("click", function(){ //clears array
  numbers=[];
  display ="";
  console.log(numbers);
  displayholder.textContent=display;
});
const equ = document.querySelectorAll(".equ");
equ[0].addEventListener("click",function(){//runs operate function on click
    operate();
});
function operate(){ 
    if(Number.isInteger(numbers[0])==false)//checks if first value is digit or not. if it is it removes it
        {
            numbers.shift();
            console.log(numbers);
        }
    for(let j=0;j<numbers.length;j++){
        if(Number.isInteger(numbers[j])==false&&Number.isInteger(numbers[j+1])==false){
            numbers.splice(j+1,1);
        }
        if(Number.isInteger(numbers[0])==true&&Number.isInteger(numbers[1])==true)
        {
            numbers[0]=numbers[0]*10 + numbers[1];
            numbers.splice(1,1);
            console.log(numbers);
            console.log(numbers.length);
            j--;
        }
        else if(Number.isInteger(numbers[j])==false&&Number.isInteger(numbers[j+1])==true&&j+2<numbers.length&&Number.isInteger(numbers[j+2])==true){
            numbers[j+1]=numbers[j+1]*10 + numbers[j+2];
            numbers.splice(j+2,1);
            console.log(numbers);
            console.log(numbers.length);
            j--;
        }
       
    }
    for(let i=1;i<numbers.length-1;i++){
        
        switch (numbers[i]){
            case "+" :
                add(numbers[0],numbers[i+1]);
                console.log(numbers);
                console.log(numbers[0]);
                break;
            case "-":
                minus(numbers[0],numbers[i+1]);
                console.log(numbers);
                console.log(numbers[0]);
                break;
            case "*":
                multiply(numbers[0],numbers[i+1]);
                console.log(numbers);
                console.log(numbers[0]);
                break;
            case "/":
                divide(numbers[0],numbers[i+1]);
                console.log(numbers);
                console.log(numbers[0]);
                break;
        }
    }
    numbers.splice(1,numbers.length-1);
}
function add(number1,number2){
    number1=number1+number2;
    display="";
    display+=number1;
    numbers[0]=number1;
    displayholder.textContent=display;
}
function minus(number1,number2){
    number1=number1-number2;
    display="";
    display+=number1;
    numbers[0]=number1;
    displayholder.textContent=display;
}
function multiply(number1,number2){
    number1=number1*number2;   
    display="";
    display+=number1;
    numbers[0]=number1;
    displayholder.textContent=display;
}
function divide(number1,number2){
    number1=number1/number2;
    display="";
    display+=number1;
    numbers[0]=number1;
    displayholder.textContent=display;
}
