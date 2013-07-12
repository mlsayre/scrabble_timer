var Timer1;
var Timer2;
var TotalSeconds1;
var TotalSeconds2;
var ManipTimer1;
var ManipTimer2;
var P1Flag=0;
var P2Flag=0;
var PauseFlag=0;
var GLFlag=1;

// making 2 timers... there's probably an easier, less-code-y way...
// Thanks to "Vswe" http://forum.codecall.net/topic/51639-how-to-create-a-countdown-timer-in-javascript/
// for the starting point

function CreateP1Timer(TimerID1, Time1) {
Timer1 = document.getElementById(TimerID1);
TotalSeconds1 = Time1;
	document.getElementById("Start1Button").disabled = false;
	document.getElementById("Start2Button").disabled = false; 
document.getElementById("Complete1Button").disabled = true;
document.getElementById("Complete2Button").disabled = true;
document.getElementById("PauseButton").disabled = true;
document.getElementById('StartText').style.visibility='hidden';
UpdateTimer1()
}

function StartP1()
{
//  document.getElementById("Start1Button").disabled = true; (disabled, not hidden)
//	document.getElementById("Start2Button").disabled = true;  
setTimeout(function (){
	document.getElementById("Complete1Button").disabled = false;
	}, 1100);
document.getElementById("Complete2Button").disabled = true;
document.getElementById("PauseButton").disabled = false;
document.getElementById('Start1Button').style.visibility='hidden';
document.getElementById('Start2Button').style.visibility='hidden';
// change background color of table cells
document.getElementById('tdP1').style.backgroundColor = "#BAFFBB";
document.getElementById('tdP2').style.backgroundColor = "#FFDEDE";
	P1Flag = 1;
	setTimeout("Tick1()", 1000);

// Message when the game starts - only shows once thanks to GLFlag flag
if (GLFlag==1)
{
	document.getElementById('StartText').style.visibility='visible';
setTimeout(function (){
	document.getElementById('StartText').style.visibility='hidden';
	}, 5000);
GLFlag=0;
}
}

function CreateP2Timer(TimerID2, Time2) {
Timer2 = document.getElementById(TimerID2);
TotalSeconds2 = Time2;

UpdateTimer2()
}

function StartP2()
{
//	document.getElementById("Start1Button").disabled = true; 
//	document.getElementById("Start2Button").disabled = true; 
	document.getElementById("Complete1Button").disabled = true;
setTimeout(function (){
	document.getElementById("Complete2Button").disabled = false;
	}, 1100);
document.getElementById("PauseButton").disabled = false;
document.getElementById('Start1Button').style.visibility='hidden';
document.getElementById('Start2Button').style.visibility='hidden';
document.getElementById('tdP2').style.backgroundColor = "#BAFFBB";
document.getElementById('tdP1').style.backgroundColor = "#FFDEDE";
	P2Flag=1;
	setTimeout("Tick2()", 1000);
// Message when the game starts - only shows once thanks to GLFlag flag
	if (GLFlag==1)
{
	document.getElementById('StartText').style.visibility='visible';
setTimeout(function (){
	document.getElementById('StartText').style.visibility='hidden';
	}, 5000);
GLFlag=0;
}
}

function Tick1() {
TotalSeconds1 -= 1;
UpdateTimer1()
ManipTimer1=setTimeout("Tick1()", 1000);
}

function Tick2() {
TotalSeconds2 -= 1;
UpdateTimer2()
ManipTimer2=setTimeout("Tick2()", 1000);
}

function UpdateTimer1() {
var Seconds = TotalSeconds1;

var Hours = Math.floor(Seconds / 3600);
Seconds -= Hours * (3600);

var Minutes = Math.floor(Seconds / 60);
Seconds -= Minutes * (60);


var TimeStr = ((Hours > 0) ? Hours + ":" : "") + LeadingZero(Minutes) + ":" + LeadingZero(Seconds)


Timer1.innerHTML = TimeStr;
}

function UpdateTimer2() {
var Seconds = TotalSeconds2;

var Hours = Math.floor(Seconds / 3600);
Seconds -= Hours * (3600);

var Minutes = Math.floor(Seconds / 60);
Seconds -= Minutes * (60);


var TimeStr = ((Hours > 0) ? Hours + ":" : "") + LeadingZero(Minutes) + ":" + LeadingZero(Seconds)

Timer2.innerHTML = TimeStr;
}


function LeadingZero(Time) {

return (Time < 10) ? "0" + Time : + Time;

}

function player1Pause()
{
	if (P1Flag==1)
{
	P1Flag=0;
	P2Flag=1;
	clearTimeout(ManipTimer1);
	StartP2();
}
}

function player2Pause()
{
	if (P2Flag==1)
{
	P2Flag=0;
	P1Flag=1;
	clearTimeout(ManipTimer2);
	StartP1();
}
}

function GamePause()
{
	if (PauseFlag==0)
	{
// disable buttons
document.getElementById("Complete1Button").disabled = true;
document.getElementById("Complete2Button").disabled = true;

// change player time boxes to grey
document.getElementById('tdP1').style.backgroundColor = "#D6D6D6";
document.getElementById('tdP2').style.backgroundColor = "#D6D6D6";
	
		if (P1Flag==1)
		{
		PauseFlag=1;
		P1Flag=2;
		P2Flag=0;
		clearTimeout(ManipTimer1);
		}
		else if (P2Flag==1)
			{
				PauseFlag=1;
				P1Flag=0;
				P2Flag=2;
				clearTimeout(ManipTimer2);
			}
}
else
{
	document.getElementById("Complete1Button").disabled = true;
document.getElementById("Complete2Button").disabled = true;


	if (P1Flag==2)
		{
			PauseFlag=0;
			P1Flag=1;
			StartP1();
		}
	else if (P2Flag==2)
		{
			PauseFlag=0;
			P2Flag=1;
			StartP2();	
		}
}
}

//button presses
function doClick(Complete1Button, e)
    {
    if (e.keyCode == 13)
        {
        // Get the button the user wants to have clicked
        var btn = document.getElementById(Complete1Button);
        if (btn)
        {
            btn.click();
            return false;
        }
    }
}