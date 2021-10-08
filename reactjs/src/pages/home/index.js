import Cabecalho from "../../components/cabecalho"
import { StyledConteudo, Bolota } from "./styled"
import { StyledButtonHome  } from "../../components/botaoHome/styled"
import Footer  from "../../components/rodape/index"
import CaixaJogo from "../../components/caixaJogo"
import Categoria from "../../components/escolhaTipo"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import '../index.css'
import "animate.css"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"


import Api from "../../services/api"
const api = new Api();

export default function Home() {

    const [populares, setPopulares] = useState([]);



    const listarPopulares = async () => {
        const e = await api.listarProdutosPopulares()
        setPopulares(e);
    }

      useEffect(() => {
       
        listarPopulares()

    }, [])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return (
        <main style={{backgroundColor:"#333333",  margin:"auto", position:"relative"}}>
        <Bolota> <img src="/assets/images/Koko Caramel 3.svg" alt=""/> </Bolota>
        <Cabecalho corLetra="branco"  /> 
        <StyledConteudo> 
        <main>   
           <div className="row">
            <div className="agp-melhor"> 
                <div className="texto-melhor"> A Melhor </div>
                <div className="texto-melhor"> Loja Do Brasil </div>
                <div className="saiba-mais"> <Link to="/saibaMais" style={{textDecoration: 'none'}}> <StyledButtonHome className="teste">Saiba Mais! </StyledButtonHome> </Link>  </div>
            </div>
            <div className="logo"> <img src="/assets/images/controle.svg" alt="" /> 
            </div>
        </div> 
            <section className="faixa2"> 
                <div className="titulo"> Mais Populares:  </div>
                <div class="barra"> </div>   
                <div className="lista-produtos">  
                        <Carousel   responsive={responsive}
                                    infinite={true}
                                    showDots={true}
                                    autoPlay={true}
                                    containerClass="carousel-container"
                                    dotListClass="custom-dot-list-style">

                            {populares.map(x =>  <CaixaJogo key={x.id_produto} name={x.nm_produto != null && x.nm_produto.length >= 31 
                                                                    ? x.nm_produto.substr(0,31) + "..." 
                                                                    : x.nm_produto} 
                                                            name2= {x.nm_produto}
                                                            image={x.img_produto} 
                                                            price={`R$: ${x.vl_preco}`} /> 
                            )}   
                        </Carousel> 
                </div>
            </section>

            <section className="faixa3"> 
                <div className="row2"> 
                  <div className="a1">   <Categoria  cat="Canecas" desc="Feitas Para Você!" img="/assets/images/caneca.svg"/> </div>
                  <div className="a2">  <Categoria cat="Xbox" desc="Todos Os Jogos!" img="/assets/images/xbox.svg"/> </div>
                  <div className="a3">  <Categoria cat="Roupas"desc="Feitas Para Você!" img="/assets/images/camiseta.svg"/> </div>
                </div>
                <div class="row2"> 
                <div className="a4">   <Categoria cat="Ps4" desc="Todos Os Jogos!" img="/assets/images/Ps4.svg"/> </div>
                <div className="a5">   <Categoria cat="Outros" desc="Feitas Para Você!" img="/assets/images/personalizado.svg"/> </div>
               </div>

            </section>
            </main>

        </StyledConteudo>
        <Footer/>
        </main>
        
        
    )
}