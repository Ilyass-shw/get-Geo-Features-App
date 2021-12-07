import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useMap } from "react-leaflet";
import L from "leaflet";
import {
  updateBounds,
  getGeoJsonFeatures,
} from "../geoJsonFeaturesSlice/geoJsonFeaturesSlice";

const BoxSelect = () => {
  const map = useMap();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!map.selectArea) return;

    map.selectArea.enable();

    map.on("areaselected", (e) => {
      const fisrtBoxCorner = e.bounds.getNorthEast();
      const secondBoxCorner = e.bounds.getSouthWest();

      dispatch(
        updateBounds({
          left: secondBoxCorner.lng,
          bottom: secondBoxCorner.lat,
          right: fisrtBoxCorner.lng,
          top: fisrtBoxCorner.lat,
        })
      );
      dispatch(getGeoJsonFeatures());
      L.rectangle(e.bounds, { color: "blue", weight: 1 }).addTo(map);
    });

    // restrict selection area like this:
    const bounds = map.getBounds().pad(-0.25); // save current map bounds as restriction area
    // check restricted area on start and move
    map.selectArea.setValidate((layerPoint) => {
      return bounds.contains(this._map.layerPointToLatLng(layerPoint));
    });

    // switch it off
    map.selectArea.setValidate();
  }, [dispatch, map]);

  return null;
};
export default BoxSelect;
