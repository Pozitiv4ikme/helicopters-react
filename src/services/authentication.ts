import axios from "axios";
import { UserLogin, UserRegistration } from "../types";

const http = axios.create({
    baseURL: "http://127.0.0.1:8000",
})

export const loginAccount = async (data: UserLogin) => {
    const response = await http.post("/login", {
        username: data.username,
        password: data.password,
      })
    
    return response;
}

export const registerAccount = async (data: UserRegistration) => {
    const response = await http.post("/registration", {
        username: data.username,
        password: data.password,
        email: data.email,
    });

    return response;
}
