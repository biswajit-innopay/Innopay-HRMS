import React from "react";
import { Button } from "@mui/material";
const FormButton = (props) => {
  const {
    type = "submit",
    variant = "contained",
    color = "primary",
    size = "large",
    fullWidth = true,
    value="Default",
    loginDisabled=""
  } = props;
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      disabled={loginDisabled}
    >
      {value}
    </Button>
  );
};

export default FormButton;
