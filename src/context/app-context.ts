import React from "react";

const defaultContext = {
  onStart: true,
  enterWatchMode: false,
  disableDown: false,
  disableUp: false,
  currnetVideoIndex: 0,
  upChangeHandler: () => {},
  downChangeHandler: () => {},
  watchModeTransition: (flag: boolean) => {},
  resetCurrentIndex: () => {},
  onVideoClick: (index: number) => {},
  memoizedVideos: [{ src: "", index: 0 }],
  userHasClicked: () => {},
  resetOnStart: () => {},
};

const context = React.createContext(defaultContext);

export default context;
