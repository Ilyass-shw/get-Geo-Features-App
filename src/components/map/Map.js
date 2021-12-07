import { useEffect } from "react";
import { useSelector } from "react-redux";
import "leaflet-area-select";

import { TileLayer, Rectangle, useMap } from "react-leaflet";
import getBounds from "../geoJsonFeaturesSlice/selectors/getBounds";
import BoxSelect from "../boxSelect/BoxSelect";

const Map = () => {
  const map = useMap();

  const { top, bottom, left, right } = useSelector(getBounds);
  const rectangle = [
    [bottom, left],
    [top, right],
  ];
  useEffect(() => {
    map.setView([(bottom + top) / 2, (left + right) / 2]);
  }, [top, bottom, left, right, map]);

  map.fitBounds([
    [left, bottom],
    [right, top],
  ]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <BoxSelect />
      <Rectangle bounds={rectangle} />
    </>
  );
};

export default Map;
