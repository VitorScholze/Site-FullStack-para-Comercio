import axios from "axios"

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