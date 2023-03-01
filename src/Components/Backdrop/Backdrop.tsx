import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

import { useContext } from "react";
import context from "../../context/app-context";

import "./Backdrop.css";

function Backdrop() {
  const {
    currnetVideoIndex,
    disableUp,
    disableDown,
    upChangeHandler,
    downChangeHandler,
    watchModeTransition,
    resetCurrentIndex,
    memoizedVideos,
    resetOnStart,
    onStart,
  } = useContext(context);

  return (
    <div
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          resetCurrentIndex();
          watchModeTransition(false);
          resetOnStart();
        }
      }}
      onWheel={(event) => {
        const down = event.deltaY > 0;
        const up = event.deltaY < 0;

        if (down && currnetVideoIndex > 0) downChangeHandler();
        else if (up && currnetVideoIndex < 8) upChangeHandler();
      }}
      className="backdrop"
    >
      <div className="video-container">
        {!onStart ? <iframe src={memoizedVideos[currnetVideoIndex].src} /> : null}
      </div>

      <button
        onClick={() => {
          resetCurrentIndex();
          watchModeTransition(false);
          resetOnStart();
        }}
        className="close-btn"
      >
        <GrClose />
      </button>

      <button
        disabled={disableDown}
        onClick={() => downChangeHandler()}
        className={`backdrop-btns btn-up ${disableDown ? "disabled-btn" : ""}`}
      >
        <AiOutlineArrowUp />
      </button>
      <button
        disabled={disableUp}
        onClick={() => upChangeHandler()}
        className={`backdrop-btns btn-down ${disableUp ? "disabled-btn" : ""}`}
      >
        <AiOutlineArrowDown />
      </button>
    </div>
  );
}

export default Backdrop;
