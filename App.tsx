import "./global.css";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@/components/ui/core/ThemeProvider";
export default function App() {
  return (
    <ThemeProvider mode="light">
      <View className="flex-1 bg-primary-500 items-center justify-center">
        <Text className="text-typography-100">
          Open up App.tsx to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
