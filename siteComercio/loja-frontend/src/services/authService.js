import axios from "axios";

export const login = (login) => axios.post("/api/auth/login", login)

export const register = (user) => axios.post("/api/user", user)