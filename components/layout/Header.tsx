import ToogleTheme from "./ToogleTheme";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      className={`bg-white dark:bg-zinc-900 rounded-b-3xl shadow-md`}
    >
      <View className="flex-row items-center justify-between px-4 h-16">
        <Text className="text-2xl font-medium text-black dark:text-white">Friym Timeline</Text>
        <ToogleTheme />
      </View>
    </SafeAreaView>
  );
}
