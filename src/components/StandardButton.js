import React from "react";
import { Button } from "react-native-paper";

function StandardButton({buttonText, tapFunction}) {
  return <Button mode="contained-tonal"
  onPress={tapFunction}>{buttonText}</Button>;
}

export default StandardButton;
