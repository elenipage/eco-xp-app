import React from "react";
import { Button, Text } from "react-native-paper";

function StandardButton({buttonText, tapFunction}) {
  return <Button mode="contained-tonal"
  style={{width:"100%", height:50, marginTop:5, marginBottom:5, alignItems: "center", justifyContent:"center"
  }}
  onPress={tapFunction}><Text style={{fontSize:18}}>{buttonText}</Text></Button>;
}

export default StandardButton;
