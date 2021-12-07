const updateBoundsReducer = (state, action) => {
  state.bounds = action.payload;
};
export default updateBoundsReducer;
