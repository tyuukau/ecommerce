import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
} from "../constants/userConstants";

/**
 * This is a reducer function that handles user login actions and updates the state accordingly.
 * @param [state] - The current state of the user login information, which is an object that contains
 * properties such as loading, userInfo, and error.
 * @param action - The `action` parameter in this reducer function represents the action object that is
 * dispatched by the application. It contains information about the action type and any additional data
 * that is needed to update the state. The reducer function uses this information to determine how to
 * update the state based on the action type.
 * @returns The userLoginReducer function returns the information about the user if the login is 
 * successful.
 */
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

/**
 * This is a reducer function that handles user register actions and updates the state accordingly.
 * @param [state] - The current state of the user register information, which is an object containing
 * properties such as loading, userInfo, and error.
 * @param action - The `action` parameter in this reducer function represents the action object that is
 * dispatched by the application. It contains information about the action type and any additional data
 * that is needed to update the state. The reducer function uses this information to determine how to
 * update the state based on the action type.
 * @returns The userLoginReducer function returns the information about the user if the register is 
 * successful.
 */
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userProfileReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true, ...state };
    case USER_PROFILE_SUCCESS:
      return { loading: false, userProfile: action.payload };
    case USER_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};