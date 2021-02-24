var sum;
var myTimer;
var counter = 1;

function oprandgen(){
  var num1, num2, opr;
  num1 = getRndInteger(100,1)
  num2 = getRndInteger(100,1)
  opr = getOpr(getRndInteger(5,1))
  document.getElementById("calcuBtn").disabled= true;
  document.getElementById("UserIp").placeholder="Press Start Button";
  document.getElementById("calcuBtn").style.background='grey';
  document.getElementById("demo2").innerHTML = num1
  document.getElementById("demo").innerHTML = opr
  document.getElementById("demo3").innerHTML = num2
  sum = calOpr(num1, num2, opr);
  carousel();
 
  // var x = document.getElementById('myDIV');
  // x.style.visibility = 'hidden';
  //alert(sum);
}

function checkAns(){
  if(!isNaN(document.getElementById("UserIp").value))
  {
    if(document.getElementById("UserIp").value == sum)
      {
        alert("Answer is Correct");
        alert("You took "+counter+" seconds");
        clearInterval(myTimer);
        //document.getElementById("demo4").innerHTML = "0";
        //alert("Hello");
        vedicMath();
      }
    else
      {
        alert("Wrong Answer... Correct Answer is "+sum);
        alert("You took "+counter+" seconds");
        clearInterval(myTimer);
        //document.getElementById("demo4").innerHTML = "0";
        //alert("Hello");
        vedicMath();
      }
  }
  else{
    alert("Wrong Input");
  }
  
}

function getRndInteger(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getOpr(x)
{
  var y;
  if(x==1){
    y = '+';
  }
  else if(x==2){
    y = '-';
  }
  else if(x==3){
    y = '*';
  }
  else{
    y = '/';
  }
  return y;
}

function calOpr(x,y,z){
  if(z == '+'){
    return  x + y;
  }
  else if(z == '-'){
    return  x - y;
  }
  else if(z == '*'){
    return  x * y;
  }
  else{
    var z;
    n = x / y;
    if (n % 1 == 0)
    {
      z = Math.trunc( n )
      return z;
    }
    else
    {
      return n.toFixed(1);
    }
  }
}

    
function clock() 
{ 
  document.getElementById("calcuBtn").disabled= false;
  document.getElementById("UserIp").disabled= false;
  document.getElementById("UserIp").placeholder="Enter your answer here...";
  document.getElementById("calcuBtn").style.background='purple';
  myTimer = setInterval(myClock, 1000);
  function myClock() 
  {
    document.getElementById("demo4").innerHTML = counter++;
  }
}
// vedic math box visibility
function vedicMath() 
{
  var x = document.getElementById("myDIV");
  var y = document.getElementById("xyz");
  x.style.display = "block";
  y.style.display = "block";
}

var slideIndex = 0;
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000);
}  

window.addEventListener('DOMContentLoaded', () => {
  const texts = document.querySelectorAll('.event-text *');
  texts.forEach(text => text.innerText = text.innerText.replace(/\u00a0/g, ' '));
});



