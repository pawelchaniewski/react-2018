import { ACTION_TYPES } from "../actions";

const counterReducer = (counter = 0, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREASE:
      return counter + 1;
    case ACTION_TYPES.DECREASE:
      return counter - 1;
    default:
      return counter;
  }
};

export default counterReducer;
