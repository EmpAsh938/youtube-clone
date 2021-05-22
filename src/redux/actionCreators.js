import {
  TOGGLE_SEARCH,
  FETCH_RESPONSE,
  TOGGLE_MENU,
  SEARCH_RESPONSE,
  HANDLE_SUBMIT,
  SET_LOADING,
  SET_PAGE_TOKEN,
} from "./actionTypes";

const popularurl =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=20&key=";
const searchurl =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";

const API = process.env.REACT_APP_YT_API;

export const fetchResponse = (param) => {
  return {
    type: FETCH_RESPONSE,
    payload: param,
  };
};

export const searchResponse = (param) => {
  return {
    type: SEARCH_RESPONSE,
    payload: param,
  };
};

export const handleSubmit = (param) => {
  return {
    type: HANDLE_SUBMIT,
    payload: param,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU,
  };
};

export const toggleSearch = (param) => {
  return {
    type: TOGGLE_SEARCH,
    payload: param,
  };
};

export const nextPageToken = () => {
  return {
    type: SET_PAGE_TOKEN,
  };
};

export const fetchRequest = () => {
  return (dispatch) => {
    fetch(`${popularurl}${API}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        dispatch(fetchResponse(result.items));
        dispatch(setLoading());
      });
  };
};

export const searchRequest = (st) => {
  return (dispatch) => {
    dispatch(setLoading());
    fetch(`${searchurl}${st}&key=${API}`)
      .then((response) => response.json())
      .then((result) => {
        dispatch(searchResponse(result.items));
        dispatch(setLoading());
      });
  };
};
