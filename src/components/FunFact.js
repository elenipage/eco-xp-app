import React from "react";
import { Text, Surface } from "react-native-paper";

export function FunFact() {
  const recyclingFacts = [
    "Recycling one aluminium can save enough energy to power a TV for three hours.",
    "Glass can be recycled endlessly without losing quality or purity.",
    "Recycling one ton of paper saves 17 trees and 7,000 gallons of water.",
    "Plastic takes up to 500 years to decompose in landfills.",
    "Americans throw away 25 million plastic bottles every hour!",
    "Recycling a single plastic bottle can save enough energy to power a 60-watt light bulb for six hours.",
    "Recycling steel saves 74% of the energy needed to produce it from raw materials.",
    "Composting food scraps reduces waste and produces nutrient-rich soil.",
    "E-waste is the fastest-growing waste stream, yet less than 20% of it is recycled.",
    "Every ton of recycled paper saves about 380 gallons of oil.",
    "Producing recycled aluminum uses 95% less energy than creating it from raw materials.",
    "The first recycling program in the U.S. started in Woodbury, New Jersey, in 1973.",
    "Plastic bags can take up to 1,000 years to decompose in a landfill.",
    "Recycling cardboard only takes 75% of the energy needed to make new cardboard.",
    "Upcycling is a creative form of recycling that turns waste into higher-value items!",
  ];

  const randomNum = Math.floor(Math.random() * recyclingFacts.length);

  return (
    <Surface
    elevation={3}
      style={{
        marginBottom:20,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:20
      }}
    >
      <Text style={{ textAlign: "center", marginBottom:5, fontSize:18 }}>Fun Fact!</Text>
      <Text style={{ textAlign: "center", fontSize:16 }}>{recyclingFacts[randomNum]}</Text>
    </Surface>
  );
}
