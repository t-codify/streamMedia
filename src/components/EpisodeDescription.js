import { useContext, useEffect, useRef, useState } from "react";
import EpisodeContext from "../EpisodeContext";
import VideoPlayer from "react-video-js-player";
const EpisodeDescription = () => {
  const { selectedEpisode } = useContext(EpisodeContext);
  const playerRef = useRef(null);

  const onPlayerReady = (player) => {
    playerRef.current = player;
  };

  if (!selectedEpisode)
    return (
      <div className="font-semibold text-gray-300">
        Select Episode to View Description
      </div>
    );
  else
    return (
      selectedEpisode && (
        <div
          key={"vpDiv" + selectedEpisode.id}
          className="flex flex-col h-full max-h-full p-6 bg-slate-800 rounded-lg shadow-md overflow-auto"
        >
          <h1 className="text-3xl font-bold text-white mb-4">
            {selectedEpisode.name}
          </h1>
          <div className="flex items-start ">
            <VideoPlayer
              key={"vdp" + selectedEpisode.id}
              controls={true}
              src={
                "https://ia800508.us.archive.org/21/items/ep-1_20221025/" +
                selectedEpisode.href
              }
              //poster={video.poster}
              width="720"
              height="420"
              onReady={onPlayerReady}
              type="video/mp4"
            />
          </div>
        </div>
      )
    );
};

export default EpisodeDescription;
