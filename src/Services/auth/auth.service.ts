import { UserLogin } from "@Models";
import { instance } from "@Services/api";

export const login = async (user: UserLogin) => {
    const { data } = await instance.post("/auth/login", user);
    return data;
}