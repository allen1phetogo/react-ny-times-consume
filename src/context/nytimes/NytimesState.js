import React, { useReducer } from 'react';
import axios from 'axios';
import NytimesContext from './nytimesContext';
import NytimesReducer from './nytimesReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS

} from '../types';


let nytimesAPIKey = 'kXNRhHLEPCpAOXMYZDYDSqSzCc7G4EOm';


const NytimesState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(NytimesReducer, initialState);

  // Search Users
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `http://api.nytimes.com/svc/mostpopular/v2/viewed/${text}.json?api-key=${nytimesAPIKey}`
    );

    console.log(res);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.results
    });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <NytimesContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {props.children}
    </NytimesContext.Provider>
  );
};

export default NytimesState;
