import { useThemeStore } from "@/store/themeStore";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";

const ToogleTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <TouchableWithoutFeedback onPress={() => toggleTheme()}>
      <View className="rounded-full p-2 bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700">
        <Ionicons
          name={theme === "light" ? "moon" : "sunny"}
          size={22}
          color={theme === "light" ? "#000" : "#fff"}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ToogleTheme;
