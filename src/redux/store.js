import { configureStore } from "@reduxjs/toolkit";
import { formDataReducer } from "./formData/formdataReducer";

export const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});
