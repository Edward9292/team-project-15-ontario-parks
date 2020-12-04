import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";

import SettingPage from "./pages/SettingPage";
import MapPage from "./pages/MapPage";
import DetailsPage from "./pages/DetailsPage";
import AccessibilityPage from "./pages/AccessbilityPage";
import * as Font from "expo-font";
import CategoriesScreen from "./pages/CategoriesPages";
import { AttractionContextProvider } from "./contexts/AttractionContext";
import { AccessibilityContextProvider } from "./contexts/AccessibilityContext";
import { LocationContextProvider } from "./contexts/LocationContext";
import { AudioContextProvider } from "./contexts/AudioContext";
import { CategoryContextProvider } from "./contexts/CategoryContext";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const Stack = createStackNavigator();

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <SafeAreaProvider> 
      <LocationContextProvider>
        <AttractionContextProvider>
          <AccessibilityContextProvider>
            <AudioContextProvider>
              <NavigationContainer>
                <Stack.Navigator
                  initialRouteName="Categories"
                  screenOptions={{
                    headerShown: false,
                  }}
                >
                  <Stack.Screen name="Categories" component={CategoriesScreen}  />
                  <Stack.Screen name="Map" component={MapPage} />
                  <Stack.Screen name="Setting" component={SettingPage} />
                  <Stack.Screen
                    name="Details"
                    component={DetailsPage}
                    options={{ headerShown: true }}
                  />
                  <Stack.Screen name="Accessibility" component={AccessibilityPage} />
                </Stack.Navigator>
              </NavigationContainer>                 
            </AudioContextProvider>
          </AccessibilityContextProvider>          
        </AttractionContextProvider>        
      </LocationContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
