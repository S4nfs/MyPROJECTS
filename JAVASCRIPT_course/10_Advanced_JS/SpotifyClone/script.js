//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));        

let songs = [
    {songName: "Jump", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Bailando", filepath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Thrills", filepath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "We Don't Care", filepath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Fire", filepath: "songs/5.mp3", coverPath: "covers/5.jpg"},
]

songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
})
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

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
    })
})