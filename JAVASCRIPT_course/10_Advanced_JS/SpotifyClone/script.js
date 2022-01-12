//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('ATC.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {
        songName: "Jump",
        filepath: "songs/ATC.mp3",
        cover: "images/coverATC.jpg",
    }
    {
        songName: "Jump",
        filepath: "songs/ATC.mp3",
        cover: "images/coverATC.jpg",
    }
    {
        songName: "Jump",
        filepath: "songs/ATC.mp3",
        cover: "images/coverATC.jpg",
    }
    {
        songName: "Jump",
        filepath: "songs/ATC.mp3",
        cover: "images/coverATC.jpg",
    }
    {
        songName: "Jump",
        filepath: "songs/ATC.mp3",
        cover: "images/coverATC.jpg",
    }
]

//audioElement.play();

//  Play||Pause the Song

//  Listen to Events
myProgressBar.addEventListener('timeupdate', () => {
    console.log('timeeupdate');
    //Update the Progress Bar

});