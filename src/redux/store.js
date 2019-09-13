import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  img: "",
  mortgage: 0,
  rent: 0
};

export const STEP_ONE = "STEP_ONE";
export const STEP_TWO = "STEP_TWO";
export const STEP_THREE = "STEP_THREE";
export const STEP_FOUR = "STEP_FOUR";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  const { name, address, city, state, zip, img, mortgage, rent}
  case STEP_ONE: {
    return {
      ...state,
      
    }
  }
  default:
    return state;
}

export default createStore(reducer);
