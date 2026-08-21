import { useEffect, useState } from 'react'
import { getAllProdutos } from '../services/productService'
import { Link, useSearchParams } from 'react-router-dom'

export const Products = () => {

const [produtos, setProdutos] = useState([])

const [searchParams] = useSearchParams()

const categoriaSelecionada = searchParams.get("category")

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
            

                {produtos.filter((produto) => !categoriaSelecionada || produto?.category.name.toLowerCase() 
                ===  categoriaSelecionada.toLowerCase()).map((produto) => (

                    <div className="col-sm-6 col-lg-3" key={produto.id}>

                    <Link
                        to={`/produtos/${produto.id}`}
                        className="text-decoration-none text-dark">
                        
                    

                        <div className="card border-0 shadow-sm rounded-4 h-100">

                            <div className="card-body">

                                <img
                                    src={produto.imageUrl}
                                    alt={produto.name}
                                    className="card-img-top"
                                    style={{ height: "250px", objectFit: "cover" }}
                                />

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