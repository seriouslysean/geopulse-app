import { SET_GEOLOCATION, SET_GEOLOCATION_UNAVAILABLE } from "../actions/geolocation";

export const defaultState = false;

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_GEOLOCATION:
      return action.geolocation;
    case SET_GEOLOCATION_UNAVAILABLE:
      return {
        unavailable: true
      };
    default:
      return state;
  }
};
