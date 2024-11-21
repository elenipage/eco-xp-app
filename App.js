import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import RootStack from "./src/navigation/Stack";
import { XpProvider } from "./src/context/Xp-context";
import { LoadingProvider } from "./src/context/Loading-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <LoadingProvider>
          <XpProvider>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </XpProvider>
        </LoadingProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

// Find out how to change android status and navbar colours to match app colours