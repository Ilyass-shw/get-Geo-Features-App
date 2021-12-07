import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { GlobalStyle, MapStyledContainer, Constructions } from "./AppStyles";

import { getGeoJsonFeatures } from "../components/geoJsonFeaturesSlice/geoJsonFeaturesSlice";
import GeoBoxForm from "../components/geoBoxForm/GeoBoxForm";
import Map from "../components/map/Map";
import Results from "../components/results/Results";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGeoJsonFeatures());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <MapStyledContainer scrollWheelZoom={false}>
        <Map />
      </MapStyledContainer>
      <Constructions>Please select an area using the map (ctrl+ click)<br/>or<br/> Enter box coordinates</Constructions>
      <GeoBoxForm />
      <Results />
    </>
  );
};

export default App;
