import { useContext } from "react";

import context from "../../../context/app-context";

import { memo } from "react";

import { ReactComponent } from "../../../Types/types";

import "./EmbeddedShorts.css";

function EmbeddedShorts(): ReactComponent {
  const { watchModeTransition, onVideoClick, memoizedVideos, userHasClicked } = useContext(context);

  return (
    <section className="shorts-grid-contianer">
      {memoizedVideos.map((video) => {
        return (
          <div
            key={video.src}
            className="shorts-video-container"
          >
            <button
              className="iframe-btn"
              onClick={() => {
                watchModeTransition(true);
                onVideoClick(video.index);
                userHasClicked();
              }}
            ></button>
            <iframe src={video.src} />
          </div>
        );
      })}
    </section>
  );
}

export default EmbeddedShorts;
