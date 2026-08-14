import { Link } from 'react-router-dom'

export const Products = () => {
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

                    {/* Produto 1 */}
                    <div className="col-sm-6 col-lg-3">

                        <div className="card border-0 shadow-sm rounded-4 h-100">

                            <div className="bg-light p-5 text-center rounded-top-4">
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

                            <div className="bg-light p-5 text-center rounded-top-4">
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

                            <div className="bg-light p-5 text-center rounded-top-4">
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
                                    Estilo e conforto
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

                            <div className="bg-light p-5 text-center rounded-top-4">
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
    )
}