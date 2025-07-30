import Header from "@/components/layout/Header";
import EmptyListMessage from "@/components/posts/EmptyListMessage";
import PostCard from "@/components/posts/PostCard";
import PostSkeleton from "@/components/posts/PostSkeleton";
import { usePostStore } from "@/store";
import { Post } from "@/types/post";
import { useCallback, useEffect } from "react";
import { FlatList, Text, View } from "react-native";

const homeScreen = () => {
  const posts = usePostStore((state) => state.posts);
  const isLoading = usePostStore((state) => state.isLoading);
  const fetchPosts = usePostStore((state) => state.fetchPosts);
  const loadMorePosts = usePostStore((state) => state.loadMorePosts);
  const refreshPosts = usePostStore((state) => state.refreshPosts);
  const isLoadingMore = usePostStore((state) => state.isLoadingMore);
  const isRefreshing = usePostStore((state) => state.isRefreshing);
  const likePost = usePostStore((state) => state.likePost);
  const dislikePost = usePostStore((state) => state.dislikePost);
  const likedPostIds = usePostStore((state) => state.likedPostIds);
  const dislikedPostIds = usePostStore((state) => state.dislikedPostIds);
  const error = usePostStore((state) => state.error);

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Post }) => (
      <PostCard
        post={item}
        likePost={likePost}
        dislikePost={dislikePost}
        likedPostIds={likedPostIds}
        dislikedPostIds={dislikedPostIds}
      />
    ),
    [likePost, dislikePost, likedPostIds, dislikedPostIds]
  );

  return (
    <View className="flex-1 bg-gray-200 dark:bg-black">
      <Header />
      <Text className="text-center text-2xl font-poppins py-4 text-gray-800 dark:text-gray-200">
        Votre fil d'actualités
      </Text>
      {error && (
        <View className="bg-yellow-100 py-2 rounded-lg mx-4 mb-4">
          <Text className="text-center text-yellow-800 font-poppins">
            Mode hors ligne : affichage des données locales
          </Text>
        </View>
      )}
      {isLoading ? (
        [...Array(5)].map((_, index) => <PostSkeleton key={index} />)
      ) : (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={<EmptyListMessage />}
          ListFooterComponent={isLoadingMore && posts.length > 0 ? () => <PostSkeleton /> : null}
          onEndReached={posts.length > 0 ? loadMorePosts : undefined}
          onEndReachedThreshold={0.5}
          refreshing={isRefreshing}
          onRefresh={refreshPosts}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={10}
          showsVerticalScrollIndicator={true}
          removeClippedSubviews={true}
          contentContainerStyle={{
            paddingBottom: 40,
            paddingHorizontal: 16,
            flexGrow: 1,
          }}
        />
      )}
    </View>
  );
};

export default homeScreen;
