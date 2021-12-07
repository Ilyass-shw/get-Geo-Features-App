import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import GeoboxInput from "../geoboxInput/GeoboxInput";
import {
  getGeoJsonFeatures,
  updateBounds,
} from "../geoJsonFeaturesSlice/geoJsonFeaturesSlice";
import getBounds from "../geoJsonFeaturesSlice/selectors/getBounds";
import getFetchStatus from "../geoJsonFeaturesSlice/selectors/getFetchStatus";
import {
  Form,
  Inputs,
  FirstPoint,
  SecondPoint,
  SubmitBtn,
} from "./GeoBoxFormStyles";

const GeoBoxForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const bounds = useSelector(getBounds);
  const fetchStatus = useSelector(getFetchStatus);
  useEffect(() => {
    setValue("left", bounds.left);
    setValue("right", bounds.right);
    setValue("bottom", bounds.bottom);
    setValue("top", bounds.top);
  }, [setValue, bounds]);
  const onSubmit = (bounds) => {
    dispatch(
      updateBounds({
        left: parseFloat(bounds.left),
        bottom: parseFloat(bounds.bottom),
        right: parseFloat(bounds.right),
        top: parseFloat(bounds.top),
      })
    );
    dispatch(getGeoJsonFeatures());
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Inputs>
        <FirstPoint>
          <GeoboxInput
            register={register}
            errors={errors}
            name={"left"}
            Min={-180}
            Max={180}
          />

          <GeoboxInput
            register={register}
            errors={errors}
            name={"bottom"}
            Min={-90}
            Max={90}
          />
        </FirstPoint>

        <SecondPoint>
          <GeoboxInput
            register={register}
            errors={errors}
            name={"right"}
            Min={-180}
            Max={180}
          />
          <GeoboxInput
            register={register}
            errors={errors}
            name={"top"}
            Min={-90}
            Max={90}
          />
        </SecondPoint>
      </Inputs>
      <SubmitBtn disabled={fetchStatus === "pending"} type="submit">
        {fetchStatus === "pending" ? "Loading..." : 'Submit'}
      </SubmitBtn>
    </Form>
  );
};

export default GeoBoxForm;
