import { Image, View, ScrollView, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import StandardButton from "../components/StandardButton";
import { Surface } from "react-native-paper";

export function Help() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <ScrollView
    // style={{
    //   flex: 1,
    //   alignItems: "center",
    //   justifyContent: "space-between",
    //   margin: 20,
    //   paddingTop: insets.top,
    //   paddingBottom: insets.bottom,
    //   paddingLeft: insets.left,
    //   paddingRight: insets.right,
    // }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 20,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <Image
          style={{
            width: 200,
            height: 200,
            marginBottom: 20,
          }}
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/4718/4718001.png" }}
        />
        <Surface
          elevation={2}
          style={{
            width: "100%",
            gap: 10,
            borderRadius: 20,
            padding: 20,
          }}
        >
          {/* Add the above surface to its own ButtonContainer component? */}
          <StandardButton
            buttonText={"Info"}
            tapFunction={() => {
              navigation.navigate("Info");
            }}
          />

          <StandardButton
            buttonText={"FAQ"}
            tapFunction={() => {
              navigation.navigate("FAQ");
            }}
          />

          <StandardButton
            buttonText={"Report a missed bin collection"}
            tapFunction={() => {
              Linking.openURL(
                "https://www.leeds.gov.uk/residents/bins-and-recycling/your-bins/bin-collection-problems"
              );
            }}
          />

          <StandardButton
            buttonText={"Order a new bin"}
            tapFunction={() => {
              Linking.openURL(
                "https://www.leeds.gov.uk/residents/bins-and-recycling/new-or-replacement-bin"
              );
            }}
          />

          <StandardButton
            buttonText={"Test"}
            tapFunction={() => {
              Linking.openURL(
                "https://www.leeds.gov.uk/residents/bins-and-recycling/new-or-replacement-bin"
              );
            }}
          />
        </Surface>
      </View>
    </ScrollView>
  );
}
