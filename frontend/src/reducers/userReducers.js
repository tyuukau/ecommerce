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
  USER_PROFILE_RESET,
  USER_PROFILE_UPDATE_REQUEST,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_PROFILE_UPDATE_FAIL,
  USER_PROFILE_UPDATE_RESET,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
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

/**
 * This is a reducer function that handles actions related to user profile, such as requesting,
 * success, and failure.
 * @param [state] - The current state of the userProfileReducer. It is an object that contains a user
 * property which is initially an empty object.
 * @param action - The `action` parameter in this code refers to an object that describes the action
 * being performed. It typically has a `type` property that describes the type of action being
 * performed, and may also have additional properties that provide data or context for the action. The
 * reducer function uses the `action` parameter
 * @returns The `userProfileReducer` function returns an object with properties `loading`,
 * `userProfile`, and `error`. The initial state of `state` is an object with a `user` property set to
 * an empty object. The `switch` statement handles different cases based on the `action.type` passed
 * in. If the `action.type` is `USER_PROFILE_SUCCESS`, the function returns the userProfile object.
 */
export const userProfileReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true, ...state };
    case USER_PROFILE_SUCCESS:
      return { loading: false, userProfile: action.payload };
    case USER_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case USER_PROFILE_RESET:
      return { userProfile: {} };
    default:
      return state;
  }
};

/**
 * This is a reducer function that handles state updates for user profile updates, including loading,
 * success, and error states.
 * @param [state] - The current state of the userProfileUpdateReducer. If no state is provided, it
 * defaults to an empty object.
 * @param action - The `action` parameter in this reducer function refers to an object that contains
 * information about the action being dispatched. It typically has two properties: `type` (a string
 * that describes the type of action being performed) and `payload` (any data that needs to be passed
 * along with the action).
 * @returns The `userProfileUpdateReducer` function returns an object with different properties based
 * on the action type received. If the action type is `USER_PROFILE_UPDATE_REQUEST`, it returns an
 * object with `loading` set to `true`. If the action type is `USER_PROFILE_UPDATE_SUCCESS`, it returns
 * an object with `loading` set to `false`, `success` set to `true`, and `userProfile` object.
 */
export const userProfileUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_UPDATE_REQUEST:
      return { loading: true };
    case USER_PROFILE_UPDATE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }; // userUpdate
    case USER_PROFILE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case USER_PROFILE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };

    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };

    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };

    case USER_LIST_RESET:
      return { users: [] };

    default:
      return state;
  }
};
