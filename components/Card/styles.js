import css from 'styled-jsx/css'

export default css.global`
  .card-container {
    width: 90%;
    height: 100%;

    margin: 0 auto;

    display: flex;
    justify-content: center;
  }

  .card-container :global(Image) {
    /* width: 40%;
    height: 100%;
    margin-right: 10%; */
  }
  .individual-card {

    background-color: white;

    display: flex;
    justify-content: center;

    border-radius: 30px;
  }
  .individual-card  global:(img) {
    height: 100%;
    margin: auto auto;
    border-radius: 30px;
  }
  .individual-card-writing {
    width: 40%;
    height: 300px;
    border-radius: 30px;
  }
  .individual-card-writing .writing {
    margin: auto 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }



  @media (max-width: 800px) {
    .individual-card-writing {
      display: none;
    }
    .card-container .flip-card {
      margin-right: 0px;
      width: 70%;
    }
  }
  @media (max-width: 500px) {
    .card-container .flip-card {
      margin-right: 0px;
      width: 200px;
      height: 200px;
    }
  }
  @media (max-height: 820px) and (min-width: 1000px) {
    .individual-card-writing {
      height: 200px;
      width: 250px;
    }
    .card-container .flip-card {
      height: 200px;
      width: 250px;
    }
  }
`
