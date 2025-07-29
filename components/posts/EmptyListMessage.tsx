import { Text, View } from "react-native";

const EmptyListMessage = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-gray-500 text-lg">
        Aucun post disponible pour le moment.
      </Text>
    </View>
  );
};

export default EmptyListMessage;