import css from 'styled-jsx/css'

export default css`
    .button {
    width: 180px;
    height: 70px;

    margin: 20px 20px;
    display: inline-block;
    background-color: #adb5bd;
    cursor: pointer;

    font-size: large;
    color: black;

    border-radius: 20px;
    border: solid 2px black;
    }

    .clicked {
    background-color: #6c757d;
    color: #ffffff;
    }

    .button-choselvl {
    width: 180px;
    height: 70px;
    margin: 20px auto;
    display: inline-block;
    background-color: #adb5bd;
    cursor: pointer;
    font-weight: 500;

    
    }
    .button-send {
    height: 35px;
    width: 100px;

    margin-left: 10px;
    margin-right: 0px;
    }

    @media (max-width: 500px) {
    .select-button {
        font-size: medium;
        margin: 10px 10px;
    }

}
  
`