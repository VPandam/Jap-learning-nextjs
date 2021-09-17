import css from 'styled-jsx/css'


export default css`
  .lvlSelect {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: white;

  background-color: #343a40;
}
  /*Type*/
  .buttonTypeContainer {
    width: 40vw;
    opacity: 0;

    display: flex;
    flex-direction: column;
  }

  .textContainerType {
    text-align: center;
  }
  .buttonsTypeContainer {
    display: flex;
    justify-content: center;

    margin-top: 30px;
  }

  /*Lvl*/
  .buttonLvlContainer {
    width: 40vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .textLvlContainer {
    text-align: center;
  }
  .buttonsLvlContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    margin-top: 30px;
  }

  /*Start Game*/


  .gameButton  a{
    font-size: large;
    color: black;
    font-weight: 500;
    width: 100%;
    height: 100%;

    display: flex;
    text-decoration: none;

    align-items: center;
    justify-content: center;
  }

  .no-display {
  display: none !important;
  }

  /*Animations*/
  .slide-in-left {
    -webkit-animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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


  @-webkit-keyframes disappear {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes disappear {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

    @media (max-width: 1650px) {
      .buttonLvlContainer {
        width: 50vw;
      }
      .buttonTypeContainer {
        width: 90vw;
      }
    }

    @media (max-width: 1320px) {
      .buttonLvlContainer {
        width: 60vw;
      }
    }

    @media (max-width: 1100px) {
      .buttonLvlContainer {
        width: 80vw;
      }
    }

    @media (max-width: 950px) {
      .buttonLvlContainer {
        width: 90vw;
      }
    }

    @media (max-width: 850px) {
      .buttonLvlContainer :global(button) {
        width: 85px;
        margin: 10px 10px;
        font-size: medium;
      }
    }

    @media (max-width: 500px) {
      .buttonTypeContainer {
        width: 90%;
      }
   }

    
  `