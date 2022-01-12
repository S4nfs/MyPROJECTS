//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Jump", filepath: "songs/1.mp3", cover: "covers/1.jpg"},
    {songName: "Jump", filepath: "songs/2.mp3", cover: "covers/2.jpg"},
    {songName: "Jump", filepath: "songs/3.mp3", cover: "covers/3.jpg"},
    {songName: "Jump", filepath: "songs/4.mp3", cover: "covers/4.jpg"},
    {songName: "Jump", filepath: "songs/5.mp3", cover: "covers/5.jpg"},

]

//  Play||Pause the Song
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//  Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //Update the Progress Bar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})