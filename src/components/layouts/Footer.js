import styled, { keyframes } from 'styled-components';
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

const Container = styled.footer`
background-color: black;
padding: 3em 0;
text-align: center;
`

const Info = styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
padding-bottom: 3em;
border-bottom: 1px solid #282828;
margin: 0 auto;
@media (max-width: 630px) {
  width: 100%;
}
`

const Card = styled.div`
text-align: center;
color: #FFF;
width: calc(100% / 4);
&:nth-child(1) {
  border-right: solid 1px #282828;
}
@media (max-width: 1000px) {
  width: calc(100% / 3 ); 
}
@media (max-width: 730px) {
  width: calc(100% / 2 ); 
}
`

const Title = styled.h3`
font-weight: 400;
&:nth-child(1) {
  margin-bottom: 10px;
}
`

const SubTitle = styled.p`
  margin-bottom: 15px;
`

const Box = styled.div`
display: flex;
width: 50%;
margin: auto;
margin-top: 20px;
`

const Linkk = styled.a`
text-decoration: none;
color: #FFF;
font-size: 14px;
`

const Description = styled.p`
color: #FFF;
font-size: 14px;
margin-top: 3em;
`

const Span = styled.span`
color: #FFF;
font-size: 14px;
`

function Footer() {
  return (
    <Container>
      <Info>
        <Card>
          <Title>Conheça a Je Marcas</Title>
          <Box>
            <Linkk href="https://contate.me/je.marcas">
              <RiWhatsappFill
                size={30}
                style={{ marginRight: '20px', color: '#FFF' }}
              />
            </Linkk>
            <Linkk href="https://www.instagram.com/je.marcas/">
              <AiFillInstagram
                size={30}
                style={{ color: '#FFF' }}
              />
            </Linkk>
          </Box>
        </Card>
        <Card>
          <Title>Institucional</Title>
          <SubTitle>Sobre Nós</SubTitle>
        </Card>
      </Info>
      <Description>
        Desenvolvido pelo 
        <Linkk href="https://www.instagram.com/jonnathan.77/"> Jonnathan </Linkk>
        <Span>- Todos os direitos reservados à je marcas - CNPJ: 43.256.329/0001-20 - Rua Aurino Santos Colares 924 b - Conjuto Metropolitano - Ceará - CEP: 61604350</Span> 
        </Description>
    </Container>
  );
}

export default Footer;