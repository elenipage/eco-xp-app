import { Image, ScrollView, Linking, Dimensions, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StandardButton from "../components/StandardButton";
import ButtonContainer from "../components/ButtonContainer";
import { useTheme } from "react-native-paper";

export function Help() {

  const navigation = useNavigation();
  const { colors } = useTheme()

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{flex: 1,
        alignItems: "center",
        backgroundColor: colors.background,
        paddingHorizontal: 20,
        paddingTop: 20}}>
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
        </ButtonContainer>
      </View>
    </ScrollView>
  );
}

const { height: screenHeight } = Dimensions.get("window");
const imageHeight = screenHeight * 0.2;

const styles = StyleSheet.create({
  imageStyling: {
    width: "100%",
    height: imageHeight,
    resizeMode: "contain",
  },
});
