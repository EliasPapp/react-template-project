import { HIDE_GLOBAL_LOADING, SHOW_GLOBAL_LOADING } from "../actions/action_types";

const initialState = {
  visible: false,
};

const reducerGlobalLoading = (state = initialState, action: any) => {
  switch (action.type) {
    case HIDE_GLOBAL_LOADING: {
      return {
        ...state,
        visible: false,
      };
    }
    case SHOW_GLOBAL_LOADING: {
      return {
        ...state,
        visible: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducerGlobalLoading;
