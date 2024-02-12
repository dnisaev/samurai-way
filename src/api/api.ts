import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        "API-KEY": "bb82ba3c-ed1e-4248-bb07-d52f74e8ed63"
    }
})

export const usersAPI = {
    getUsers: async (currentPage: number = 1, pageSize: number = 10) => {
        const response = await instance
            .get(`/users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    }
}

export const profileAPI = {
    getProfile: async (userId: string) => {
        const response = await instance
            .get(`/profile/${userId}`);
        return response.data
    }
}

export const authAPI = {
    getAuth: async () => {
        const response = await instance
            .get("/auth/me/")
        return response.data
    }
}