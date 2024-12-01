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
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      {children}
    </View>
  );
}

export default BaseLayout;
