import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import RootStack from "./src/navigation/Stack";



export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <RootStack/>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
