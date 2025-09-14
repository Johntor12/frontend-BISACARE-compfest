<<<<<<< HEAD
// // AppNavigator.tsx
// import ClaimDetailScreen from "@/app/(tabs)/claim-detail";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator();

// export default function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="ClaimDetail" component={ClaimDetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
=======
import { useAuth } from "@/app/context/AuthContext";
import LoginScreen from "@/app/login";
import HomeScreen from "@/app/screen/home-screen"; // pastikan path benar
import RegisterScreen from "@/app/register"; 
import SplashScreen from "@/app/splash";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
  );
};

export default AppNavigator;
>>>>>>> 5a203208901fefdc10114716683351b844db2323
