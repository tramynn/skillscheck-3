import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  img: "",
  mortgage: "",
  rent: ""
};

export const STEP_ONE = "STEP_ONE";
export const STEP_TWO = "STEP_TWO";
export const STEP_THREE = "STEP_THREE";
export const CLEAR = "STEP_FOUR";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STEP_ONE: {
      return {
        ...state,
        name: payload.name,
        address: payload.address,
        city: payload.city,
        state: payload.state,
        zip: payload.zip,
        img: payload.img,
        mortgage: payload.mortgage,
        rent: payload.rent
      };
    }
    case CLEAR: {
      return {
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        img: "",
        mortgage: "",
        rent: ""
      };
    }
    default:
      return state;
  }
}

export default createStore(reducer);
