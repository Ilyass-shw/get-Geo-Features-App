import { FormError, Input, Label, InputField } from "./GeoBoxInputStyles";

const GeoboxInput = ({ register, errors, name, Min, Max }) => {
  return (
    <>
      <InputField>
        <Label htmlFor={name}>{name}</Label>
        <Input
          type="number"
          step="any"
          {...register(name, {
            required: "This is required.",
            min: {
              value: Min,
              message: `choose a number no less than ${Min}`,
            },
            max: {
              value: Max,
              message: `choose a number no more than ${Max}`,
            },
          })}
          Error={errors[name]}
          data-testid={name}
        />
      </InputField>
      <FormError>{errors[name] && errors[name].message}</FormError>
    </>
  );
};

export default GeoboxInput;
