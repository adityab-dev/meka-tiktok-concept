import { ReactComponent } from "../../Types/types";

import userProfilePic from "../../assets/user-profile-pic.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import "./ContentLeft.css";
import EmbeddedShorts from "./EmbeddeShorts/EmbeddedShorts";

function ContentLeft(): ReactComponent {
  return (
    <>
      <div className="user-details-padding">
        <section className="user-details">
          <section className="user-details-left">
            <img
              src={userProfilePic}
              alt={"User Profile Image"}
              className="user-profile-img"
            />
          </section>

          <section className="user-details-right">
            <h1 className="user-name">Your Name</h1>
            <h2 className="user-username">Username</h2>

            <button
              type="button"
              className="user-follow-btn"
            >
              Follow
            </button>
          </section>
        </section>

        <section className="profile-details">
          <div className="profile-stats">
            <div className="profile-nums">14</div>
            <div className="profile-category">Following</div>
          </div>

          <div className="profile-stats">
            <div className="profile-nums">1.9k</div>
            <div className="profile-category">Followers</div>
          </div>

          <div className="profile-stats">
            <div className="profile-nums">46k</div>
            <div className="profile-category">Likes</div>
          </div>
        </section>

        <section className="user-bio">Bio Text</section>

        <EmbeddedShorts />
      </div>
    </>
  );
}

export default ContentLeft;
