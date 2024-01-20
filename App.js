import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigator/Navigation";
import SplashScreen from "./src/screens/SplashScreen";

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
   const splashTimeout = setTimeout(() => {
      setSplashVisible(false);
    }, 300); 

   
    return () => {
      clearTimeout(splashTimeout);
    };
  }, []);

  return (
    <NavigationContainer>
    <HomeStackNavigator />
    </NavigationContainer>
  );
}
