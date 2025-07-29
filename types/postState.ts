import { Post } from "./post";

interface StoreState {
    allPosts: Post[];
    posts: Post[];
    page: number;
    limit: number;
    isLoading: boolean;
    error: string | null;
    isLoadingMore?: boolean;
    isRefreshing?: boolean;
    likedPostIds: number[];
    dislikedPostIds: number[];

    setPosts: (allPosts: Post[]) => void;
    setIsLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;
    fetchPosts: () => Promise<void>;
    setPage: (page: number) => void;
    likePost: (id: number) => void;
    dislikePost: (id: number) => void;
    getLimit: () => number;
    setLimit: (limit: number) => void;
    loadMorePosts: () => void;
    refreshPosts: () => Promise<void>;
    
}


export { StoreState };
