import { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import {
  fetchRequest,
  handleSubmit,
  searchRequest,
  toggleMenu,
  toggleSearch,
} from "../redux/actionCreators";

const Home = (props) => {
  useEffect(() => {
    props.fetchRequest();
  }, []);

  useEffect(() => {
    const listenScroll = window.addEventListener("scroll", () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        // props.increaseMaxResults();
      }
    });
    return () => {
      window.removeEventListener("scroll", listenScroll);
    };
  }, []);

  return (
    <main>
      <Header {...props} />
      <Sidebar toggleMenu={props.toggleMenu} showMenu={props.showMenu} />
      <Content {...props} />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    popularVideos: state.popularVideos,
    searchVideos: state.searchVideos,
    showSearch: state.showSearch,
    showMenu: state.showMenu,
    isLoading: state.isLoading,
    searchTerm: state.searchTerm,
    maxResults: state.maxResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch(toggleMenu()),
    toggleSearch: (param) => dispatch(toggleSearch(param)),
    fetchRequest: (param) => dispatch(fetchRequest(param)),
    searchRequest: (param) => dispatch(searchRequest(param)),
    handleSubmit: (param) => dispatch(handleSubmit(param)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
