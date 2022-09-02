import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  25% {
    transform: scaleX(1);
    transform-origin: left;
  }
  25.0001% {
    transform-origin: right;
  }
  50%,100% {
    transform: scaleX(0);
    transform-origin: right;
  }
`

const Container = styled.section`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
`

const Load = styled.div`
width: 200px;
height: 200px;
background-color: black;
position: absolute;
`

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &:nth-child(1) {
    transform: rotate(0deg);
  }
  &:nth-child(2) {
    transform: rotate(90deg);
  }
  &:nth-child(3) {
    transform: rotate(180deg);
  }
  &:nth-child(4) {
    transform: rotate(270deg);
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    transform: scaleX(0);
    background-color: #f2d97d;
    animation: ${animate} 2s linear infinite;
  }
  &:nth-child(1)::before {
    animation-delay: 0s;
  }
  &:nth-child(2)::before {
    animation-delay: 0.5s;
  }
  &:nth-child(3)::before {
    animation-delay: 1s;
  }
  &:nth-child(4)::before {
    animation-delay: 1.5s;
  }
`

const Title = styled.h3`
z-index: 10;
color: #FFF;
`

function Loadd() {
  return (
    <Container>
      <Load>
        <Span />
        <Span />
        <Span />
        <Span />
      </Load>
      <Title>Carregando...</Title>
    </Container>
  );
}

export default Loadd;