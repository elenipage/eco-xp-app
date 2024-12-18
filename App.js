import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { PaperProvider } from "react-native-paper"
import RootStack from "./src/navigation/Stack"
import { XpProvider } from "./src/context/Xp-context"
import { UserProvider } from "./src/context/user-context"
import { LoadingProvider } from "./src/context/Loading-context";
import { appTheme } from "./src/styles/theme"


export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={appTheme}>
        <LoadingProvider>
          <UserProvider>
            <XpProvider>
              <NavigationContainer>
                <RootStack />
              </NavigationContainer>
            </XpProvider>
          </UserProvider>
        </LoadingProvider>
      </PaperProvider>
    </SafeAreaProvider>
  )
}
