import axios from "axios"

const API_BASE_URL = "http://localhost:8080/api"

export const login = (login) =>
    axios.post(API_BASE_URL + "/auth", login)

export const register = (user) =>
    axios.post(API_BASE_URL + "/user", user)