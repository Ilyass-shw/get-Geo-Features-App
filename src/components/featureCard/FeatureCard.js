import LazyLoad from "react-lazyload";
import ReactJson from "react-json-view";
import { Card } from "./FeatureCardStyles";

const FeatureCard = ({ feature }) => {
  return (
    <LazyLoad height={30} offset={150}>
      <Card>
        <ReactJson src={feature} />
      </Card>
    </LazyLoad>
  );
};

export default FeatureCard;
