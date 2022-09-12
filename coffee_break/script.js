// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
  function onYouTubeIframeAPIReady() {

    var ctrlq = document.getElementById("youtube-audio");
    ctrlq.innerHTML = '<div id="myBtn" id="play-video" class=""/><div id="youtube-player"></div>';
    ctrlq.onclick = toggleAudio;

    player = new YT.Player('youtube-player', {
      height: '0',
      width: '0',
      videoId: ctrlq.dataset.video,
      playerVars: {
        autoplay: ctrlq.dataset.autoplay,
        loop: ctrlq.dataset.loop,
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange 
      } 
    });

let listeningTo = document.getElementById("currentSong");

function togglePlayButton(play) {    
    document.getElementById("myBtn").className = play ? "fa fa-pause-circle fa-5x" : "fa fa-play-circle fa-5x";
    listeningTo.innerHTML = play ? "<span class='animateCurrentSong'>Rainy Lofi Jazz Radio <i style='font-size:13px' class='fas'>&#xf001;</i></span>" + "<br>" + "<a class='source' href='https://www.youtube.com/watch?v=uxR_sTZnBtg' target='_blank'>source</a>" : "<i style='font-size:15px' class='fas'>&#xf6a9;</i>";
}

function toggleAudio() {
    if ( player.getPlayerState() == 1 || player.getPlayerState() == 3 ) {
      player.pauseVideo(); 
      togglePlayButton(false);
    } 
    else {
      player.playVideo(); 
      togglePlayButton(true);
    } 
}

function onPlayerReady(event) {
    player.setPlaybackQuality("small");
    //event.target.setVolume(50);
    document.getElementById("youtube-audio").style.display = "block";
    togglePlayButton(player.getPlayerState() !== 5);
}

function onPlayerStateChange(event) {
    if (event.data === 0) {
      togglePlayButton(false); 
    }
}};

document.getElementById("volumeDown").addEventListener("click", volumeDown);
document.getElementById("volumeUp").addEventListener("click", volumeUp);

let currentVolume = 50;

function volumeDown() {
  player.setVolume(currentVolume += -10);
  console.log(currentVolume);
  
}
function volumeUp() {
  player.setVolume(currentVolume += 10);
  console.log(currentVolume);
}


/*
document.getElementById("myBtn").addEventListener("click", function (e) {
    let target = e.target;

    target.classList.toggle("fa-play-circle");
    target.classList.toggle("fa-pause-circle");
}, false);

/*
let trackPlaying = false;
let currentSongText = document.getElementById("currentSong");

let trackList = [
    {
    song: new Audio("music/desitalk.mp3"),
    artist: "Per",
    title: "Yeah Baby"
    },
    {
    song: new Audio("music/nelyma.mp3"),
    artist: "Promp",
    title: "Dudemanhypez"  
    }
];

let currentSong;

function playAndPause() {

    trackPlaying = !trackPlaying;

    if (trackPlaying) {
        let randomSong = Math.floor(Math.random() * trackList.length);
        let playTrack = trackList[randomSong];
        currentSong = playTrack;
        playTrack.song.play();
        currentSongText.innerHTML = "<i style='font-size:12px' class='fas'>&#xf025;</i>" + " Playing: " + "<span style='color:#00918e'>" + currentSong.title + "</span>" + " by " +  "<span style='color:#00918e'>" + currentSong.artist + "</span>";
        console.log(currentSong);
    }
    else {
        currentSong.song.pause();
        currentSong.song.load();
        currentSongText.innerHTML = "<i style='font-size:15px' class='fas'>&#xf6a9;</i>" + " Currently not playing music...";
    }
};
*/