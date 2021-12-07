import store from "../../store";
import { render, screen, waitFor } from "@testing-library/react";
import GeoBoxForm from "./GeoBoxForm";
import { Provider } from "react-redux";
import { updateBounds } from "../geoJsonFeaturesSlice/geoJsonFeaturesSlice";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("GeoBoxForm", () => {
  it("should render", () => {
    render(
      <Provider store={store}>
        <GeoBoxForm />
      </Provider>
    );
  });
  it("should match snapshot", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <GeoBoxForm />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have input (bound) values linked to those of store", async () => {
    render(
      <Provider store={store}>
        <GeoBoxForm />
      </Provider>
    );
    const { left, bottom, right, top } =
      store.getState().geoJsonFeatures.bounds;
    expect(screen.getByTestId("left")).toHaveValue(left);
    expect(screen.getByTestId("right")).toHaveValue(right);
    expect(screen.getByTestId("top")).toHaveValue(top);
    expect(screen.getByTestId("bottom")).toHaveValue(bottom);

    store.dispatch(updateBounds({ left: 4, bottom: 9, right: 5, top: 2 }));

    await waitFor(() => {
      expect(screen.getByTestId("left")).toHaveValue(4);
      expect(screen.getByTestId("right")).toHaveValue(5);
      expect(screen.getByTestId("top")).toHaveValue(2);
      expect(screen.getByTestId("bottom")).toHaveValue(9);
    });
  });

  it("should submit correct data to the store", async () => {
    render(
      <Provider store={store}>
        <GeoBoxForm />
      </Provider>
    );

    act(() => {
      userEvent.type(screen.getByTestId("left"), "8");
      userEvent.type(screen.getByTestId("bottom"), "7");
      userEvent.type(screen.getByTestId("right"), "6");
      userEvent.type(screen.getByTestId("top"), "9");
    });

    await waitFor(() => {
      expect(screen.getByTestId("left")).toHaveValue(8);
      expect(screen.getByTestId("right")).toHaveValue(6);
      expect(screen.getByTestId("top")).toHaveValue(9);
      expect(screen.getByTestId("bottom")).toHaveValue(7);
    });

    act(() => {
      userEvent.click(screen.getByRole("button"));
    });

    await waitFor(() => {
      expect(store.getState().geoJsonFeatures.bounds.left).toStrictEqual(8);
      expect(store.getState().geoJsonFeatures.bounds.bottom).toStrictEqual(7);
      expect(store.getState().geoJsonFeatures.bounds.right).toStrictEqual(6);
      expect(store.getState().geoJsonFeatures.bounds.top).toStrictEqual(9);
    });
  });
});
