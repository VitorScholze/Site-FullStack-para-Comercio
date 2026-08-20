import { Link, useLocation } from 'react-router-dom'
import { isUserLoggedIn, logout } from "../services/authService"
import { useEffect, useState } from 'react'

export const Navbar = () => {
    const[loggedIn, setLoggedIn] = useState(isUserLoggedIn())

    const location = useLocation();

    useEffect(() => {
        setLoggedIn(isUserLoggedIn())
    },[location])



    function handleLogout(){
        logout()
        setLoggedIn(false)
    }

    return (

        
        
        <nav className="navbar navbar-expand-lg bg-white border-bottom">
            <div className="container py-2">

                <Link
                    className="navbar-brand fw-bold fs-4 text-dark"
                    to="/"
                >
                    Minha Loja
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Abrir menu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav mx-auto gap-lg-3">

                        <li className="nav-item">
                            <Link
                                className="nav-link text-dark"
                                to="/"
                            >
                                Início
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link text-dark"
                                to="/produtos"
                            >
                                Produtos
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link text-dark"
                                to="/categorias"
                            >
                                Categorias
                            </Link>
                        </li>

                    </ul>

                    <div className="d-flex align-items-center gap-2">

                    {loggedIn ? (
                        <button
                            className="btn btn-outline-dark"
                            onClick={handleLogout}
                        >
                            Sair
                        </button>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-outline-dark me-2">
                                Entrar
                            </Link>

                            <Link to="/register" className="btn btn-dark">
                                Criar conta
                            </Link>
                        </>
                    )}

                    </div>

                </div>

            </div>
        </nav>
    )
}