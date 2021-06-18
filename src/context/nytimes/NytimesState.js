import React, { useReducer } from 'react';
import axios from 'axios';
import NytimesContext from './nytimesContext';
import NytimesReducer from './nytimesReducer';
import { SEARCH_ARTICLES, SET_LOADING, CLEAR_ARTICLES } from '../types';

let nytimesAPIKey = 'kXNRhHLEPCpAOXMYZDYDSqSzCc7G4EOm';

const NytimesState = (props) => {
  const initialState = {
    articles: [],
    article: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(NytimesReducer, initialState);

  // Search Articles
  const searchArticles = async (text) => {
    setLoading();
    const res = await axios.get(
      `http://api.nytimes.com/svc/mostpopular/v2/viewed/${text}.json?api-key=${nytimesAPIKey}`,
    );

    console.log(res);

    dispatch({
      type: SEARCH_ARTICLES,
      payload: res.data.results,
    });
  };

  // Clear Articles
  const clearArticles = () => dispatch({ type: CLEAR_ARTICLES });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <NytimesContext.Provider
      value={{
        articles: state.articles,
        article: state.article,
        repos: state.repos,
        loading: state.loading,
        searchArticles,
        clearArticles,
      }}
    >
      {props.children}
    </NytimesContext.Provider>
  );
};

export default NytimesState;
