import { StyledBoxItemCarrinho } from "./styled"
import { StyledInput } from "../../../../components/input/styled"
import { SelectInput } from "../../../../components/select/styled"
import { StyledButtonVerde } from "../../../../components/botaoVerde/styled"
import { useState } from "react"
import { StyledButtonAdm } from "../../../../components/botaoAdm/styled"
import { useEffect } from "react"



export default function BoxItemCarrinho(props) {

    const [ produto, setProduto ]  = useState(props.info);
    const [ qtd, setQtd ] = useState(1);
    const [ cep, setCep ] = useState(false);

    function visible(){
        setCep(true)
    }

    function remover () {
        props.onRemove(produto.id_produto)
    }



    function enviarResp () {
       return  props.respostaFilho(produto.vl_preco)
    }

  
    return (
        <StyledBoxItemCarrinho> 
        <main className="pc">
        <div className="foto"> <img src={produto.img_produto} alt="" /> </div>
        <div className="column-esp"> 
            <div className="nome-produto">  {produto.nm_produto} </div>
            <div className="row-vendido"> 
                <div className="dono"> Vendido Por: </div>
                <div className="nome-dono"> GameBud </div>
                <button onClick={enviarResp}> TESTE </button>
            </div>
           
            <div className="row-vendido"> 
                <div className="dono"> Entregue Por: </div>
                <div className="nome-dono"> GameBudSedex </div>
               
            </div>
            
        </div>
     
        <div className="column-valores">
            <div className="row-valores"> 
                <div className="select">  <SelectInput   onChange={e => setQtd(e.target.value)}   style={{width:"4em", height:"2em", fontSize:"1em", fontFamily: "MontserratBold"}}>  
                <option value={1} > 1 </option>
                <option value={2} > 2 </option>
                <option value={3} > 3 </option>
                <option value={4} > 4 </option>
                <option value={5} > 5 </option>
                <option value={6} > 6 </option>
                <option value={7} > 7 </option>
                <option value={8} > 8 </option>
                <option value={9} > 9 </option>
                <option value={10} > 10 </option>

              
                 </SelectInput> </div>
                <div className="valores-preco"> {`R$: ${Math.round(produto.vl_preco * qtd)} ` } </div>
            </div>
            <div className="excluir" onClick={remover}> Excluir </div>
            <div className="row-input"> 
                <div className="frete"> Frete: </div>
                <div className="input-frete">  <StyledInput placeholder="Cep" style={{width:"8em"}}/> </div>
                <div className="botao-frete"> <StyledButtonVerde onClick={visible} style={{width: "7em", height:"1.8em", marginLeft:"2em"}}> Calcular </StyledButtonVerde> </div>
            </div>
            {cep && <div> 
                        <div className="rua"> Nome da Rua Bonito  </div>
                        <div className="bairro"> Bairro com Nome Bonito  </div>
                        <div className="estado">  Cidade com Nome Bonita </div>
                
                        <div className="row-val"> 
                            <div className="titulo-val"> Preço: </div>
                            <div className="valor-val"> R$10,99 </div>
                        </div>
                        <div className="row-val"> 
                            <div className="titulo-val"> Previsão: </div>
                            <div className="valor-val1"> 4 dias </div>
                        </div>
                    </div> 
            }
                    
        </div>
   
                </main>
                <main className="cell">
                    <div className="box-preta">
                    <div className="nome-produto"> {produto.nm_produto}  </div>
                        <div className="foto"> <img src={produto.img_produto} alt="" /> </div>
                        <div className="row-val"> 
                            <div className="titulo-val"> Preço: </div>
                            <div className="valor-val"> {`R$: ${Math.round(produto.vl_preco * qtd)} ` } </div>
                        </div>
                        <div className="row-valores"> 
                                <div className="quantidade"> Unidades: </div>
                                <div className="select">  <SelectInput  onChange={e => setQtd(e.target.value)} style={{width:"4em", height:"2em", fontSize:"1em", fontFamily: "MontserratBold"}}>  
                                    <option value={1} >1 </option>
                                    <option value={2}> 2 </option>
                                    <option value={3}> 3 </option>
                                    <option value={4}> 4 </option>
                                    <option value={5}> 5 </option>
                                    <option value={6}> 6 </option>
                                    <option value={7}> 7 </option>
                                    <option value={8}> 8 </option>
                                    <option value={9}> 9 </option>
                                    <option value={10}> 10 </option>
                                </SelectInput> </div>
                                </div>
                    
                        
                            <div className="excluir"> <StyledButtonAdm cor="vermelho" className="excluirB" onClick={remover}>  Excluir </StyledButtonAdm> </div>
                    </div>
                </main> 
    </StyledBoxItemCarrinho>
    )
}