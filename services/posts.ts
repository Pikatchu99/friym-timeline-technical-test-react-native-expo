import axiosInstance from "@/config/axios";
import { Post } from "@/types/post";

export const fetchPostsService = async (): Promise<Post[]> => {
    try {
        const response = await axiosInstance.get("/posts");
        return response.data.posts as Post[];
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
}