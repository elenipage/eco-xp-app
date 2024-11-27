import React from "react";
import { StyleSheet, Text, View, ScrollView, Linking } from "react-native";
import { Button, useTheme, Surface } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PlasticLifeCycle() {
  const { fonts, colors } = useTheme()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      width: "100%",
      alignItems: "center",
      justifyContent: "center"
    },
    header: {
      textAlign: "center",
      fontSize: 22,
      letterSpacing: 1.4,
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
      marginBottom: 10,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 10,
    },
    image: {
      width: "100%",
      height: 200,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "#91E228",
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Surface elevation={2}
              style={{
                height: "95%",
                width: "95%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                padding: 20,
                margin: 10,
              }}>
          <Text style={styles.header}>Life Cycle of a Plastic Bottle</Text>
          <Text style={styles.body}>
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
          {/* <Image source={require('../../assets/plastic-bottle-lifecycle.jpg')} style={styles.image}/> */}
          <Button mode="contained-tonal" onPress={() => {
              Linking.openURL(
                "https://www.rts.com/blog/the-life-cycle-of-a-plastic-water-bottle/"
              );
            }}>Learn more</Button>
          
        </Surface>
      </ScrollView>
    </SafeAreaView>
  );
}


