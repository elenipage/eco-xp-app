import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SectionList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function PlasticLifeCycle() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    // <ImageBackground
    //   source={require("../../assets/recycling-infographic.png")}
    //   style={styles.background}
    //   resizeMode="cover"
    // </ImageBackground>

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View>
          <Text style={styles.header}>Life Cycle of a Plastic Bottle</Text>
          <Text style={styles.body}>
            The life cycle of a plastic bottle typically begins with the
            extraction of raw materials like crude oil and natural gas, which
            are refined into petrochemicals. These chemicals are processed into
            plastic polymers, such as polyethylene terephthalate (PET), used to
            manufacture bottles. {"\n\n"}Once produced, plastic bottles are
            filled with beverages and distributed globally. After use, the fate
            of a plastic bottle varies. Ideally, it is recycled, shredded into
            flakes, melted, and reformed into new products, such as clothing
            fibers or new bottles. However, many bottles end up in landfills or
            as litter due to improper disposal.{"\n\n"}In landfills, plastic
            bottles can take hundreds of years to decompose, releasing harmful
            microplastics and chemicals into the environment. If incinerated,
            they emit toxic gases, contributing to air pollution. Bottles that
            reach waterways often harm marine life, as animals may ingest or
            become entangled in the debris. {"\n\n"}Efforts to reduce plastic
            bottle waste include increasing recycling rates, using biodegradable
            alternatives, and promoting reusable containers. While recycling and
            innovations improve, reducing single-use plastics remains essential
            for minimizing environmental impact.
          </Text>
        </View>
      </ScrollView>

      {/* <Image
        style={styles.image}
        source={require("../../assets/recycling-infographic.png")}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F0F8E2",
  },
  // image: {
  //   width: "100%",
  //   height: 200,
  // },
  scrollContainer: {
    padding: 10,
    marginBottom: 20,
  },

  header: {
    textAlign: "center",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "Roboto_700Bold",
    color: "#228B22",
    textAlign: "center",
    textShadowColor: "#A9A9A9",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1.2,
  },

  body: {
    fontSize: 16,
    marginBottom: 15,
    fontFamily: "Roboto_400Regular",
    color: "#333333",
    lineHeight: 24,
  },

  // // NOT WORKING: IMG DOESNT DISPLAY (PATH IS CORRECT!)
  // background: {
  //   flex: 1,
  //   width: "100%",
  //   height: "100%",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});
