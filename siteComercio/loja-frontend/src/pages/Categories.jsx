import React from 'react'

export const Categories = () => {
  return (
    <div className="container py-5">

    {/* Cabeçalho */}
    <div className="text-center mb-5">
        <h1>Categorias</h1>
        <p className="text-muted">
            Encontre roupas para todos os estilos e ocasiões
        </p>
    </div>

    {/* Categorias */}
    <div className="row g-4">

        {/* Categoria */}
        <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">

                <div className="card-body text-center">

                    <div className="mb-3">
                        👕
                    </div>

                    <h3>Camisetas</h3>

                    <p className="text-muted">
                        Camisetas para diferentes estilos e ocasiões.
                    </p>

                    <a href="#" className="btn btn-dark">
                        Ver produtos
                    </a>

                </div>

            </div>
        </div>

        </div>

</div>
  )
}
