import React from "react";
import { SegmentedButtons, useTheme } from "react-native-paper";

function SegButtons(props) {
  const { value, setValue } = props
  const { colors } = useTheme()
  return (
    <SegmentedButtons
    style={{backgroundColor: colors.background, borderRadius: 100}}
      value={value}
      onValueChange={setValue}
      buttons={[
        {
          value: "friends",
          label: "Friends",
          icon: "account-group",
        },
        {
          value: "postcode",
          label: "Postcode",
          icon: "home-group",
        },
        {
          value: "city",
          label: "City",
          icon: "city-variant",
        },
      ]}
    />
  );
}

export default SegButtons;
