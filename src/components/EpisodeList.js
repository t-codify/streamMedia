import { useContext } from "react";
import EpisodeItem from "./EpisodeItem";
import EpisodeContext from "../EpisodeContext";
const EpisodeList = () => {
  const { filteredData } = useContext(EpisodeContext);

  return (
    filteredData && (
      <>
        {filteredData.map((e) => {
          return <EpisodeItem key={"epItem" + e.id} {...e} />;
        })}
      </>
    )
  );
};

export default EpisodeList;
