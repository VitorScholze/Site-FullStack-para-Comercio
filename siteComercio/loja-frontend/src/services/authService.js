import axios from "axios"
import { jwtDecode } from "jwt-decode"

const API_BASE_URL = "http://localhost:8080/api"

export const login = (login) =>
    axios.post(API_BASE_URL + "/auth/login", login)

export const register = (user) =>
    axios.post(API_BASE_URL + "/user", user)

export const storeToken = (token) => {
    localStorage.setItem("token", token)
}

export const getToken = () => {
    return localStorage.getItem("token")
}

export const isUserLoggedIn = () => {
    return localStorage.getItem("token") !== null
}

export const logout = () => {
    return localStorage.removeItem("token")
}

export const getUserLoggedIn = () => {
    const token = getToken();

    if(token == null){
        return null
    }

    return jwtDecode(token)
}

export const isUserAdmin = () => {
    const user = getUserLoggedIn();

    return user?.role == "ADMIN"
}