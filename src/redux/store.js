import { configureStore } from "@reduxjs/toolkit";
import { formDataReducer } from "./formDatas/formdataReduser";

export const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});
