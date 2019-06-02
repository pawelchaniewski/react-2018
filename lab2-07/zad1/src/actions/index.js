export const ACTION_TYPES = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE"
};

export const increaseAsync = () => {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter >= 10) {
      return;
    }
    dispatch(increase());
  };
};

export const decreaseAsync = () => {
  return dispatch => {
    setTimeout(() => dispatch(decrease()), 2000);
  };
};

export const increase = () => ({ type: ACTION_TYPES.INCREASE });
export const decrease = () => ({ type: ACTION_TYPES.DECREASE });
