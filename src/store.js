import { configureStore } from "@reduxjs/toolkit";
import geoJsonFeaturesSlice from "./components/geoJsonFeaturesSlice/geoJsonFeaturesSlice";

const store = configureStore({
  reducer: {
    geoJsonFeatures: geoJsonFeaturesSlice,
  },
});
export default store;
