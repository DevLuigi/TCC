import styled from "styled-components";


const StyledVendaSemItem = styled.div`



  background-color: #333333;
  height: 100vh;
  display: flex;
  justify-content: center;

  main {
    width: 1240px;
    margin: auto;
  }

  .agrupamento-carrinho {
    display: flex;
    flex-direction: row;
    background-color: #282828;
    border-radius: 1em;
    width: 95%;
    margin-left: 2em;
    align-items: center;
    padding: 4em;
    position: relative;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .hr {
    border: solid 0.7px #c4c4c4;
    margin-right: 6.3em;
    margin-left: 4.3em;
    width: auto;
  }

  .logo img {
    width: 20em;
    height: 20em;
  }

  .logo {
    margin-left: 4em;
  }


  .texto {
    font-size: 44px;
    color: #ffffff;
    width: 10.4em;
    margin-left: 3em;
    font-family: MontserratBold;
  }

  .botao {
    margin-left: 3.7em;
    bottom: 4.4em;
    position: absolute;
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0.8em;
    padding-bottom: 0.8em;
    width: 12em;
    height: 1em;
  }

  .botao > .link {
    text-decoration: none;
  }

  @media (max-width: 425px) {
    main {
      width: 100%;
    }

    .agrupamento-carrinho {
      display: flex;
      flex-direction: row;
      width: 100%;
      margin: 0em;
      padding: 0em;
      position: relative;
      padding-bottom: 6em;
      height: 100%;
    }

    .botao {
      bottom: 1em;
      margin: 0em;

      left: 0.7em;
      width: 90%;
    }
    .texto {
      margin: 0em;
      font-size: 1em;
    }

    .logo {
      margin: 0em;
      padding: 1em;
    }

    .logo img {
      width: auto;
      height: 7em;
      padding: 1em;
    }

  

    height: auto;
  }

  @media (width: 425px) {
    .texto {
      font-size: 1.4em;
    }

    .logo img {
      width: auto;
      height: 10em;
      padding: 1em;
    }
  
  }


`


export { StyledVendaSemItem }