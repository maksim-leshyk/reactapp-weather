import { AppActionTypes } from "../action-types";
import { ActionsType } from "../actions/app-actions";

let initialState = {
  isVisuallyImpaired: false,
};

type InitialStateType = typeof initialState;

const appReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case AppActionTypes.TOGGLE_VISUALLY_IMPAIRED:
      return {
        ...state,
        isVisuallyImpaired: !state.isVisuallyImpaired,
      };
    default:
      return state;
  }
};

export default appReducer;
