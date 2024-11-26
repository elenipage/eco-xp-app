import { View, Platform, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";

function BaseLayout(props) {
  const insets = useSafeAreaInsets();
  const { children } = props;
  const { colors, fonts } = useTheme()
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.background,
        // height:"100%",
        paddingLeft: 20,
        paddingRight: 20,
        // marginHorizontal: 20,
        // marginVertical: Platform.OS === "ios" ? insets.top : 20,
        // paddingTop: Platform.OS === "ios" ? insets.top : 20,
        // paddingBottom: Platform.OS === "ios" ? insets.bottom : 20,
      }}
    >
      {children}
    </View>
  );
}

export default BaseLayout;
