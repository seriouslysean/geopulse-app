import { SET_PHOTOS } from "../actions/photos";

export const defaultState = false;

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return action.photos;
    default:
      return state;
  }
};
