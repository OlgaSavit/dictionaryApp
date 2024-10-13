import http from "../index";

export const userLoginRequest = (data) => http.post("/auth/login", data);
export const userSignUpRequest = (data) => http.post("/auth/signup", data);
// http://135.181.46.211:81/api/v1/auth/signup
