import { Post } from "@/types/post";

export function getPostReactionState(
    post: Post,
    likedPostIds: number[] = [],
    dislikedPostIds: number[] = []
) {
    const isLiked = likedPostIds.includes(post.id);
    const isDisliked = dislikedPostIds.includes(post.id);

    return {
        isLiked,
        isDisliked,
        displayedLikes: isLiked ? post.reactions.likes + 1 : post.reactions.likes,
        displayedDislikes: isDisliked
            ? post.reactions.dislikes + 1
            : post.reactions.dislikes,
        totalReactions:
            (isLiked ? post.reactions.likes + 1 : post.reactions.likes) +
            (isDisliked
                ? post.reactions.dislikes + 1
                : post.reactions.dislikes),
    };
}