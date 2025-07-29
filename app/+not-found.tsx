import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex items-center  justify-center p-20">
        <Text className="">This screen does not exist.</Text>
        <Link href="/" className="mt-4 px-7">
          <Text className="">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
