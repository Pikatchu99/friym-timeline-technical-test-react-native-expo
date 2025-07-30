import { fetchPostsService } from '@/services/posts';
import { StoreState } from '@/types/postState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const usePostStore = create<StoreState>()(
    persist((set, get) => ({
        allPosts: [],
        posts: [],
        likedPostIds: [],
        dislikedPostIds: [],
        page: 1,
        limit: 10,
        isLoading: false,
        isLoadingMore: false,
        isRefreshing: false,
        error: null,
        type: 'text',
        

        setPosts: (allPosts) => set({ allPosts }),
        setIsLoading: (isLoading) => set({ isLoading }),
        setLimit: (limit) => set({ limit }),
        getLimit: () => get().limit,
        setError: (error) => set({ error }),
        setPage: (page) => set({ page }),
        likePost: (id) => set((state) => ({
            likedPostIds: state.likedPostIds.includes(id)
                ? state.likedPostIds.filter(pid => pid !== id)
                : [...state.likedPostIds, id],
            dislikedPostIds: state.dislikedPostIds.filter(pid => pid !== id),
        })),

        dislikePost: (id) => {
            set((state) => ({
                dislikedPostIds: state.dislikedPostIds.includes(id)
                    ? state.dislikedPostIds.filter(pid => pid !== id)
                    : [...state.dislikedPostIds, id],
                likedPostIds: state.likedPostIds.filter(pid => pid !== id),
            }));
        },
        fetchPosts: async () => {
            set({ isLoading: true, error: null, page: 1 });
            try {
                await new Promise((resolve) => setTimeout(resolve, 4000));
                const response = await fetchPostsService();
                set((state) => ({
                    posts: response.slice(0, state.limit),
                    allPosts: response,
                    isLoading: false,
                }));
            } catch (error: string | any) {
                set({ isLoading: false, error: "Mode hors ligne - données locales affichées" });
            }
        },
        loadMorePosts: async () => {
            const { allPosts, posts, page, limit, isLoadingMore } = get();
            if (isLoadingMore || posts.length === 0) return;

            const nextPage = page + 1;
            const start = (nextPage - 1) * limit;
            const end = start + limit;
            const newItems = allPosts.slice(start, end);

            if (newItems.length === 0) return;

            set({ isLoadingMore: true });
            await new Promise((resolve) => setTimeout(resolve, 1000));
            set({
                posts: [...posts, ...newItems],
                page: nextPage,
                isLoadingMore: false,
            });
        },
        refreshPosts: async () => {
            set({ isRefreshing: true, error: null, page: 1 });
            try {
                const response = await fetchPostsService();
                set({
                    posts: response.slice(0, get().limit),
                    allPosts: response,
                    isRefreshing: false,
                    page: 1,
                });
            } catch (error: string | any) {
                set({ isRefreshing: false, error: "Mode hors ligne - données locales affichées" });
            }
        },
    }), {
        name: 'post-storage',
        storage: createJSONStorage(() => AsyncStorage),
    })
);