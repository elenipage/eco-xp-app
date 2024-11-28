import React from "react";
import { StyleSheet, Text, ScrollView, Linking, View } from "react-native";
import { Button, useTheme, Surface } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PlasticLifeCycle() {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      paddingTop: -30,
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
      marginBottom: 20,
    },
    button: {
      marginTop: 10,
      backgroundColor: colors.primary,
      paddingVertical: 12,
      borderRadius: 10,
      width: "100%",
      alignItems: "center",
    },
    buttonText: {
      color: colors.onPrimary,
      fontSize: 16,
      fontWeight: "bold",
    },
    surface: {
      elevation: 2,
      borderRadius: 20,
      padding: 20,
      marginTop: 20,
      width: "100%",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Surface style={styles.surface}>
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

          <Button
            mode="contained"
            style={styles.button}
            labelStyle={styles.buttonText}
            onPress={() => {
              Linking.openURL(
                "https://www.rts.com/blog/the-life-cycle-of-a-plastic-water-bottle/"
              );
            }}
          >
            Learn more
          </Button>
        </Surface>
      </ScrollView>
    </SafeAreaView>
  );
}
