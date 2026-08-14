import { Link } from 'react-router-dom'

export const Navbar = () => {
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

                        <Link
                            to="/login"
                            className="btn btn-outline-dark"
                        >
                            Entrar
                        </Link>

                        <Link
                            to="/carrinho"
                            className="btn btn-dark"
                        >
                            🛒
                        </Link>

                    </div>

                </div>

            </div>
        </nav>
    )
}