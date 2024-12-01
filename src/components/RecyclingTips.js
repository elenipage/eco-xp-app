import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Surface, card } from "react-native-paper";
import Swiper from "react-native-swiper";
import { useTheme } from "react-native-paper";

function RecyclingTipsCarousel() {
  const { colors, fonts } = useTheme()
  const recyclingTips = [
    "Rinse out plastic bottles, cans, and containers to remove food residue before recycling.",
    "Flatten cardboard boxes to save space in your recycling bin.",
    "Check local council guidelines for what can and cannot be recycled in your area.",
    "Avoid recycling greasy or food-soiled items like pizza boxes.",
    "Recycle paper and card but avoid adding shredded paper, as it may not be accepted in your area.",
    "Take soft plastics like bread bags and crisp packets to supermarket recycling points.",
    "Recycle empty aerosol cans, but do not crush them.",
    "Use local recycling points for items like batteries, lightbulbs, and electronics.",
    "Compost garden and kitchen waste at home or use a local food waste collection service.",
    "Ensure all items placed in the recycling bin are loose, not in plastic bags.",
    "Check for the recycling symbol on packaging and follow instructions (e.g., 'widely recycled').",
    "Donate or sell usable items like clothes, furniture, and electronics instead of throwing them away.",
    "Recycle old mobile phones and gadgets through retailer schemes or charity collections.",
    "Avoid 'wishcycling'—placing non-recyclable items in the recycling bin hoping they’ll be recycled.",
    "Use local textile banks or charity shops to recycle worn-out clothes.",
    "Recycle aluminium foil by scrunching it into a ball (larger than a tennis ball) to ensure it’s processed.",
    "Separate lids from tin cans but place both items in the recycling bin.",
    "Purchase products with minimal or recyclable packaging to reduce waste.",
    "Use refill stations for cleaning products, shampoo, and food staples to cut down on single-use plastics.",
    "Find out if your council offers a recycling service for Tetra Paks (e.g., juice or milk cartons).",
  ];

  return (
      <Swiper
        showsButtons={false}
        loop={true}
        autoplay
        autoplayTimeout={5}
        paginationStyle={{
          display: "none",
        }}
        height={"100%"}
      >
        {recyclingTips.map((tip, index) => (
          <Surface
            key={index}
            style={{
              margin: 10,
              padding: 20,
              height: 160,
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <Text style={{fontSize: fonts.titleMedium.fontSize, textAlign: "center"}}>{tip}</Text>
          </Surface>
        ))}
      </Swiper>
  );
}

export default RecyclingTipsCarousel;
