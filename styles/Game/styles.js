import css from 'styled-jsx/css'

export default css`
    body {
    background-color: #343a40;
    }
    .principal-container {
    height: 100%;
    width: 100%;
    position: absolute;

    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .back {
    align-self: flex-start;
    height: 10%;
    margin-top: 30px;
    margin-left: 40px;
    }

    .aDiv{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .back :global(.back-button) {
    background-color: rgba(255, 255, 255, 0.89);
    width: 60px;
    height: 60px;

    margin: 20px;

    display: inline-block;


    background-color: #adb5bd;
    cursor: pointer;
    border-radius: 20px;
    border: 2px solid
    }


    .second-container {
    height: 85%;
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    margin-top: 1%;

    -webkit-animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    .game-container {
    width: 45%;
    height: 75%;

    display: flex;
    flex-direction: column;

    margin: auto 0;
    }

    .input-container {
    margin: 0 auto;
    margin-top: 8%;
    }

    .input-container input {
    height: 35px;
    border-radius: 10px;
    border: 2px solid black;
    }
    .input-container input:focus {
    outline: none;
    }

    .button-send {
    height: 35px;
    width: 100px;

    margin-left: 10px;
    margin-right: 0px;
    }

    .correct {
    border: #fff !important;

    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #0dc23a,
        0 0 0.8rem #0dc23a, 0 0 2.8rem #0dc23a, inset 0 0 1.3rem #0dc23a;
    }
    .incorrect {
    border: #fff !important;
    padding: 0.4em;
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #df1515,
        0 0 0.8rem #df1515, 0 0 2.8rem #df1515, inset 0 0 1.3rem #df1515;
    }

    .game-info {
    color: white;
    display: flex;

    margin: 0 auto;
    margin-top: 8%;

    justify-content: center;
    align-items: center;

    height: 50px;
    border-radius: 20px;
    border: 2px solid black;
    background-color: #212529;
    width: 85%;

    font-size: 1.3rem;
    }

    .game-info p {
    margin-right: 20px;
    }

    @-webkit-keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .disappear {
    -webkit-animation: disappear 1s;
    animation: disappear 1s;
  }

    @media (max-width: 1650px) {
        .game-container {
            width: 65%;
            height: 100%;
        }
    @media (max-width: 1400px) {
        .game-container {
            width: 70%;
            
        }

        .game-info {
            margin-top: 4%;
            height: 45px;
            font-size: 1.2rem;
            width: 80%;
        }

        .input-container {
            margin-top: 4%;
        }
    }

    @media (max-height: 820px) and (min-width: 1000px) {
    .second-container {
        margin-top: 5%;
    }
    .game-info {
        width: 600px;
    }
    .input-container input {
        width: 200px;
    }
    }
    @media (max-width: 1024px) {
        .game-container {
            width: 90%;
        }
    }
    @media (max-width: 500px) {
        .back {
            margin-left: 10px;
        }
        .back img {
            width: 25px;
        }
        .second-container {
            margin-top: 20%;
        }

        .back .back-button {
            width: 50px;
            height: 50px;
        }
        .game-info {
            width: 280px;
            font-size: 1rem;
        }
        .input-container {
            margin-top: 12%;
        }
        .input-container input {
            width: 170px;
        }
    }

`