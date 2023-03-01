import { useContext } from "react";

import context from "../../../context/app-context";

import { ReactComponent } from "../../../Types/types";

import "./EmbeddedShorts.css";

export const videos: Array<{ src: string; index: number }> = [
  { src: "https://www.youtube.com/embed/FkNdEfxYYc4", index: 0 },
  { src: "https://www.youtube.com/embed/h5vscpsP6QU", index: 1 },
  { src: "https://www.youtube.com/embed/iLRXM8tGBXI", index: 2 },
  { src: "https://www.youtube.com/embed/u9fPtsBCmCc", index: 3 },
  { src: "https://www.youtube.com/embed/ap6Qj5RvSKw", index: 4 },
  { src: "https://www.youtube.com/embed/WDGPWOlcqms", index: 5 },
  { src: "https://www.youtube.com/embed/GVsxQm90zJA", index: 6 },
  { src: "https://www.youtube.com/embed/IotRdWPWYOY", index: 7 },
  { src: "https://www.youtube.com/embed/sEkK-V0o8wE", index: 8 },
];

function EmbeddedShorts(): ReactComponent {
  const { watchModeTransition, onVideoClick } = useContext(context);

  return (
    <section className="shorts-grid-contianer">
      {videos.map((video) => {
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
