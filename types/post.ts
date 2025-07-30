interface Reactions {
    likes: number;
    dislikes: number;
}

interface Post {
    id: number;
    type: 'text' | 'image' | 'video';
    videoUrl?: string;
    imageUrl?: string;
    title: string;
    body: string;
    tags: string[];
    reactions: Reactions
    views: number;
    userId: number;
    image?: string;
    createdAt?: string;
}

interface ReactionState {
    isLiked: boolean;
    isDisliked: boolean;
    displayedLikes: number;
    displayedDislikes: number;
    totalReactions: number;
}


export { Post, ReactionState };
