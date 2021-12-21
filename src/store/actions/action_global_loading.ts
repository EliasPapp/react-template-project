import { HIDE_GLOBAL_LOADING, SHOW_GLOBAL_LOADING } from "./action_types";

export const hideGlobalLoading = () => ({
  type: HIDE_GLOBAL_LOADING,
});

export const showGlobalLoading = () => ({
  type: SHOW_GLOBAL_LOADING,
});

