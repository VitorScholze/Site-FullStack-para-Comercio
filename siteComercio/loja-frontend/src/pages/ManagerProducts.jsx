import React, { useEffect, useState } from "react"
import { deleteProduto, getAllProdutos } from "../services/productService"
import { Link } from "react-router-dom"

export const ManagerProducts = () => {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        getAllProdutos().then((response) => {
            setProdutos(response.data)
            console.log(response.data)
        }).catch(error => {
            console.error(error)
        })
    },[])



    function removerProduto(id){
        deleteProduto(id).then((response) => {
            setProdutos(produtos.filter(produto => produto.id !== id))
            console.log(response.data)
        }).catch(error => {
            console.error(error)
        })
    }
    


    return (
        <div className="container py-5">

            
            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold mb-1">
                        Gerenciar Produtos
                    </h2>

                    <p className="text-muted mb-0">
                        Adicione, edite ou remova produtos da loja.
                    </p>
                </div>

                <Link to="/criarProduto" className="btn btn-dark px-4">
                    + Adicionar produto
                </Link>
            </div>


            
            <div className="card border-0 shadow-sm">

                <div className="card-body p-0">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle mb-0">

                            <thead className="table-light">
                                <tr>

                                    <th className="px-4 py-3">
                                        Produto
                                    </th>

                                    <th className="py-3">
                                        Categoria
                                    </th>

                                    <th className="py-3">
                                        Preço
                                    </th>

                                    <th className="py-3">
                                        Estoque
                                    </th>

                                    <th className="text-end px-4 py-3">
                                        Ações
                                    </th>

                                </tr>
                            </thead>


                            <tbody>
                                {produtos.map((produto) => (

                                
                                <tr key = {produto.id}>

                                    <td className="px-4">
                                        
                                        <div className="fw-semibold">
                                            {produto.name}
                                        </div>

                                        <small className="text-muted">
                                            {produto.id}
                                        </small>
                                    </td>

                                    <td>
                                        <span className="badge text-bg-light border">
                                            {produto?.category?.name}
                                        </span>
                                    </td>

                                    <td className="fw-semibold">
                                        {produto.price}
                                    </td>

                                    <td>
                                        <span className="badge text-bg-success">
                                            {produto.stock}
                                        </span>
                                    </td>

                                    <td className="text-end px-4">

                                        <Link  to = {`/editarProduto/${produto.id}`} className="btn btn-sm btn-outline-dark me-2">
                                            Editar
                                        </Link>

                                        <button className="btn btn-sm btn-outline-danger" onClick ={() => removerProduto(produto.id)}>
                                            Excluir
                                        </button>
                                        
                                    </td>
                               
                             </tr>
                             
                                ))}
                                        

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ManagerProducts;