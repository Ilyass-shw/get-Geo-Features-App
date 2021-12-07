import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import getFeaturesFullfiled from "./reducers/getFeaturesFullfiled";
import getFeaturesPending from "./reducers/getFeaturesPending";
import getFeaturesRejected from "./reducers/getFeaturesRejected";

import osmtogeojson from "osmtogeojson";
import updateBoundsReducer from "./reducers/updateBounds";

export const getGeoJsonFeatures = createAsyncThunk(
  "getGeoJsonFeatures",
  async (_, { getState, rejectWithValue }) => {
    const { top, bottom, left, right } = getState().geoJsonFeatures.bounds;
    try {
      const res = await fetch(
        `https://www.openstreetmap.org/api/0.6/map?bbox=${left},${bottom},${right},${top}`
      );
      if (res.ok) {
        // Fetch API doesn't support fetching XML natively, so this is a workaround
        const osmAsString = await res.text();
        const osm = new DOMParser().parseFromString(osmAsString, "text/xml");
        return osmtogeojson(osm);
      } else {
        const failedRes = await res.text();
        return rejectWithValue(failedRes);
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const initialState = {
  fetchStatus: "idle",
  error: "",
  geoFeatures: [],
  bounds: {
    left: 13.424494064947247,
    bottom: 52.5328015158109,
    right: 13.426345982999798,
    top: 52.53344512403046,
  },
};

const geoJsonFeaturesSlice = createSlice({
  name: "geoJsonFeatures",
  initialState,
  reducers: {
    updateBounds: updateBoundsReducer,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getGeoJsonFeatures.pending, getFeaturesPending)
      .addCase(getGeoJsonFeatures.rejected, getFeaturesRejected)
      .addCase(getGeoJsonFeatures.fulfilled, getFeaturesFullfiled),
});

export const { updateBounds } = geoJsonFeaturesSlice.actions;

export default geoJsonFeaturesSlice.reducer;
