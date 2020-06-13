var counter = 0
var MaxZeroBin = 32
var max = Math.pow(2,MaxZeroBin)
var MaxZeroDec = max.toString().length
var MaxZeroHex = MaxZeroBin/4
var bin = document.getElementById("bin")
var dec = document.getElementById("dec")
var hex = document.getElementById("hex")

function ChangeBin(){
    bin.innerText = counter.toString(2).padStart(MaxZeroBin,'0');
}

function ChangeDec() {
    dec.innerText = counter.toString().padStart(MaxZeroDec,'0');
}   

function ChangeHex() {
    hex.innerText = "0x" + counter.toString(16).toUpperCase().padStart(MaxZeroHex,'0');
}

function updateCounter(){
    counter ++;
    if (counter >= max) counter = 0
    ChangeBin();
    ChangeDec();
    ChangeHex();
}

ChangeBin();
ChangeDec();
ChangeHex();
setInterval(updateCounter, 1000);