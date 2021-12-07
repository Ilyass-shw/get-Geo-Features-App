const getFeaturesFullfiled = (state, action) => {
  state.fetchStatus = "fullfiled";
  state.geoFeatures.push(action.payload.features);
};

export default getFeaturesFullfiled;
