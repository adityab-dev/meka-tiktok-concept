import { RxHamburgerMenu } from "react-icons/rx";
import tiktokLogoDark from "../../assets/tiktok-logo-dark.png";

import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <div className="header-ham">
          <RxHamburgerMenu />
        </div>
        <img
          src={tiktokLogoDark}
          alt="TikTok Logo"
          className="header-logo"
        />
      </div>

      <div className="header-right">
        <nav className="header-nav">
          <ul className="header-navlist">
            <li className="header-list-item">Trending</li>
            <li className="header-list-item">Discover</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
