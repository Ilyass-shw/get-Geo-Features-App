import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

import { ResultTitle, ErrorMSg } from "./ResultsStyles";
import FeatureCard from "../featureCard/FeatureCard";

import getError from "../geoJsonFeaturesSlice/selectors/getError";
import getFeatures from "../geoJsonFeaturesSlice/selectors/getFeatures";
import getFetchStatus from "../geoJsonFeaturesSlice/selectors/getFetchStatus";

const Results = () => {
  const geoFeatures = useSelector(getFeatures);
  const fetchStatus = useSelector(getFetchStatus);
  const error = useSelector(getError);
  return (
    <>
      <ResultTitle fetchStatus={fetchStatus === "pending"} err={error}>
        Geo Features({fetchStatus === "fullfiled" && geoFeatures[0].length}):
      </ResultTitle>

      {(fetchStatus === "fullfiled" &&
        geoFeatures[0].map((item) => (
          <FeatureCard feature={item} key={uuidv4()} />
        ))) ||
        (!(fetchStatus === "pending") && <ErrorMSg>{error}</ErrorMSg>)}
    </>
  );
};

export default Results;
