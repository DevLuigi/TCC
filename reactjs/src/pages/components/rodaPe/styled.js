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

        background-color: #DFA04E;

        font-family: sans-serif;
        font-weight: 800;

        width: 100%;
        height: 5em;
        align-items: center;
    }

    .section2{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        background-color: #F0AC54;

        font-family: sans-serif;
        font-weight: 500;

        align-items: center;

        width: 84.3em;
    }

    .item{
        margin: .8em 0em;
    }

    .item:hover{
        cursor: pointer;
        text-decoration: underline;
    }

    .align{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 51.5em;
    }

    
    .align-title{
        display: flex;
        flex-direction: row;

        justify-content: center;
        align-items: center;

        margin-right: 8em;
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

       margin-left: 8.5em;
    }


    .align-items4{
        padding-right: 5em;
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