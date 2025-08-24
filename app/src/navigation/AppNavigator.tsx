import { useAuth } from "@/app/context/AuthContext";
import LoginScreen from "@/app/login";
import HomeScreen from "@/app/screen/home-screen";
import SplashScreen from "@/app/splash";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useAuth();

  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        {!user ? (
            <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
  );
};

export default AppNavigator;
