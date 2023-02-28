import { ReactComponent } from "../../../Types/types";

import "./EmbeddedShorts.css";

function EmbeddedShorts(): ReactComponent {
  return (
    <section className="shorts-grid-contianer">
      <iframe
        onClick={(event) => console.log(event)}
        src="https://www.youtube.com/embed/FkNdEfxYYc4"
        title="I made the ball be on beat the"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <iframe
        src="https://www.youtube.com/embed/h5vscpsP6QU"
        title="How villains are made😭💔"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <iframe
        src="https://www.youtube.com/embed/iLRXM8tGBXI"
        title="would you eat this? #shorts"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <iframe
        src="https://www.youtube.com/embed/u9fPtsBCmCc"
        title="Flooded Rug Heavy With Mud"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <iframe
        src="https://www.youtube.com/embed/ap6Qj5RvSKw"
        title="Thoughts that go through my head while piping letters"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <iframe
        src="https://www.youtube.com/embed/crK_kFWDhKw"
        // title="My sister gave a very strange reaction… 🧐"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />

      <iframe
        src="https://www.youtube.com/embed/FkNdEfxYYc4"
        title="I made the ball be on beat the WHOLE time"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />

      <iframe
        onClick={(event) => console.log(event)}
        src="https://www.youtube.com/embed/IotRdWPWYOY"
        title="Magic Vs reality / check pinned comment"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <iframe
        src="https://www.youtube.com/embed/sEkK-V0o8wE"
        title="Magnet Satisfaction Pills #shorts"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
}

export default EmbeddedShorts;
