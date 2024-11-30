const INITIAL_STATE = {
  formData: {},
  isModalOpen: false,
  isLoaderVisible: false,
};

export function formDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "formData/addData":
      return {
        ...state,
        formData: action.payload,
      };
    case "formData/openModal":
      return {
        ...state,
        isModalOpen: action.payload,
      };

    default:
      return state;
  }
}

export function registerOnu(payload) {
  return {
    type: "formData/addData",
    payload: payload,
  };
}

export function showModal(payload) {
  return {
    type: "formData/openModal",
    payload,
  };
}
