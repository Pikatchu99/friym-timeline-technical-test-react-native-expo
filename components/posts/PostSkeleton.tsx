import { View } from "react-native";

const PostSkeleton = () => {
  return (
    <View className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow mb-4 animate-pulse">
      <View className="flex-row items-center mb-3">
        <View className="w-10 h-10 rounded-full bg-gray-200 dark:bg-zinc-700 mr-3" />
        <View className="flex-1">
          <View className="w-24 h-3 bg-gray-200 dark:bg-zinc-700 rounded mb-1" />
          <View className="w-16 h-2 bg-gray-200 dark:bg-zinc-700 rounded" />
        </View>
      </View>

      <View className="w-4/5 h-4 bg-gray-200 dark:bg-zinc-700 rounded mb-2" />
      <View className="w-full h-3 bg-gray-200 dark:bg-zinc-700 rounded mb-1" />
      <View className="w-full h-3 bg-gray-200 dark:bg-zinc-700 rounded mb-1" />
      <View className="w-full h-3 bg-gray-200 dark:bg-zinc-700 rounded mb-1" />
      <View className="w-11/12 h-3 bg-gray-200 dark:bg-zinc-700 rounded mb-3" />

      <View className="flex-row gap-2 mb-3">
        <View className="w-14 h-4 bg-gray-200 dark:bg-zinc-700 rounded-full" />
        <View className="w-14 h-4 bg-gray-200 dark:bg-zinc-700 rounded-full" />
        <View className="w-14 h-4 bg-gray-200 dark:bg-zinc-700 rounded-full" />
      </View>

      <View className="flex-row justify-between items-center">
        <View className="flex-row gap-4">
          <View className="w-10 h-4 bg-gray-200 dark:bg-zinc-700 rounded" />
          <View className="w-10 h-4 bg-gray-200 dark:bg-zinc-700 rounded" />
        </View>
        <View className="w-12 h-4 bg-gray-200 dark:bg-zinc-700 rounded" />
      </View>
    </View>
  );
};

export default PostSkeleton;