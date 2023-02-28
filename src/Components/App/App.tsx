import { ReactComponent } from "../../Types/types";

import ContentLeft from "../Content-Left/ContentLeft";
import ContentRight from "../Content-Right/ContentRight";
import Header from "../Header/Header";

import "./App.css";

function App(): ReactComponent {
  return (
    <div className="app-container">
      <Header />

      <main className="content-container">
        <ContentLeft />
        <ContentRight />
      </main>
    </div>
  );
}

export default App;
