<<<<<<< HEAD
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "../(tabs)";
// import ClaimDetailScreen from "./claim-detail";

// const Stack = createStackNavigator();

// export default function ScreenLayout() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="ClaimDetail" component={ClaimDetailScreen} />
//     </Stack.Navigator>
//   );
// }
=======
import { Stack } from "expo-router";

export default function ScreenLayout() {
  return (
    <Stack screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Home" options={{headerShown: false}} />
      <Stack.Screen name="claim-detail" options={{headerShown: false}}  />
      <Stack.Screen name="input-keluhan" options={{headerShown: false}} />
      <Stack.Screen name="spot-scan" />
    </Stack>
  );
}
>>>>>>> 5a203208901fefdc10114716683351b844db2323
