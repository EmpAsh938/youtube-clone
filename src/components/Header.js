import { useState } from "react";
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import Search from "@material-ui/icons/Search";
import Notifications from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";

const Header = (props) => {
  const [input, setInput] = useState("");
  const { showSearch, searchRequest, toggleSearch, toggleMenu, handleSubmit } =
    props;
  const handleForm = (e) => {
    e.preventDefault();
    handleSubmit(input);
    searchRequest(input);
  };
  return (
    <header className="header">
      <nav className="header__nav flex">
        <div className="header__left">
          <Menu onClick={toggleMenu} className="header__icon" />
          <img src="/images/yt-logo.jpg" alt="youtube logo" />
        </div>
        <form
          onSubmit={handleForm}
          className={
            showSearch
              ? "header__search header__search-show"
              : "header__search flex"
          }
        >
          {showSearch && (
            <button
              onClick={() => toggleSearch(false)}
              className="header__search-btn"
            >
              <Close className="header__search-icon header__search-icon-close" />
            </button>
          )}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search"
          />
          <button onClick={handleForm} className="header__search-btn">
            <Search className="header__search-icon" />
          </button>
        </form>
        <div className="header__right flex">
          <Search
            onClick={() => toggleSearch(true)}
            className="header__search-icon header__right-search "
          />
          <Notifications />
          <Avatar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
