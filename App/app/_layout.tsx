import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function Layout() {
  const params = useLocalSearchParams();
  const username = params.username ? `Welcome, ${params.username}` : "Welcome";

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#007BFF" }, // Default blue header
        headerTintColor: "white", // White text
        headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Sign In" }} />
      <Stack.Screen
        name="second"
        options={{ title: username ? `Welcome, ${username}` : "Home" }}
      />
    </Stack>
  );
}
