import React, { useState, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import DashboardComponent from "./components/DashboardComponent";
import EpisodeContext from "./EpisodeContext";

const AppLayout = () => {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [episodeData, setEpisodeData] = useState(null);
  const [filteredData, setFilteredData] = useState({});
  return (
    <EpisodeContext.Provider
      value={{
        selectedEpisode: selectedEpisode,
        setSelectedEpisode,
        episodeData: episodeData,
        setEpisodeData,
        filteredData: filteredData,
        setFilteredData,
      }}
    >
      <DashboardComponent />
    </EpisodeContext.Provider>
  );
};
const rootEle = ReactDOM.createRoot(document.getElementById("root"));
rootEle.render(<AppLayout />);
