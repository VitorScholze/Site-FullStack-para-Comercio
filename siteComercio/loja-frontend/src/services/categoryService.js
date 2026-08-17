import axios from "axios"


const REST_API_BASE_URL = "http://localhost:8080/api/category"

const getAllCategories = () => axios.get(REST_API_BASE_URL)

export{getAllCategories}