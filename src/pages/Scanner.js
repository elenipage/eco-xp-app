import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import StandardButton from "../components/StandardButton";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Scanner() {

  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }}>
      <Text>Scan</Text>
      <StandardButton
        buttonText={"Scanned Item"}
        tapFunction={() => navigation.navigate("Item Confirmation")}
        mode="contained-tonal"
      ></StandardButton>
      <StandardButton
        buttonText={"Add New Item"}
        tapFunction={() => navigation.navigate("Add a New Item")}
        mode="contained-tonal"
      ></StandardButton>
    </View>
  );
}

