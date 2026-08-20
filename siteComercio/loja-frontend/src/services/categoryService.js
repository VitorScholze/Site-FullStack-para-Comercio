import api from "./api"

const getAllCategories = () => api.get("/category")

export{getAllCategories}