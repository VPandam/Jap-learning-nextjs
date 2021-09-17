import css from 'styled-jsx/css'

export default css`
.flip-card {
  background-color: transparent;
  width: 40%;
  height: 300px;
  perspective: 1000px;
  margin-right: 10%;
  border-radius: 30px;
  cursor: pointer;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card :global(img){
  border-radius: 30px;
}
.rotate {
  transform: rotateY(180deg);
}
:global(.individual-card), .back-card {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.back-card {
  background-color: white;
  transform: rotateY(180deg);
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.back-card p {
  font-size: 5rem;
  font-weight: 500;
}
`