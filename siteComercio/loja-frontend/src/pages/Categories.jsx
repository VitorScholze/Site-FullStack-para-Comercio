import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../services/categoryService'
import { Link } from 'react-router-dom'


export const Categories = () => {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        getAllCategories().then((response) => {
            setCategorias(response.data)
            console.log(response.data)
        }).catch(error => {
            console.error(error)
        })

    },[])

  return (
    <div className="container py-5 category-container">

    {/* Cabeçalho */}
    <div className="text-center mb-5">
        <h1>Categorias</h1>
        <p className="text-muted">
            Encontre roupas para todos os estilos e ocasiões
        </p>
    </div>

    
    <div className="category-grid">

        { categorias.map((categoria) => (

        <div className="category-item" key = {categoria.id}>
            <Link to = {`/produtos?category=${categoria.name}`} className = "btn btn-dark">
            <div className="card h-100 shadow-sm">

                <div className="card-body text-center">
    

                    <h3>{categoria.name}</h3>

                    <p className="text-muted">
                        {categoria.description}
                    </p>

                    
                <div className="mt-auto">
                    <span className="btn btn-dark">
                        Ver produtos
                    </span>
                </div>

                </div>

            </div>
            </Link>
        </div>
))}

        </div>

</div>

  )
}
