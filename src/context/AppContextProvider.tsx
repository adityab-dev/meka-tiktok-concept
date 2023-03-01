import context from "./app-context";

import { useState } from "react";

function AppContextProvider(props: { children: React.ReactElement }) {
  const [currnetVideoIndex, setIndex] = useState<number>(0);
  const [enterWatchMode, setEnterWatchMode] = useState<boolean>(false);

  const minIndex = 0;
  const maxIndex = 8;

  const disableUp = currnetVideoIndex === maxIndex;
  const disableDown = currnetVideoIndex === minIndex;

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
