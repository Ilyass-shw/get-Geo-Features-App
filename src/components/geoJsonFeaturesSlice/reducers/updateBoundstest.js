import store from "../../../store";
import { initialState } from "../geoJsonFeaturesSlice";
import updateBounds from "./getFeaturesFullfiled";

describe("updatedBounds", () => {
  it("should handle updating bounds", () => {

    expect(store.getState().geoJsonFeatures.bounds).toStrictEqual(
      initialState.bounds
    );
    console.log('ha')

    store.dispatch(updateBounds({ left: 1, bottom: 4, right: 5, top: 7 }));

    expect(store.getState().geoJsonFeatures.bounds.left).toStrictEqual(1);
    expect(store.getState().geoJsonFeatures.bounds.bottom).toStrictEqual(4);
    expect(store.getState().geoJsonFeatures.bounds.right).toStrictEqual(5);
    expect(store.getState().geoJsonFeatures.bounds.top).toStrictEqual(7);
  });
});
