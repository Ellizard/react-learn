import * as actionTypes from "./actionsTypes";

export const saveRsult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  }
}

export const storeResult = (res) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(saveRsult(res))
    }, 2000);
  };
};

export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: resElId
  }
};