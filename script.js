console.log("Welcome to Spotify");
//Initialize the variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let gif1 = document.getElementById('gif1');

let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName: "let me love you", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "falak tu garaj tu", filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "har har shambhu", filePath: "songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "piya bola le chle", filePath: "songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "remix", filePath: "songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "salam-e-ishq", filePath: "songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "song2", filePath: "songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "song3", filePath: "songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName: "song4", filePath: "songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName: "song5", filePath: "songs/10.mp3", coverPath:"covers/10.jpg"},
    {songName: "song6", filePath: "songs/11.mp3", coverPath:"covers/11.jpg"},
    {songName: "song7", filePath: "songs/12.mp3", coverPath:"covers/12.jpg"},
    {songName: "song8", filePath: "songs/13.mp3", coverPath:"covers/13.jpg"},
    {songName: "song9", filePath: "songs/14.mp3", coverPath:"covers/14.jpg"},
    {songName: "song10", filePath: "songs/15.mp3", coverPath:"covers/15.jpg"},
    {songName: "song11", filePath: "songs/16.mp3", coverPath:"covers/16.jpg"},
]


songItems.forEach((Element,i)=>{
    // console.log(Element,i);
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 


})
 
// audioElement.play();

//Handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();  
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
            gif1.style.opacity = 1;

    }
    else //agar audio chl rh h to pause krdeg
    {
        audioElement.pause(); 
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        gif.style.opacity = 0;

        
    }
})

//Listen to events(event of audio & not a event of progress bar)
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate'); 
    //update seek bar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); // tells how much song is being runned
    // console.log(progress);
    myProgressBar.value=progress;
})


myProgressBar.addEventListener('change',()=>{
    //change percent to duration and current_time= ((% caluclate * duration )/100)
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100; 
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
        Element.classList.remove('fa-pause-circle');
        Element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
    Element.addEventListener('click', (e)=>{
        // console.log(e.target); // e is on which we click
        makeAllPlays(); // this will make previous play symbolized button to pause
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        //jis button pr click krege vo wle song play krna 
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0; //as song is changes so current time is made zero
        audioElement.play();
        gif.style.opacity = 1;
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


//if we click on next
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=15){
        songIndex = 0
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0; //as song is changes so current time is made zero
    audioElement.play();
    gif.style.opacity = 1;
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

//if we click on previous
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0; //as song is changes so current time is made zero
    audioElement.play();
    gif.style.opacity = 1;
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})