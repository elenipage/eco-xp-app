import { Text, View, ScrollView } from "react-native";
import { FAQCard } from "../components/HelpSectionFAQ";
import BaseLayout from "../components/BaseLayout";

export function FAQ() {

  return (
    <ScrollView>
      <BaseLayout>
          <FAQCard />
      </BaseLayout>
    </ScrollView>
  );
}
