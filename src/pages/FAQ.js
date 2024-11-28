import { Text, View, ScrollView } from "react-native";
import { FAQCard } from "../components/HelpSectionFAQ";
import BaseLayout from "../components/BaseLayout";

export function FAQ() {

  return (
    <ScrollView>
      <BaseLayout>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1A3151" }}>
          FAQ
        </Text>
      
          <FAQCard />
        
      </BaseLayout>
    </ScrollView>
  );
}
