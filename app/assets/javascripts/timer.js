var Timer1;
var Timer2;
var TotalSeconds1;
var TotalSeconds2;

// making 2 timers... probably an easier, less-code-y way...
// Thanks to "Vswe" http://forum.codecall.net/topic/51639-how-to-create-a-countdown-timer-in-javascript/
// for the starting point
function CreateP1Timer(TimerID1, Time1) {
Timer1 = document.getElementById(TimerID1);
TotalSeconds1 = Time1;

UpdateTimer1()
window.setTimeout("Tick1()", 1000);
}

function CreateP2Timer(TimerID2, Time2) {
Timer2 = document.getElementById(TimerID2);
TotalSeconds2 = Time2;

UpdateTimer2()
window.setTimeout("Tick2()", 1000);
}

function Tick1() {
TotalSeconds1 -= 1;
UpdateTimer1()
window.setTimeout("Tick1()", 1000);
}

function Tick2() {
TotalSeconds2 -= 1;
UpdateTimer2()
window.setTimeout("Tick2()", 1000);
}

function UpdateTimer1() {
var Seconds = TotalSeconds1;

var Days = Math.floor(Seconds / 86400);
Seconds -= Days * 86400;

var Hours = Math.floor(Seconds / 3600);
Seconds -= Hours * (3600);

var Minutes = Math.floor(Seconds / 60);
Seconds -= Minutes * (60);


var TimeStr = ((Days > 0) ? Days + " days " : "") + LeadingZero(Hours) + ":" + LeadingZero(Minutes) + ":" + LeadingZero(Seconds)


Timer1.innerHTML = TimeStr;
}

function UpdateTimer2() {
var Seconds = TotalSeconds2;

var Days = Math.floor(Seconds / 86400);
Seconds -= Days * 86400;

var Hours = Math.floor(Seconds / 3600);
Seconds -= Hours * (3600);

var Minutes = Math.floor(Seconds / 60);
Seconds -= Minutes * (60);


var TimeStr = ((Days > 0) ? Days + " days " : "") + LeadingZero(Hours) + ":" + LeadingZero(Minutes) + ":" + LeadingZero(Seconds)


Timer2.innerHTML = TimeStr;
}


function LeadingZero(Time) {

return (Time < 10) ? "0" + Time : + Time;

}

