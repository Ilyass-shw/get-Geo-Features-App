import { render } from "@testing-library/react";
import FeatureCard from "./FeatureCard";

describe("FeaturesCard", () => {
  const feature = {
    type: "Feature",
    id: "node/7335291821",
    properties: {
      timestamp: "2020-03-27T15:43:07Z",
      version: "1",
      changeset: "82722505",
      user: "gislars",
      uid: "108133",
      amenity: "icycle_parking",
      bicycle_parking: "stands",
      capacity: "4",
      covered: "no",
      id: "node/7335291821",
    },
    geometry: {
      type: "Point",
      coordinates: ["13.424746", "52.5333751"],
    },
  };

  it("should render", () => {
    render(<FeatureCard feature={feature} />);
  });
  it("should match snapshot", () => {
    const { asFragment } = render(<FeatureCard feature={feature} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
