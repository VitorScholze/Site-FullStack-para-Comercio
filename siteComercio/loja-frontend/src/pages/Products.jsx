import { useEffect, useState } from 'react'
import { getAllProdutos } from '../services/productService'
import { Link } from 'react-router-dom'

export const Products = () => {

const [produtos, setProdutos] = useState([])

useEffect(() => {
    getAllProdutos().then((response) => {
        setProdutos(response.data)
        console.log(response.data)
    }).catch(error => {
        console.error(error)
    })
},[])


    return (
    <section className="py-5">


        <div className="container">
        

            <div className="mb-5">
                <h1 className="fw-bold">
                    Produtos
                </h1>

                <p className="text-secondary">
                    Encontre produtos para o seu estilo.
                </p>
            </div>

            <div className="row g-4">
            

                {produtos.map((produto) => (

                    <div className="col-sm-6 col-lg-3" key={produto.id}>

                    <Link
                        to={`/produtos/${produto.id}`}
                        className="text-decoration-none text-dark">
                        
                    

                        <div className="card border-0 shadow-sm rounded-4 h-100">

                            <div className="bg-light p-5 text-center rounded-top-4">
                                <span className="display-2">
                                    👟
                                </span>
                            </div>

                            <div className="card-body">

                                <small className="text-secondary">
                                    {produto.category?.name}
                                </small>

                                <h5 className="fw-bold mt-2">
                                    {produto.name}
                                </h5>

                                <p className="text-secondary">
                                    {produto.description}
                                </p>

                                <strong>
                                    R$ {produto.price}
                                </strong>

                            </div>

                        </div>
                        </Link>

                    </div>

                ))}

            </div>

        </div>

    </section>
)
}