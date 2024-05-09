let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlicon = document.getElementById("ctrlicon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause(){
    if(ctrlicon.classList.contains("f"))
}