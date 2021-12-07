import { render } from "@testing-library/react";
import GeoboxInput from "./GeoboxInput";

describe("FeaturesCard", () => {
  const register = jest.fn();

  it("should render", () => {
    render(
      <GeoboxInput
        register={register}
        errors={{ errors: "bom" }}
        name={"randomName"}
        Min={4}
        Max={7}
      />
    );
  });
  it("should match snapshot", () => {
    const { asFragment } = render(
      <GeoboxInput
        register={register}
        errors={{ errors: "bom" }}
        name={"randomName"}
        Min={4}
        Max={7}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
