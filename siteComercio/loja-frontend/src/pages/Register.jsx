import React, { useState } from 'react'
import { register } from '../services/authService'

export const Register = () => {

  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  function registerUser(event){
    event.preventDefault();

    const user = {name, email, password}

    register(user).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">

    <div className="card shadow-sm border-0" style={{ width: "420px" }}>

        <div className="card-body p-4">

            <div className="text-center mb-4">
                <h2 className="fw-bold mb-2">Criar conta</h2>
                <p className="text-muted mb-0">
                    Cadastre-se para começar
                </p>
            </div>

            <form onSubmit = {registerUser}>

                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        Nome
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite seu nome"
                        value = {name}
                        name="name"
                        onChange = {(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        E-mail
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        value = {email}
                        placeholder="Digite seu e-mail"
                        name="email"
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label fw-semibold">
                        Senha
                    </label>

                    <input
                        type="password"
                        className="form-control"
                        value = {password}
                        placeholder="Digite sua senha"
                        name="password"
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-dark w-100"
                >
                    Criar conta
                </button>

            </form>

            <div className="text-center mt-4">
                <span className="text-muted">
                    Já possui uma conta?
                </span>

                <a href="/login" className="ms-1 text-decoration-none">
                    Entrar
                </a>
            </div>

        </div>

    </div>

</div>
  )
}

export default Register
