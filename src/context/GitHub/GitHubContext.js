import React from "react";
import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";
//import { createContext, useState } from "react";
const GitHubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GIT_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  const initialState = {
    users: [],
    user: {},
    repos: [],
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

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });

    const { items } = await response.json();
    // setUsers(data);
    // setLoading(false);
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  //get a single user
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  //get user repos
  const getUserRepos = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {});

    const data = await response.json();
    // setUsers(data);
    // setLoading(false);
    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  //clear users from state
  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });
  //set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        getUserRepos,
        searchUsers,
        clearUsers,
        getUser,
        // fetchUsers,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};
export default GitHubContext;
