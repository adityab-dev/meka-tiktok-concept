import { ReactComponent } from "../../Types/types";
import Backdrop from "../Backdrop/Backdrop";

import ContentLeft from "../Content-Left/ContentLeft";
import ContentRight from "../Content-Right/ContentRight";
import Header from "../Header/Header";

import { useContext } from "react";

import "./App.css";
import context from "../../context/app-context";

function App(): ReactComponent {
  const { enterWatchMode } = useContext(context);

  return (
    <div className="app-container">
      <div className={`${!enterWatchMode ? "display-none" : ""}`}>
        <Backdrop />
      </div>

      <div className={`${enterWatchMode ? "display-none" : ""}`}>
        <Header />
        <main>
          <section className="content-container">
            <ContentLeft />
            <ContentRight />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
