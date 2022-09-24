import { RadioBrowserApi } from "radio-browser-api";
import { useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import defaultImage from "../radio-fm-icon.png";

export default function Radio() {
  const [stations, setStations] = useState();
  const [genre, setGenre] = useState("all");

  useEffect(() => {
    apiSetup(genre).then((data) => {
      setStations(data);
    });
  }, [genre]);

  const apiSetup = async (genre) => {
    const api = new RadioBrowserApi(fetch.bind(window), "radio-app");

    const stations = await api.searchStations({
      language: "english",
      tag: genre,
      limit: 12,
    });
    return stations;
  };

  const filters = [
    "all",
    "classical",
    "country",
    "dance",
    "disco",
    "house",
    "jazz",
    "pop",
    "rap",
    "retro",
    "rock",
  ];

  const setDefaultLogo = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className="radio">
      <div className="filters">
        {filters.map((filter) => (
          <span
            onClick={() => setGenre(filter)}
            className={genre === filter ? "selected" : null}
          >
            {filter}
          </span>
        ))}
      </div>
      <div className="stations">
        {stations &&
          stations.map((station, index) => {
            return (
              <div key={index} className="station">
                <div className="stationName">
                  <img
                    className="logo"
                    src={station.favicon}
                    alt="radio station logo"
                    onError={setDefaultLogo}
                  />
                  <div className="name">{station.name}</div>
                  <div />
                </div>

                <AudioPlayer
                  className="player"
                  src={station.urlResolved}
                  showJumpControls={false}
                  layout="stacked"
                  customProgressBarSection={[]}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
