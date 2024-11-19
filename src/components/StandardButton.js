import React from "react";
import { Button } from "react-native-paper";

function StandardButton({buttonText, clickFunction}) {
  return <Button mode="contained-tonal"
  onPress={clickFunction}>{buttonText}</Button>;
}

export default StandardButton;
