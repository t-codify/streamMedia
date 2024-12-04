import { useContext, useEffect, useState } from "react";
import EpisodeDescription from "./EpisodeDescription";
import EpisodeList from "./EpisodeList";
import SearchBar from "./SearchBar";
import EpisodeContext from "../EpisodeContext";
const DashboardComponent = () => {
  const { setEpisodeData, setFilteredData, episodeData } =
    useContext(EpisodeContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetched, setFetched] = useState(false);

  const getData = () => {
    try {
      let ep = 1;
      let episodesList = [];
      do {
        episodesList.push({
          href: "Ep%20" + ep + ".mp4",
          name: ep + " Episode",
          id: ep,
        });
        ep++;
      } while (ep <= 267);
      setEpisodeData(episodesList);
      setFilteredData(episodesList);
      setLoading(false);
      setFetched(true);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setFetched(true);
    }
  };

  useEffect(() => {
    if (!fetched) getData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading episodes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    episodeData && (
      <div className="w-full h-screen flex flex-col">
        <div className="w-full border-b border-slate-700">
          <SearchBar />
        </div>

        <div className="flex flex-grow overflow-hidden">
          <div className="w-1/3 h-full overflow-y-auto border-r border-slate-700">
            <EpisodeList />
          </div>

          <div className="w-2/3 h-full overflow-y-auto">
            <EpisodeDescription />
          </div>
        </div>
      </div>
    )
  );
};

export default DashboardComponent;
