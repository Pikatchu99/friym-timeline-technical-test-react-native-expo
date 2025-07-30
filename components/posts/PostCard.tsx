import { Post } from "@/types/post";
import { getPostReactionState } from "@/utils/getPostReactionState";
import { areArraysEqual } from "@/utils/help";
import React, { useMemo } from "react";
import TextCard from "./types/TextCard";

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
  likedPostIds: number[];
  dislikedPostIds: number[];
}) => {
  const reactionState = useMemo(() => {
    return (
      getPostReactionState(post, likedPostIds, dislikedPostIds) ?? {
        isLiked: false,
        isDisliked: false,
        displayedLikes: 0,
        displayedDislikes: 0,
        totalReactions: 0,
      }
    );
  }, [post, likedPostIds, dislikedPostIds]);

  switch (post.type) {
    default:
      return (
        <TextCard
          post={post}
          likePost={likePost}
          dislikePost={dislikePost}
          reactionState={reactionState}
        />
      );
  }
};

export default React.memo(PostCard, (prev, next) => {
  return (
    prev.post.id === next.post.id &&
    areArraysEqual(prev.likedPostIds, next.likedPostIds) &&
    areArraysEqual(prev.dislikedPostIds, next.dislikedPostIds)
  );
});
