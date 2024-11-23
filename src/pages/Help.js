import { Image, ScrollView, Linking, Dimensions, Platform, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
import StandardButton from "../components/StandardButton";
import ButtonContainer from "../components/ButtonContainer";
import BaseLayout from "../components/BaseLayout";



export function Help() {
  // const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <BaseLayout>
        <Image
          style={styles.imageStyling}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/4718/4718001.png",
          }}
        />
        
        <ButtonContainer>
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

const { height: screenHeight } = Dimensions.get("window");
const imageHeight = screenHeight * 0.2;

const styles = StyleSheet.create({
  imageStyling: {
    width: "100%",
    height: imageHeight,
    // marginBottom: 20,
    resizeMode: "contain",
  },
});
