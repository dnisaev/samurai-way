import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        "API-KEY": "4cd760bc-ec52-4b11-ad81-6e573de1fe96"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`);
    },
    followUser(userId: string) {
        return instance.post(`/follow/${userId}`);
    },
    unfollowUser(userId: string) {
        return instance.delete(`/follow/${userId}`);
    }
}
export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`/profile/${userId}`);
    }
}
export const authAPI = {
    getAuth() {
        return instance.get("/auth/me/");
    }
}