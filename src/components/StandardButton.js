import React from "react";
import { Button, Text } from "react-native-paper";

function StandardButton({ buttonText, tapFunction }) {
  return (
    <Button
      mode="contained-tonal"
      style={{
        // height: 60,
        width: "100%",
        borderRadius: 30,
        marginBottom:10
      }}
      contentStyle={{
        height: 60,
        width: "100%",
        // justifyContent: "center",
      }}
      onPress={tapFunction}
    >
      <Text
        style={{
          fontSize: 16,
          width: "100%",
          textAlign: "center",
        }}
      >
        {buttonText}
      </Text>
    </Button>
  );
}

export default StandardButton;
