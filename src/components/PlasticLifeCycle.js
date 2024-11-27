import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PlasticLifeCycle() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text variant="headlineMedium">Life Cycle of a Plastic Bottle</Text>
          <Text variant="bodySmall">
            The life cycle of a plastic bottle typically begins with the
            extraction of raw materials like crude oil and natural gas, which
            are refined into petrochemicals. These chemicals are processed into
            plastic polymers, such as polyethylene terephthalate (PET), used to
            manufacture bottles. {"\n\n"}
            Once produced, plastic bottles are filled with beverages and
            distributed globally. After use, the fate of a plastic bottle
            varies. Ideally, it is recycled, shredded into flakes, melted, and
            reformed into new products. However, many bottles end up in
            landfills or as litter. {"\n\n"}
            Efforts to reduce plastic bottle waste include increasing recycling
            rates, using biodegradable alternatives, and promoting reusable
            containers.
          </Text>
          <Image
            style={styles.image}
            source={require("../../assets/plastic-bottle-lifecycle.jpg")}
          />
          <TouchableOpacity style={styles.button}>
            <Text variant="bodySmall">Learn More</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#B3F9D4",
  },
  scrollContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#39BCD9",
    shadowColor: "#1A3151",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  header: {
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Roboto_700Bold",
    color: "#1A3151",
    marginBottom: 10,
    letterSpacing: 1.4,
    textShadowColor: "#6DA99A",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  body: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: "#6DA99A",
    lineHeight: 24,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#91E228",
  },
  button: {
    marginTop: 15,
    backgroundColor: "#39BCD9",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#1A3151",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
  },
});
