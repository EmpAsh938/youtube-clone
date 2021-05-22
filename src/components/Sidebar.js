import Menu from "@material-ui/icons/Menu";
import Home from "@material-ui/icons/Home";
import PlaylistPlay from "@material-ui/icons/PlaylistPlay";
import Subscriptions from "@material-ui/icons/Subscriptions";
import "./Sidebar.css";

const Sidebar = ({ toggleMenu, showMenu }) => {
  return (
    <aside
      className={
        showMenu ? "sidebar sidebar__menu-active sidebar__menu-show" : "sidebar"
      }
    >
      <div className="sidebar__menu header__left">
        <Menu onClick={toggleMenu} className="header__icon" />
        <img src="/images/yt-logo.jpg" alt="youtube logo" />
      </div>
      <div className="sidebar__tabs">
        <div className="sidebar__links flex sidebar__links-selected">
          <Home />
          <h3>Home</h3>
        </div>
        <div className="sidebar__links flex">
          <PlaylistPlay />
          <h3>Playlist</h3>
        </div>
        <div className="sidebar__links flex">
          <Subscriptions />
          <h3>Subscriptions</h3>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
