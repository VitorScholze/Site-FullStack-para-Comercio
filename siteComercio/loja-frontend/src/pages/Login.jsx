import React, { useState } from 'react'
import { login, storeToken } from '../services/authService'

export const Login = () => {

  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")


  function loginUser(event){
    event.preventDefault()

    const user = {email, password}

    login(user).then((response) => {
      storeToken(response.data)
      console.log("Login Realizado!")
    }).catch((error) => {
      console.error(error)
    })
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">

    <div className="card shadow-sm border-0" style={{ width: "420px" }}>

        <div className="card-body p-4">

            <div className="text-center mb-4">
                <h2 className="fw-bold mb-2">Entrar</h2>
                <p className="text-muted mb-0">
                    Acesse sua conta
                </p>
            </div>

            <form onSubmit={loginUser}>

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
                    Entrar
                </button>

            </form>

            <div className="text-center mt-4">
                <span className="text-muted">
                    Ainda não possui uma conta?
                </span>

                <a href="/register" className="ms-1 text-decoration-none">
                    Criar conta
                </a>
            </div>

        </div>

    </div>

</div>
  )
}

export default Login
