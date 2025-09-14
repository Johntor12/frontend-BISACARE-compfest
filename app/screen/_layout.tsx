import { Stack } from "expo-router";

export default function ScreenLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" options={{ headerShown: false }} />
      <Stack.Screen name="claim-detail" options={{ headerShown: false }} />
      <Stack.Screen name="input-keluhan" options={{ headerShown: false }} />
      <Stack.Screen name="spot-scan" />
    </Stack>
  );
}
