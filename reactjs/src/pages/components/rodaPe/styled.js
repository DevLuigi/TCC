import styled from "styled-components";

const RodaPe = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px;

    body{
        margin: 0px;
    }

    * {
        box-sizing: border-box;
    }

    main{
        display: flex;
        flex-direction: column;
    }

    .section1{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        background-color: #DFA04E;

        font-family: sans-serif;
        font-weight: 800;

        height: 5em;
    }

    .section2{
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        background-color: #F0AC54;

        font-family: sans-serif;
        font-weight: 500;

        align-items: center;
    }

    .item{
        margin: .8em 5em;
    }

    .item-header{
        margin: 0em 5em;
    }

    .item:hover{
        cursor: pointer;
        text-decoration: underline;
    }

    .align{
        display: flex;
        flex-direction: row;
        justify-content: space-around;

    }

    .align-header{
        display: flex; 
        flex-direction: row;

        margin-left: 2em;
    }

    .align-items{
        
    }
    
    .align-title{
        display: flex;
        flex-direction: row;

        justify-content: center;
        align-items: center;

    }

    .title-image{
        height: 5em;
        width: 5em;
    }


    .align-itens-image{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;

       width: 9.3em;
       margin-left: 2em;
    }


    .item-image{
        margin: .5em 0em;
    }

    .item-image:hover{
        cursor: pointer;
        text-decoration: underline;
    }

    hr{
        border: 0.1px solid #333333;
        width: 100%;
    }

    .section3{
        background-color: #F0AC54;

        font-size: .9em;
        line-height: 1.5em;

        width: 100%;
        height: 13em;
    }

    .section3 > div {
        padding-left: 1.5em;
        padding-top: 1.5em;
        width: 75em;
    }

`

export { RodaPe } 