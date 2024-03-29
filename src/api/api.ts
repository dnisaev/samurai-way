import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0`,
  headers: {
    "API-KEY": "2305dcac-73f2-4121-9dcd-60e2c86f4b66",
  },
});

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`);
  },
  followUser(userId: string) {
    return instance.post(`/follow/${userId}`);
  },
  unfollowUser(userId: string) {
    return instance.delete(`/follow/${userId}`);
  },
};
export const profileAPI = {
  getProfile(userId: string) {
    return instance.get(`/profile/${userId}`);
  },
  getStatus(userId: string) {
    return instance.get(`/profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`/profile/status/`, { status });
  },
  savePhoto(photo: File) {
    const formData = new FormData();
    formData.append("formData", photo);
    return instance.put(`/profile/photo/`, formData, { headers: { "Content-Type": "multipart/form-data" } });
  },
  saveProfile(profile: any) {
    return instance.put(`/profile/`, profile);
  },
};
export const authAPI = {
  me() {
    return instance.get("/auth/me/");
  },
  login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
    return instance.post("/auth/login/", { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete("/auth/login/");
  },
};
export const securityAPI = {
  getCaptcha(){
    return instance.get("/security/get-captcha-url/");
  }
}
