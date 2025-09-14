import { Ionicons } from "@expo/vector-icons";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import "react-native-reanimated";
import { AuthProvider, useAuth } from "./context/AuthContext";

import { useColorScheme } from "@/hooks/useColorScheme";

// interface AppHeaderProps {
//   show?: boolean;   // default true
//   username?: string;
// }

type Props = NativeStackHeaderProps & { show?: boolean };

export function AppHeader({ navigation, back, show = true }: Props) {
  const { user, logout } = useAuth();

  if (!show) return null;

  return (
    <View style={styles.header}>
      {back && (
        <TouchableOpacity onPress={navigation.goBack} style={styles.left}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      )}
      <Text style={styles.greeting}>Hi, {user?.name ?? "Deira Aisya"} 👋</Text>
    </View>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="screen"
            options={{
              title: "Screen",
              header: (props) => {
                return <AppHeader {...props} />;
              }, // Menonaktifkan header sama sekali
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </AuthProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "#DEF3FF",
  },
  greeting: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0391CE",
  },
  left: { width: 32, alignItems: "flex-start" },
  right: { width: 32, alignItems: "flex-end" },
  title: { fontSize: 18, fontWeight: "600", color: "#0391CE" },
});
