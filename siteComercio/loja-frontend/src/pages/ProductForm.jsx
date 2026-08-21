import React, { useEffect, useState } from "react"
import { createProduto } from "../services/productService"
import { getAllCategories } from "../services/categoryService"
import { Link, useNavigate } from "react-router-dom"

export const ProductForm = () => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [category, setCategory] = useState("")

    const [categories, setCategories] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        mostrarCategorias()
    }, [])

    

    function criarProduto(event) {
        event.preventDefault()

        const produto = {
            name,
            description,
            price,
            stock,
            category: {
                id: Number(category)
            }
        }

        createProduto(produto)
            .then((response) => {
                console.log(response.data)
                navigate(`/gerenciarProdutos`)
            })
            .catch((error) => {
                console.error(error)
            })
        }


    function mostrarCategorias(){
        getAllCategories().then((response) => {
            setCategories(response.data)
            console.log(response.data)
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="mb-4">
                        <h2 className="fw-bold mb-1">
                            Cadastrar Produto
                        </h2>

                        <p className="text-muted mb-0">
                            Preencha as informações do produto abaixo.
                        </p>
                    </div>


                    <div className="card border-0 shadow-sm">

                        <div className="card-body p-4 p-md-5">

                            <form onSubmit={criarProduto}>

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Nome do produto
                                    </label>

                                    <input
                                        type="text"
                                        value = {name}
                                        className="form-control"
                                        placeholder="Ex: Tênis Esportivo Pro"
                                        onChange = {(e) => setName(e.target.value)}
                                    />

                                </div>


                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Descrição
                                    </label>

                                    <input
                                        type = "text"
                                        className="form-control"
                                        value = {description}
                                        rows="4"
                                        placeholder="Ex: Tênis esportivo confortável para atividades físicas."
                                        onChange = {(e) => setDescription(e.target.value)}
                                    />

                                </div>


                                <div className="row">

                                    <div className="col-md-6 mb-4">

                                        <label className="form-label fw-semibold">
                                            Preço
                                        </label>

                                        <div className="input-group">

                                            <span className="input-group-text">
                                                R$
                                            </span>

                                            <input
                                                type="number"
                                                value = {price}
                                                className="form-control"
                                                placeholder="249,90"
                                                step="0.01"
                                                onChange ={(e) => setPrice(e.target.value)}
                                            />

                                        </div>

                                    </div>


                                    <div className="col-md-6 mb-4">

                                        <label className="form-label fw-semibold">
                                            Estoque
                                        </label>

                                        <input
                                            type="number"
                                            value = {stock}
                                            className="form-control"
                                            placeholder="25"
                                            min="0"
                                            onChange = {(e) => setStock(e.target.value)}
                                        />

                                    </div>

                                </div>


                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Categoria
                                    </label>

                                    <select
                                    className="form-select"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >

                                    <option value="">
                                        Selecione uma categoria
                                    </option>

                                    {categories.map((categoria) => (
                                        <option
                                            key={categoria.id}
                                            value={categoria.id}
                                        >
                                            {categoria.name}
                                        </option>
                                    ))}

                                </select>

                                </div>


                                <hr className="my-4" />


                                <div className="d-flex justify-content-end gap-2">

                                    <Link
                                    to = "/gerenciarProdutos"
                                        className="btn btn-outline-secondary px-4"
                                    >
                                        Cancelar
                                    </Link>

                                    <button
                                        type="submit"
                                        className="btn btn-dark px-4"
                                    >
                                        Cadastrar produto
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductForm