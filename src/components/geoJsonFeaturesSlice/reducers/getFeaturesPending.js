const getFeaturesPending = (state) => {
  state.fetchStatus = "pending";
  state.error = "";
  state.geoFeatures = [];
};

export default getFeaturesPending;
