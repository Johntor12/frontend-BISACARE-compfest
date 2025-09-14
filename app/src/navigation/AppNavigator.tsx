import { useAuth } from "@/app/context/AuthContext";
import LoginScreen from "@/app/login";
import RegisterScreen from "@/app/register";
import HomeScreen from "@/app/screen/home-screen"; // pastikan path benar
import SplashScreen from "@/app/splash";
import { createStackNavigator } from "@react-navigation/stack";

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
