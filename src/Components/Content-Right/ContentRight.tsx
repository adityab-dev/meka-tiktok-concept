import { ReactComponent } from "../../Types/types";

import facebookIcon from "../../assets/facebook-icon.png";
import pinterestIcon from "../../assets/pinterest-icon.png";
import twitterIcon from "../../assets/twitter-icon.png";

import appStore from "../../assets/app-store.png";
import playStore from "../../assets/play-store.png";
import amazonStore from "../../assets/amazon-store.png";

import marieClark from "../../assets/marie-clark.png";
import derekSteam from "../../assets/derek-steam.png";
import tomRiplik from "../../assets/tom-riplik.png";
import karinStreet from "../../assets/karin-street.png";
import kevinTimber from "../../assets/kevin-timber.png";

export type user = { name: string; image: string };

export const users: Array<user> = [
  { name: "Marie Clark", image: marieClark },
  { name: "Derek Steam", image: derekSteam },
  { name: "Tom Riplik", image: tomRiplik },
  { name: "Karin Street", image: karinStreet },
  { name: "Kevin Timber", image: kevinTimber },
];

import "./ContentRight.css";

function ContentRight(): ReactComponent {
  return (
    <div className="content-right-container">
      <section className="icons-list">
        <ul className="icons-list">
          <li className="icon">
            <img
              src={facebookIcon}
              alt="Facebook Icon"
            />
          </li>
          <li className="icon">
            <img
              src={pinterestIcon}
              alt="Pinterest Icon"
            />
          </li>
          <li className="icon">
            <img
              src={twitterIcon}
              alt="Twitter Icon"
            />
          </li>
        </ul>
      </section>

      <section className="suggest">
        <h2 className="suggest-heading">Suggested Accounts</h2>

        {users.map((user) => {
          const { name, image } = user;

          return (
            <article
              key={name + Math.random()}
              className="add-user"
            >
              <div className="suggest-img-container">
                <img
                  src={image}
                  alt={`${name}'s Profile Pic`}
                />
              </div>

              <div className="suggest-mid">
                <div className="suggest-user-name">{name}</div>
                <div className="user-user">user</div>
              </div>

              <div className="suggest-btn-container">
                <button
                  type="button"
                  className="follow-user-btn"
                >
                  Follow
                </button>
              </div>
            </article>
          );
        })}

        <article className="add-user">
          <div className="suggest-img-container">
            <img
              src={marieClark}
              alt="Marie Clarks's Profile Pic"
            />
          </div>

          <div className="suggest-mid">
            <div className="suggest-user-name">Marie Clark</div>
            <div className="user-user">user</div>
          </div>

          <div className="suggest-btn-container">
            <button
              type="button"
              className="follow-user-btn"
            >
              Follow
            </button>
          </div>
        </article>
      </section>

      <div style={{ color: "white", fontSize: "1.25rem", paddingBottom: "1rem" }}>
        Text yourself a link to download TikTok
      </div>

      <div className="msg-form">
        <div className="input-tel-container">
          <input type="tel" />
        </div>
        <button
          type="button"
          className="tel-send"
        >
          Send
        </button>
      </div>

      <p style={{ width: "22.5rem", color: "#8E8D91", fontSize: ".75rem" }}>
        By clicking the “send” button? you confirm that you agree to our Terms of Use and
        acknowledge you have read abd understood our{" "}
        <em style={{ textDecoration: "underline" }}>Privacy Policy</em>
      </p>

      <div className="download">
        <img
          src={appStore}
          alt="Download from App Store"
        />
        <img
          src={playStore}
          alt="Download from Play Store"
        />
        <img
          src={amazonStore}
          alt="Download from Amazon Store"
        />
      </div>
    </div>
  );
}

export default ContentRight;
