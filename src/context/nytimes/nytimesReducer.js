import { SEARCH_ARTICLES, SET_LOADING, CLEAR_ARTICLES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    case CLEAR_ARTICLES:
      return {
        ...state,
        articles: [],
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
