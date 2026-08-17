import React, { useEffect, useState } from 'react'

export const Cart = () => {

    const [carrinho, setCarrinho] = useState([])

    

    const total = carrinho.reduce((soma, produto) => {
      return soma + produto.price * produto.quantidade
    },0)

    useEffect(() => {
        const carrinhoSalvo =
            JSON.parse(localStorage.getItem("carrinho")) || []

        setCarrinho(carrinhoSalvo)
    }, [])

    console.log(carrinho)

    function removerProduto(produto){

      const novoCarrinho = carrinho.filter((item) => item.id !== produto.id)

      setCarrinho(novoCarrinho)

      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho))
    }


    function alterarQuantidade(produto, novaQuantidade){
      const novoCarrinho = carrinho.map((item) => {
        if(item.id === produto.id){
          return {
            ...item,
            quantidade : novaQuantidade
          }
        }
        return item;
      })

      setCarrinho(novoCarrinho)

      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho)
    )}


    function finalizarCompra(){

    }


    return (
        <div className="container py-5">

            {carrinho.length === 0 ? (

                // Carrinho vazio
                <div className="text-center py-5">

                    <h1 className="fw-bold">
                        Seu Carrinho está vazio!
                    </h1>

                    <p className="text-muted">
                        Adicione produtos para continuar!
                    </p>

                </div>

            ) : (
                  //Carrinho com produtos
                <>

                
                
                    <div className="mb-5">

                        <h1 className="fw-bold">
                            Meu Carrinho
                        </h1>

                        <p className="text-muted">
                            Confira os produtos selecionados antes de finalizar sua compra.
                        </p>

                    </div>


                    <div className="row g-4">

                      
                        <div className="col-lg-8">

                            <div className="card border-0 shadow-sm rounded-4">

                                <div className="card-body p-4">

                                    <h4 className="fw-bold mb-4">
                                        Seus produtos
                                    </h4>


                                    {/* Produto */}

                                    {carrinho.map((produto) => (

                                    
                                    <div className="border-bottom py-4" key = {produto.id}>

                                        <div className="row align-items-center">

                                            {/* Imagem */}
                                            <div className="col-md-2">

                                                <div
                                                    className="bg-light rounded-3 d-flex align-items-center justify-content-center"
                                                    style={{ height: "100px" }}
                                                >
                                                    <span className="fs-1">
                                                        👕
                                                    </span>
                                                </div>

                                            </div>


                                            {/* Informações */}
                                            <div className="col-md-5">

                                                <h5 className="fw-bold mb-1">
                                                    {produto.name}
                                                </h5>

                                                <p className="text-muted mb-1">
                                                    {produto.description}
                                                </p>

                                                <small className="text-secondary">
                                                    {produto?.category.name}
                                                </small>

                                            </div>


                                            {/* Quantidade */}
                                            <div className="col-md-2 text-center">

                                                <small className="text-muted d-block mb-2">
                                                    Quantidade
                                                </small>

                                                <div className="d-flex justify-content-center align-items-center gap-2">

                                                    <button className="btn btn-sm btn-outline-dark" onClick = {() => {
                                                      if(produto.quantidade > 1){
                                                        alterarQuantidade(produto, produto.quantidade - 1)
                                                      }
                                                    }}>
                              
                                                        −
                                                    </button>

                                                    <span className="fw-semibold">
                                                        {produto.quantidade}
                                                    </span>

                                                    <button className="btn btn-sm btn-outline-dark" onClick = {() => alterarQuantidade(produto, produto.quantidade + 1)}>
                                                        +
                                                    </button>

                                                </div>

                                            </div>


                                            {/* Preço */}
                                            <div className="col-md-3 text-end">
                                                   
                                                <strong className="fs-5">
                                                    R$ {produto.price}
                                                
                                                </strong>

                                                <button className="btn btn-sm btn-link text-danger d-block ms-auto" onClick = {() => removerProduto(produto)}>
                                                    Remover
                                                </button>

                                            </div>
                        
                                        </div>
                        
                                    </div>
                                    
                                    
                        ))}

                                </div>
                            
                            </div>
                          
                        </div>


                        {/* Resumo */}
                        <div className="col-lg-4">

                            <div className="card border-0 shadow-sm rounded-4">

                                <div className="card-body p-4">

                                    <h4 className="fw-bold mb-4">
                                        Resumo da compra
                                    </h4>


                                    <div className="d-flex justify-content-between mb-3">

                                        <span className="text-muted">
                                            Subtotal
                                        </span>

                                        <span>
                                            R$ {total.toFixed(2)}
                                        </span>

                                    </div>


                                    <div className="d-flex justify-content-between mb-3">

                                        <span className="text-muted">
                                            Frete
                                        </span>

                                        <span className="text-success">
                                            Grátis
                                        </span>

                                    </div>


                                    <hr />


                                    <div className="d-flex justify-content-between mb-4">

                                        <strong className="fs-5">
                                            Total
                                        </strong>

                                        <strong className="fs-5">
                                            {total.toFixed(2)}
                                        </strong>

                                    </div>
                                  

                                    <button className="btn btn-dark w-100 py-3" onClick = {finalizarCompra}>
                                        Finalizar compra
                                    </button>
                                    

                                </div>

                            </div>
                            

                        </div>
                        
                      
                    </div>
                    

                </>

            )}

        </div>
        
    )
}