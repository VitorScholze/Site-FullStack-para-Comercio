import api from "./api"


const createProduto = (produto) => api.post("/products", produto)

const getProdutoById = (produtoId) => api.get("/products/" + produtoId)

const getAllProdutos = () => api.get("/products")

const updateProduto = (produtoId, produto) => api.put("/products/" + produtoId, produto)

const deleteProduto = (produtoId) => api.delete("/products/" + produtoId)

export {
    createProduto,
    getProdutoById,
    getAllProdutos,
    updateProduto,
    deleteProduto
}
