import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import RootStack from "./src/navigation/Stack";
import { XpProvider } from "./src/context/Xp-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <XpProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </XpProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

// Find out how to change android status and navbar colours to match app colours