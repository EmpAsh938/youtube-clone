import {
  TOGGLE_SEARCH,
  TOGGLE_MENU,
  FETCH_RESPONSE,
  SEARCH_RESPONSE,
  HANDLE_SUBMIT,
  SET_LOADING,
  SET_PAGE_TOKEN,
} from "./actionTypes";

const initialState = {
  popularVideos: [],
  searchVideos: [],
  showMenu: false,
  showSearch: false,
  isLoading: true,
  searchTerm: "",
  nextPageToken: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESPONSE:
      return {
        ...state,
        popularVideos: [...action.payload],
        nextPageToken: action.payload.nextPageToken,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case SEARCH_RESPONSE:
      return {
        ...state,
        searchVideos: [...action.payload],
      };
    case TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu,
      };
    case TOGGLE_SEARCH:
      return {
        ...state,
        showSearch: action.payload,
      };
    case HANDLE_SUBMIT:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
