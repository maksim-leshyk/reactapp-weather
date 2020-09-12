import { AppStateType } from "../redux-store";

export const getVisuallyImpaired = (state: AppStateType) =>
  state.app.isVisuallyImpaired;
