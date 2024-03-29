import { useEffect, useMemo, useRef, useState } from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { TbMusic } from "react-icons/tb";
import { TbMusicOff } from "react-icons/tb";

const Player = () => {
  const streams = useMemo(
    () => [
      {
        name: "Synthwave Radio",
        id: "MVPTGNGiI-4",
      },
      {
        name: "Lo-fi Hip Hop",
        id: "jfKfPfyJRdk",
      },
    ],
    []
  );
  const [isPlayerReady, setPlayerReady] = useState(false);
  const [play, setPlay] = useState(true);
  const [currentStream, setCurrentStream] = useState(streams[0]);
  const [title, setTitle] = useState("");
  const playerRef = useRef(null);

  useEffect(() => {
    // Load the YouTube iFrame Player API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize the player when the API is ready
    window.onYouTubeIframeAPIReady = () => {
      setPlayerReady(true);
    };

    return () => {
      // Reset when the component unmounts
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  useEffect(() => {
    if (isPlayerReady && playerRef.current === null) {
      playerRef.current = new window.YT.Player("youtube-player", {
        height: "0",
        width: "0",
        videoId: currentStream.id,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    }
  }, [isPlayerReady, currentStream.id]);

  const onPlayerReady = (event) => {
    if (playerRef.current) {
      event.target.setVolume(10);
      event.target.playVideo();
      setTitle(streams[0].name);
      console.log(event.target);
    }
  };

  const handlePlay = () => {
    if (playerRef.current) {
      if (play) {
        playerRef.current.pauseVideo();
        setPlay(false);
        return;
      }
      playerRef.current.playVideo();
      setPlay(true);
    }
  };

  const handleVolumeChange = (volume) => {
    if (playerRef.current) {
      playerRef.current.setVolume(volume);
    }
  };
  const handleNext = () => {
    setPlay(true);
    const currentIndex = streams.findIndex(
      (stream) => stream === currentStream
    );
    const nextIndex = (currentIndex + 1) % streams.length;
    setCurrentStream(streams[nextIndex]);

    if (playerRef.current) {
      playerRef.current.loadVideoById(streams[nextIndex].id);
      playerRef.current.playVideo();
      const videoTitle = streams[nextIndex].name;
      setTitle(videoTitle);
      console.log(playerRef);
    }
  };

  return (
    <section className="player">
      <div>
        <div id="youtube-player"></div>
        <button className="controllerBtn" onClick={handlePlay}>
          {play ? (
            <TbPlayerPauseFilled className="icon" />
          ) : (
            <TbPlayerPlayFilled className="icon" />
          )}
        </button>
        <div className="wrapper">
          {!play ? (
            <p>
              <TbMusicOff /> Satt på pause
            </p>
          ) : (
            <p>
              <TbMusic /> Hører på {title}
            </p>
          )}
          <input
            type="range"
            min="0"
            max="50"
            defaultValue="10"
            onChange={(e) => handleVolumeChange(e.target.value)}
          />
        </div>

        <button className="controllerBtn" onClick={handleNext}>
          <TbPlayerSkipForwardFilled className="icon" />
        </button>
        <div></div>
      </div>
    </section>
  );
};

export default Player;
