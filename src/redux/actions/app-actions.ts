import { AppActionTypes } from "../action-types";
import { InferActionsTypes } from "../redux-store";

export const actions = {
  toggleVisuallyImpaired: () =>
    ({ type: AppActionTypes.TOGGLE_VISUALLY_IMPAIRED } as const),
};

export type ActionsType = InferActionsTypes<typeof actions>;
