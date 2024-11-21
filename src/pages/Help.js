import { Image, ScrollView, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
import StandardButton from "../components/StandardButton";
import ButtonContainer from "../components/ButtonContainer";
import BaseLayout from "../components/BaseLayout";

export function Help() {
  // const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <ScrollView>
      {/* <View
        style={{
          // flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          // height:"100%",
          margin: 20,
          paddingTop: Platform.OS === "ios" ? insets.top : 0,
          paddingBottom: Platform.OS === "ios" ? insets.bottom : 0,
        }}
      > */}
      <BaseLayout>
        <Image
          style={{
            width: 200,
            height: 200,
            marginBottom: 20,
          }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/4718/4718001.png",
          }}
        />
        <ButtonContainer>
          {/* Add the above surface to its own ButtonContainer component? */}
          <StandardButton
            buttonText={"Info"}
            tapFunction={() => {
              navigation.navigate("Drop Down Menu Info");
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
        </ButtonContainer>
      </BaseLayout>
      {/* </View> */}
    </ScrollView>
  );
}
