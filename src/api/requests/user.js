import http from "../index";

export const getUserInfoRequest = () => http.get("/users/me/info");
export const getTopUsersRequest = () => http.get("/users/common/top");
