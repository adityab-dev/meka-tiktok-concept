import React from "react";

const defaultContext = {
  enterWatchMode: false,
  disableDown: false,
  disableUp: false,
  currnetVideoIndex: 0,
  upChangeHandler: () => {},
  downChangeHandler: () => {},
  watchModeTransition: (flag: boolean) => {},
  resetCurrentIndex: () => {},
  onVideoClick: (index: number) => {},
};

const context = React.createContext(defaultContext);

export default context;
