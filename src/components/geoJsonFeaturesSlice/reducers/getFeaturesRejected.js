const getFeaturesRejected = (state, action) => {
  state.fetchStatus = "failed";
  state.error = action.payload;
};

export default getFeaturesRejected;
