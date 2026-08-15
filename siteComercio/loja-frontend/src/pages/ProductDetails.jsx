import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProdutoById } from '../services/productService';

export const ProductDetails = () => {

    const {id} = useParams();

    const [quantidade, setQuantidade] = useState(1);

    const [carrinho, setCarrinho] = useState([])

    const [produto, setProduto] = useState(null);

    useEffect(() => {
        getProdutoById(id).then((response) => {
            console.log(response.data)
            setProduto(response.data)
        }).catch(error => {
            console.error(error)
        })
    }, [id])


    function adicionarAoCarrinho(){
        
    }


 return (
    <div className="container py-5">

        <div className="row justify-content-center">

            <div className="col-lg-10">

                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

                    <div className="row g-0">

                        
                        <div className="col-md-6 bg-light d-flex align-items-center justify-content-center p-5">

                            <span className="display-1">
                                👕
                            </span>

                        </div>


                        
                        <div className="col-md-6">

                            <div className="card-body p-4 p-lg-5">

                                <small className="text-secondary">
                                    {produto?.category?.name}
                                </small>

                                <h1 className="fw-bold mt-2">
                                    {produto?.name}
                                </h1>

                                <p className="text-secondary">
                                    {produto?.description}
                                </p>

                                <h3 className="fw-bold mb-4">
                                    {produto?.price}
                                </h3>


                            
                                <div className="mb-4">

                                    <p className="fw-semibold mb-2">
                                        Quantidade:{quantidade}
                                    </p>

                        
                                
                                    <div className="d-flex align-items-center gap-3">

                                        <button
                                            className="btn btn-outline-dark"
                                            onClick={() => {
                                                if (quantidade > 1) {
                                                    setQuantidade(quantidade - 1)
                                                }
                                            }}
                                        >
                                            −
                                        </button>

                                        <span className="fw-bold fs-5">
                                            {quantidade}
                                        </span>

                                        <button
                                            className="btn btn-outline-dark"
                                            onClick={() => setQuantidade(quantidade + 1)}
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>


                                
                                <button
                                    className="btn btn-dark w-100 py-2"
                                    onClick={adicionarAoCarrinho}
                                >
                                    🛒 Adicionar ao carrinho
                                </button>


                                
                                <div className="mt-4">

                                    <Link
                                        to="/produtos"
                                        className="text-decoration-none text-dark"
                                    >
                                        ← Voltar aos produtos
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
)
}
