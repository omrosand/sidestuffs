import React, { useState } from "react";
import YouTube from "react-youtube";

const Player = () => {
  const [play, setPlay] = useState(false);
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    console.log("test");
    if (play) {
      event.target.pauseVideo();
      setPlay(false);
    } else {
      event.target.playVideo();
      setPlay(true);
    }
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
      <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />
      <button onClick={onPlayerReady}>why</button>
    </>
  );
};
export default Player;
