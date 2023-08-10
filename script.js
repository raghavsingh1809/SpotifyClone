 console.log("Welcome to Spotify");

 let songIndex = 1;
 let audioElement = new Audio('songs/1.mp3');
 let masterPlay = document.getElementById('masterPlay');
 let songItemPlay = document.getElementById('songItemPlay');
 let myProgressBar = document.getElementById('myProgressBar');
 let gif = document.getElementById('gif');
 let masterSongName = document.getElementById('masterSongName');
 let songItems = Array.from(document.getElementsByClassName('songItem'));

let song = [
    {songName: "Let me love you", filePath: "songs/1.mp3", coverPath: "images/1.jpeg"},
    {songName: "Deva deva", filePath: "songs/2.mp3", coverPath: "images/2.jpeg"},
    {songName: "Gasolina", filePath: "songs/3.mp3", coverPath: "images/3.jpeg"},
    {songName: "Raatan lambiyan", filePath: "songs/4.mp3", coverPath: "images/4.jpeg"},
    {songName: "Moon rise", filePath: "songs/5.mp3", coverPath: "images/5.jpeg"},
    {songName: "Tu hai to mujhe", filePath: "songs/6.mp3", coverPath: "images/6.jpeg"},
    {songName: "Kesariya", filePath: "songs/7.mp3", coverPath: "images/7.jpeg"},
]
songItems.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src = song[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})
// event listeners
 audioElement.addEventListener('timeupdate', ()=>{
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
           element.classList.remove('fa-pause-circle');
           element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
    if(audioElement.paused){
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = song[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    }else{
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
  })
})
//handling play/pause
masterPlay.addEventListener('click', ()=> { 
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        songItemPlay.classList.remove('fa-play-circle');
        songItemPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        songItemPlay.classList.remove('fa-pause-circle');
        songItemPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = song[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })

  document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex == 0){
        songIndex = 7;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = song[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
 

