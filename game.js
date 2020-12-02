
		
var count=0;
var highscore;


if(document.cookie.length==0)
{ 
    document.cookie="highscore=0";
    highscore=0;
    document.getElementById("high").innerHTML=0;
}
else{
    var ca=document.cookie.indexOf('=');
    highscore=document.cookie.substring(ca+1);
    document.getElementById("high").innerHTML=highscore;
    console.log(highscore);
}
function show(){
    var x=document.querySelectorAll(" div.dv")
    var y=x.length;
    var number= (Math.floor(Math.random()*(y)+1));
    for (var i=0;i<y; i++)
    {
        if (i==number)
        {
            x[i].innerHTML="<img src='mic.png' width='100%' height='100%'; onclick=counter()>"
        }
        else
        {
            x[i].innerHTML=" "
        }

    }
    
}

function start(){

setInterval(show,1300);
xyz();
setTimeout(over,32000);
}
function counter()
{
count++;
document.getElementById('demo').innerHTML= "Your score is:"+ count;

}
// getCookies();
// }
// function setCookies()
// {
// var high = count;
// document.cookie ="highest=" +high;
// }
// function getCookies(){
// if (document.cookie.length!=0)
// {
// var scorearray = document.cookie;
// secarray=scorearray.split("=");
//  secarray[1];

//     debugger;
// }
// else
// document.getElementById('high').innerHTML="0"
// }
function over()
{
document.getElementById('main').style.display="none";
document.getElementById('start').style.display="none";
document.getElementById('demo').style.display="none";
document.getElementById('over').style.display="none";
document.getElementById("result").innerHTML= count
document.getElementById('high').style.display="block";
document.getElementById('back').style.display="block";
document.getElementById('highest').style.display="none";
document.getElementById('title').style.display="none";
document.getElementById('timerr').style.display="none";
document.getElementById('result1').style.display="block";



if(count>highscore){
    document.cookie="highscore="+ count;
}

// if ( count>secarray[1])
//  {
//  setCookies();

//  document.getElementById("high").innerHTML =secarray[1];

// }
// else
// {
// console.log(document.cookie);
// document.getElementById("high").innerHTML = "your score is:"+count;
// }
}	
function back(){
window.location.href="index.html";
}
function startTimer(duration, display) {
var timer = duration, minutes, seconds;
setInterval(function () {
minutes = parseInt(timer / 60, 10);
seconds = parseInt(timer % 60, 10);

minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

display.textContent = minutes + ":" + seconds;

if (--timer < 0) {
    timer = duration;
}
}, 1000);
}

function xyz()
 {
var oneMinutes = 60 * .5,
display = document.querySelector('#time');
startTimer(oneMinutes, display);
};
