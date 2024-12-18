import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Surface, useTheme } from "react-native-paper";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

function FAQCard() {
  const [isPressed, setIsPressed] = useState(false);
  const { colors, fonts } = useTheme()

  const recyclingFAQs = [
    {
      Question: "How do I find out what I can put in my home recycling bins?",
      Answer:
        "To see a list of materials that your local authority collects as part of their recycling scheme, simply enter your postcode into our Recycling Locator tool. It will also tell you which bin or bag to place each item in.",
    },
    {
      Question: "How can I find out how to recycle a specific item?",
      Answer:
        "Our Recycle an Item pages cover hundreds of items and give details on whether you can recycle them at home or at out-of-home drop-off points.",
    },
    {
      Question: "How do I recycle a bulky item I cannot transport?",
      Answer:
        "Check with your local authority - they should be able to arrange a bulky waste collection for you. You can find their contact details by entering your postcode into our Recycling Locator tool.",
    },
    {
      Question: "My recycling has not been collected, what do I do?",
      Answer:
        "You will need to raise this with your local authority. You can find their contact details by entering your postcode on our Recycling Locator tool.",
    },
    {
      Question:
        "The information about my kerbside recycling collection is incorrect on the Recycling Locator, how can I report this?",
      Answer:
        "You will need to ask your local authority to update this information. They manage their recycling scheme data via WRAP's LA Portal tool which then pushes the information to our Recycling Locator tool. To find the contact details for your local authority, enter your postcode on the Recycling Locator.",
    },
    {
      Question:
        "The information about a recycling bank or Recycling Centre on the Recycling Locator is incorrect, how can I report this?",
      Answer:
        "The data for Recycling Centres (HWRCs) and 'bring banks' is supplied by UK local authorities to Valpak via the Recycle More website which then feeds into our Recycling Locator tool. If you spot incorrect information about a bring bank or Recycling Centre, please email the Recycle More team.",
    },
    {
      Question: "Can I add the Recycling Locator tool to my website?",
      Answer:
        "The Recycle Now Recycling Locator widget is available for third party website use under licence. The widget can be embedded on one or more pages using a simple piece of code.",
    },
    {
      Question:
        "How can I add my organisation as a location on the Recycling Locator?",
      Answer:
        "We are able to accept applications from other organisations who have recycling or re-use locations available that are open to the public. For more details, please email: PartnerEnquiries@wrap.org.uk.",
    },
    {
      Question:
        "I work for a local authority and need to update our kerbside collection information, how can I do so?",
      Answer:
        "The kerbside data displayed on the Recycling Locator is supplied to WRAP by UK local authorities on an annual basis. Each local authority has a named person responsible for updating their scheme data using WRAP's LA Portal tool. Scheme data can be updated by local authorities at any time to reflect changes in services - these changes will then update the Recycling Locator. If you work for a local authority and are unsure who your named contact is to provide this information, please email LA-recycling@wrap.org.uk.",
    },
  ];

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  const styles = StyleSheet.create({
    cardContainer: {
      marginBottom: 15,
      borderRadius: 20,
      padding: 15,
      width: "90%",
      alignSelf: "center",
      backgroundColor: colors.surfaceVariant,
    },
  
    card: {
      padding: 15,
      borderRadius: 12,
      backgroundColor: colors.background,
    },
  
    question: {
      fontSize: fonts.headlineSmall.fontSize,
      fontFamily: "Roboto_700Bold",
      color: "#2e3d49",
      marginBottom: 15,
      backgroundColor: colors.background,
      color: "#1A3151",
    },
  
    answer: {
      fontSize: 16,
  
      fontFamily: "Roboto_400Regular",
      color: "#4a4a4a",
      marginTop: 5,
      backgroundColor: colors.background,
    },
  
    pressedCard: {
      backgroundColor: "#e8f7ff",
      transform: [{ scale: 0.95 }],
      elevation: 10,
    },
  
    pressedText: {
      color: "#2e3d49",
    },
  });
  
  return (
    recyclingFAQs.map((object, index) => {
      return <TouchableOpacity
        key={index}
        style={[styles.cardContainer, isPressed && styles.pressedCard]}
      >
        <Surface
          elevation={3}
          style={[styles.card, isPressed && styles.pressedCard]}
        >
          <Text style={[styles.question, isPressed && styles.pressedText]}>
            {object.Question}
          </Text>
          <Text style={[styles.answer, isPressed && styles.pressedText]}>
            {object.Answer}
          </Text>
        </Surface>
      </TouchableOpacity>
    })
  );
}

export { FAQCard };
