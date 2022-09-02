import styled from "styled-components";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 98%;
  margin: auto;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Product = styled.div`
  background-color: white;
  margin: 10px;
  padding: 10px;
  width: 280px;
  border-radius: 16px;
  flex: none;
`;

const ImgContainer = styled.div``;

const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5px;
`;

const Info = styled.p`
  text-align: left;
  &:nth-child(1) {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #767676;
    line-height: 27px;
    font-size: 18px;
    font-weight: 400;
    text-transform: capitalize;
  }
`;

const ButtonContainer = styled.div``;

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  text-align: center;
  &:nth-child(1) {
    left: 0;
  }
  &:nth-child(2) {
    right: 0;
  }
`;

const Linkk = styled(Link)`
  text-decoration: none;
`;

function Carousel({ data, sliceA, sliceB, search }) {
  const carousel = useRef(null);

  const handleftClink = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handrightClink = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <Container>
      <CarouselContainer ref={carousel}>
        {data
          .filter((item) =>
            item.genre.toLowerCase().includes(search.toLocaleLowerCase())
          )
          .slice(`${sliceA}`, `${sliceB}`)
          .map((item) => (
            <Product key={item._id}>
              <Linkk to={`/myproduct/${item._id}`}>
                <ImgContainer>
                  <Img
                    src={`https://jedados.com.br/images/products/${item.images[0]}`}
                    alt={item.name}
                  />
                </ImgContainer>
              </Linkk>
              <InfoContainer>
                <Linkk to={`/myproduct/${item._id}`}>
                  <Info>{item.name}</Info>
                </Linkk>
                <Info>R${item.price}</Info>
              </InfoContainer>
            </Product>
          ))}
        <ButtonContainer>
          <Button onClick={handleftClink}>
            <VscChevronLeft size={60} color="black" />
          </Button>
          <Button onClick={handrightClink}>
            <VscChevronRight size={60} color="black" />
          </Button>
        </ButtonContainer>
      </CarouselContainer>
    </Container>
  );
}

export default Carousel;
