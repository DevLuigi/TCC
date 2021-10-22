import { StyledCabecalho } from "./styled";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import Api from "../../services/api"
const api = new Api();

function lerUsuarioQuelogou() {
  let logado = Cookies.get("usuario-logado");
  if (logado === undefined) {
    return null;
  }

  let usuarioLogado = JSON.parse(logado);
  return usuarioLogado;
}

export default function Cabecalho(props) {
  let usuarioLogado = lerUsuarioQuelogou() || {};
  const [nm] = useState(usuarioLogado.nm_usuario);
  const [img] = useState(usuarioLogado.img_usuario);

  const logof = () => {
    Cookies.remove("usuario-logado");
  };

  async function autocomplete(){
      let resp = await api.listarProdutos();
      console.log(resp)
  }

//   useEffect(() => {
    
// }, [])

  return (
    <StyledCabecalho corLetra={props.corLetra}>
      <main className="pc">
        <div className="logo-cabecalho">
            <Link to="/">  
                <img onClick={logof} src="/assets/images/logo.svg" alt="" />
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="titulo"> GameBud </div>
            </Link>
        </div>

        <div className="pesquisa">
           <img className="lupa" src="./assets/images/lupa.svg"/>
           <input />
        </div>

        <Link to={Cookies.get("usuario-logado") === undefined ? "/login" : "/"}
              style={{ textDecoration: "none" }}>
          
          {Cookies.get("usuario-logado") === undefined ? (
            <div className="login"> Login </div>
          ) : (
            <div className="row-user">
              <div className="user-image">
                
                <img src={img} alt="" />
              </div>
              <div className="user-login"> {nm} </div>
            </div>
          )}
        </Link>

        <Link to="/escolhaEntrega" style={{ textDecoration: "none" }}>
          <div className="entrega"> Entregas </div>
        </Link>
        <Link to="/carrinhoItem" style={{ textDecoration: "none" }}>
          <div className="carrinho"> </div>
        </Link>
      </main>
      <main className="cell">
        <div className="agp-direita">
          <div className="carrinho"> </div>
          <div className="lupa">
            <img src="/assets/images/lupaCell.svg" alt="" />
          </div>
        </div>

        <div className="logo-cabecalho">
          
          <img src="/assets/images/logo.svg" alt="" />
        </div>
        <div className="column">
          <div className="login"> Login </div>
          <div className="entrega"> Entregas </div>
        </div>
      </main>
      <hr />
    </StyledCabecalho>
  );
}
