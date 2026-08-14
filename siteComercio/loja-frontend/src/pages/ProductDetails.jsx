import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const ProductDetails = () => {

    const {id} = useParams();

    const [quantidade, setQuantidade] = useState(1);

    function adicionarAoCarrinho(){
        alert("Produto Adicionado Ao Carrihno! Quantidade:" + quantidade )
    }


  return (
    <div className = "container">
        <h2>Produto id: {id}</h2>
        <h1>Camiseta</h1>
        <h3>Categoria</h3>
        <h4>Preço</h4>
        <h5>Descricao</h5>
        <button onClick = {() => setQuantidade(quantidade + 1)}>+</button><h5>
            Quantidade:{quantidade}</h5>
        <button
            onClick={() => {
                if (quantidade > 1) {
                    setQuantidade(quantidade - 1)
                }
            }}
        >
            -
        </button>

        <button className = "btn btn-success"  onClick  = {adicionarAoCarrinho}>Adicionar Ao Carrinho</button>

        <Link to = "/produtos">Voltar aos Produtos</Link>



    </div>

  )
}
