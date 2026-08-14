import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        
            <section className="bg-light py-5">

                <div className="container py-5">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <span className="text-secondary text-uppercase fw-semibold">
                                Nova coleção
                            </span>

                            <h1 className="display-3 fw-bold mt-3">
                                Seu estilo.
                                <br />
                                Do seu jeito.
                            </h1>
                            

                            <p className="lead text-secondary mt-4">
                                Encontre peças casuais para criar
                                looks que combinam com você.
                            </p>

                            <Link
                                to="/produtos"
                                className="btn btn-dark btn-lg px-4 mt-3"
                            >
                                Ver produtos
                            </Link>

                        </div>

                        <div className="col-lg-6">

                            <div className="bg-white rounded-4 shadow-sm p-5 text-center">

                                <span className="display-1">
                                    👕
                                </span>

                                <h4 className="mt-4">
                                    Nova coleção
                                </h4>

                                <p className="text-secondary mb-0">
                                    Confira nossos produtos
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
                <section className="py-5">

    <div className="container py-4">

        <div className="text-center mb-5">

            <h2 className="fw-bold">
                Compre por categoria
            </h2>

            <p className="text-secondary">
                Encontre exatamente o que combina com seu estilo.
            </p>

        </div>


        <div className="row g-4">

            <div className="col-md-4">

                <Link to="/produtos?categoria=camisetas">
                    <div className="card border-0 shadow-sm rounded-4 h-100">

                        <div className="card-body text-center p-5">

                            <div className="display-3 mb-3">
                                👕
                            </div>

                            <h4 className="fw-bold">
                                Camisetas
                            </h4>

                            <p className="text-secondary mb-0">
                                Básicas, estampadas e muito mais.
                            </p>

                        </div>

                    </div>
                </Link>

            </div>


            <div className="col-md-4">

                <Link to="/produtos?categoria=calcas">
                    <div className="card border-0 shadow-sm rounded-4 h-100">

                        <div className="card-body text-center p-5">

                            <div className="display-3 mb-3">
                                👖
                            </div>

                            <h4 className="fw-bold">
                                Calças
                            </h4>

                            <p className="text-secondary mb-0">
                                Conforto para qualquer ocasião.
                            </p>

                        </div>

                    </div>
                </Link>

            </div>


            <div className="col-md-4">

                <Link to="/produtos?categoria=calcados">
                    <div className="card border-0 shadow-sm rounded-4 h-100">

                        <div className="card-body text-center p-5">

                            <div className="display-3 mb-3">
                                👟
                            </div>

                            <h4 className="fw-bold">
                                Calçados
                            </h4>

                            <p className="text-secondary mb-0">
                                Estilo e conforto para seus passos.
                            </p>

                        </div>

                    </div>
                </Link>

            </div>

        </div>

    </div>

</section>

{/* Produtos em destaque */}
<section className="bg-light py-5">

    <div className="container py-4">

        <div className="text-center mb-5">

            <span className="text-secondary text-uppercase fw-semibold">
                Confira
            </span>

            <h2 className="fw-bold mt-2">
                Produtos em destaque
            </h2>

            <p className="text-secondary">
                Alguns dos nossos produtos mais populares.
            </p>

        </div>

        <div className="row g-4">

            {/* Produto 1 */}
            <div className="col-sm-6 col-lg-3">

                <div className="card border-0 shadow-sm rounded-4 h-100">

                    <div className="bg-white rounded-top-4 p-5 text-center">
                        <span className="display-2">
                            👕
                        </span>
                    </div>

                    <div className="card-body">

                        <small className="text-secondary">
                            Camisetas
                        </small>

                        <h5 className="fw-bold mt-2">
                            Camiseta Básica
                        </h5>

                        <p className="text-secondary">
                            Algodão premium
                        </p>

                        <strong>
                            R$ 89,90
                        </strong>

                    </div>

                </div>

            </div>


            {/* Produto 2 */}
            <div className="col-sm-6 col-lg-3">

                <div className="card border-0 shadow-sm rounded-4 h-100">

                    <div className="bg-white rounded-top-4 p-5 text-center">
                        <span className="display-2">
                            👖
                        </span>
                    </div>

                    <div className="card-body">

                        <small className="text-secondary">
                            Calças
                        </small>

                        <h5 className="fw-bold mt-2">
                            Calça Casual
                        </h5>

                        <p className="text-secondary">
                            Conforto e estilo
                        </p>

                        <strong>
                            R$ 149,90
                        </strong>

                    </div>

                </div>

            </div>


            {/* Produto 3 */}
            <div className="col-sm-6 col-lg-3">

                <div className="card border-0 shadow-sm rounded-4 h-100">

                    <div className="bg-white rounded-top-4 p-5 text-center">
                        <span className="display-2">
                            🧥
                        </span>
                    </div>

                    <div className="card-body">

                        <small className="text-secondary">
                            Jaquetas
                        </small>

                        <h5 className="fw-bold mt-2">
                            Jaqueta Casual
                        </h5>

                        <p className="text-secondary">
                            Estilo para qualquer ocasião
                        </p>

                        <strong>
                            R$ 199,90
                        </strong>

                    </div>

                </div>

            </div>


            {/* Produto 4 */}
            <div className="col-sm-6 col-lg-3">

                <div className="card border-0 shadow-sm rounded-4 h-100">

                    <div className="bg-white rounded-top-4 p-5 text-center">
                        <span className="display-2">
                            👟
                        </span>
                    </div>

                    <div className="card-body">

                        <small className="text-secondary">
                            Calçados
                        </small>

                        <h5 className="fw-bold mt-2">
                            Tênis Casual
                        </h5>

                        <p className="text-secondary">
                            Conforto para todos os dias
                        </p>

                        <strong>
                            R$ 249,90
                        </strong>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

            </section>

            
        
    )
}