import axios from "axios"

const REST_API_PRODUCTS_URL = "http://localhost:8080/api/products"


const createProduto = (produto) => axios.put(REST_API_PRODUCTS_URL , produto)

const getProdutoById = (produtoId) => axios.get(REST_API_PRODUCTS_URL + "/" + produtoId)

const getAllProdutos = () => axios.get(REST_API_PRODUCTS_URL)

const updateProduto = (produtoId, produto) => axios.put(REST_API_PRODUCTS_URL + "/" + produtoId, produto)

const deleteProduto = (produtoId) => axios.delete(REST_API_PRODUCTS_URL + "/" + produtoId)

export {
    createProduto,
    getProdutoById,
    getAllProdutos,
    updateProduto,
    deleteProduto
}
