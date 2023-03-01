import context from "./app-context";

import { useState, useMemo } from "react";

function AppContextProvider(props: { children: React.ReactElement }) {
  const [currnetVideoIndex, setIndex] = useState<number>(0);
  const [enterWatchMode, setEnterWatchMode] = useState<boolean>(false);

  const [onStart, setOnStart] = useState<boolean>(true);

  const minIndex = 0;
  const maxIndex = 8;

  const disableUp = currnetVideoIndex === maxIndex;
  const disableDown = currnetVideoIndex === minIndex;

  const videos: Array<{ src: string; index: number }> = [
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

  const memoizedVideos = useMemo(() => videos, []);

  function userHasClicked() {
    setOnStart(false);
  }

  function resetOnStart() {
    setOnStart(true);
  }

  function upChangeHandler() {
    setIndex((prevState) => prevState + 1);
  }

  function downChangeHandler() {
    setIndex((prevState) => prevState - 1);
  }

  function watchModeTransition(flag: boolean) {
    setEnterWatchMode(flag);
  }

  function resetCurrentIndex() {
    setIndex(0);
  }

  function onVideoClick(index: number) {
    setIndex(index);
  }

  const valueProps = {
    onStart,
    userHasClicked,
    resetOnStart,
    memoizedVideos,
    disableDown,
    disableUp,
    currnetVideoIndex,
    upChangeHandler,
    downChangeHandler,
    enterWatchMode,
    watchModeTransition,
    resetCurrentIndex,
    onVideoClick,
  };

  return <context.Provider value={valueProps}>{props.children}</context.Provider>;
}

export default AppContextProvider;
