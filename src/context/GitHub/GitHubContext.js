import React from "react";
import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";
//import { createContext, useState } from "react";
const GitHubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GIT_URL;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  const initialState = {
    users: [],
    loading: false,
    //    loading: true,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  //get initial users(used for testing)
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {});

    const { items } = await response.json();
    // setUsers(data);
    // setLoading(false);
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };
  //set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        // fetchUsers,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};
export default GitHubContext;
