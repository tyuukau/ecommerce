import axios from "axios";

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  //   USER_LOGOUT,
} from "../constants/userConstants";

/**
 * This is a login function that sends a POST request to the server with the user's email and password,
 * dispatches actions based on the response, and stores the user's information in local storage.
 * @param email - The email parameter is a string representing the user's email address. It is used as
 * the username in the login request to the server.
 * @param password - The `password` parameter is a string representing the user's password that they
 * entered during the login process.
 */
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login/",
      { username: email, password: password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
