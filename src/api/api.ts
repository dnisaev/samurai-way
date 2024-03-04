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
    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status/`, {status});
    }
}
export const authAPI = {
    me() {
        return instance.get("/auth/me/");
    },
    login(email:  string, password: string, rememberMe: boolean = false) {
        return instance.post('/auth/login/', {email, password, rememberMe});
    },
    logout(){
        return instance.delete('/auth/login/');
    }
}