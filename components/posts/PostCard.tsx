import Avatar from "@/assets/images/avatar.png";
import { Post } from "@/types/post";
import { formatTimeAgo } from "@/utils/date";
import { getPostReactionState } from "@/utils/getPostReactionState";
import { Ionicons } from "@expo/vector-icons";
import React, { useMemo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const PostCard = ({
  post,
  likePost,
  dislikePost,
  likedPostIds,
  dislikedPostIds,
}: {
  post: Post;
  likePost: (id: number) => void;
  dislikePost: (id: number) => void;
  likedPostIds?: number[];
  dislikedPostIds?: number[];
}) => {
  const cardScale = useSharedValue(1);
  const likeScale = useSharedValue(1);
  const dislikeScale = useSharedValue(1);

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ scale: cardScale.value }],
  }));

  const likeStyle = useAnimatedStyle(() => ({
    transform: [{ scale: likeScale.value }],
  }));

  const dislikeStyle = useAnimatedStyle(() => ({
    transform: [{ scale: dislikeScale.value }],
  }));

  const animateScale = (sharedValue: typeof cardScale) => {
    sharedValue.value = withSpring(1.03, { damping: 8 }, () => {
      sharedValue.value = withSpring(1, { damping: 8 });
    });
  };

  const {
    isLiked,
    isDisliked,
    displayedLikes,
    displayedDislikes,
    totalReactions,
  } = useMemo(
    () => getPostReactionState(post, likedPostIds, dislikedPostIds),
    [post, likedPostIds, dislikedPostIds]
  );

  return (
    <Animated.View style={cardStyle}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPressIn={() => animateScale(cardScale)}
        className="bg-white dark:bg-zinc-900 rounded-2xl shadow p-4 mb-4"
      >
        <View className="flex-row items-center mb-2">
          <Image
            source={Avatar}
            className="w-10 h-10 rounded-full mr-3"
          />
          <View>
            <Text className="font-poppins-medium text-gray-900 dark:text-gray-100">
              User {post.userId}
            </Text>
            <Text className="text-xs text-gray-500 dark:text-gray-400">
              {formatTimeAgo(new Date("2025-07-27T12:00:00Z"))} ago
            </Text>
          </View>
        </View>

        <Text className="text-gray-800 dark:text-gray-200 text-base mb-2 font-poppins">
          {post.body}
        </Text>

        <View className="flex-row justify-between items-center mt-4">
          <View className="flex-row items-center space-x-6">
            <Text className="text-sm text-gray-600 dark:text-gray-400 mr-4 font-poppins">
              {totalReactions} réactions
            </Text>

            <Animated.View style={likeStyle}>
              <TouchableOpacity
                className="flex-row items-center mr-4"
                onPress={() => {
                  animateScale(likeScale);
                  likePost(post.id);
                }}
              >
                <Ionicons
                  name="thumbs-up"
                  size={20}
                  color={isLiked ? "green" : "gray"}
                />
                <Text className="text-sm text-gray-600 dark:text-gray-300 font-poppins">
                  {displayedLikes}
                </Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View style={dislikeStyle}>
              <TouchableOpacity
                className="flex-row items-center mr-4"
                onPress={() => {
                  animateScale(dislikeScale);
                  dislikePost(post.id);
                }}
              >
                <Ionicons
                  name="thumbs-down"
                  size={20}
                  color={isDisliked ? "red" : "gray"}
                />
                <Text className="text-sm text-gray-600 dark:text-gray-300 font-poppins">
                  {displayedDislikes}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>

          <Text className="text-sm text-gray-600 dark:text-gray-400 font-poppins">
            {post.views} vues
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default React.memo(PostCard);
