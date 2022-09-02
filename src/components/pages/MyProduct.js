import styled from "styled-components";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Loadd from "../layouts/Load";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Container = styled.section`
  padding: 4em 0;
  padding-top: 2em;
`;

const ContaineInfo = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 500px;
  @media (max-width: 1000px) {
    height: 400px;
  }
`;

const Info = styled.div`
  width: 40%;
  margin: 0 auto;
  @media (max-width: 750px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  text-align: left;
  font-weight: 400;
  font-size: 20px;
  word-break: break-word;
  width: 100%;
  margin-top: 1.5em;
`;

const Price = styled.p`
  margin: 1em 0;
  padding-bottom: 1em;
  font-size: 25px;
  font-weight: bold;
  border-bottom: 1px dashed;
`;

const ContainerSize = styled.div`
  margin-bottom: 2em;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const TitleSize = styled.h2`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 17px;
`;

const Size = styled.p`
  margin-right: 2em;
  margin-bottom: 10px;
  padding: 5px 20px;
  border: solid 2px black;
  border-radius: 10px;
  text-transform: uppercase;
`;

const ContainerWhatsApp = styled.div`
  text-align: left;
  @media (max-width: 750px) {
    width: 100%;
    text-align: center;
  }
`;

const WhatsApp = styled.a`
  padding: 10px 15px;
  background: #34af23;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
`;

function MyProduct() {
  const [product, setProduct] = useState({});
  const [load, setLoad] = useState();
  const { id } = useParams();

  useEffect(() => {
    setLoad(true);
    api.get(`public/${id}`).then((response) => {
      setProduct(response.data);
      setLoad(false);
    });
  }, [id]);

  return (
    <Container>
      {load ? (
        <Loadd />
      ) : (
        <ContaineInfo>
          <Swiper
            key={product.name}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {product.images &&
              product.images.map((image, index) => (
                <SwiperSlide>
                  <Img
                    src={`https://jedados.com.br/images/products/${image}`}
                    alt={product.name}
                    key={`${product.name}+${index}`}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <Info>
            <Title>{product.name}</Title>
            <Price>R${product.price}</Price>
            <TitleSize>Tamanho (BR)</TitleSize>
            <ContainerSize>
              {product.sizes &&
                product.sizes.map((size) => <Size>{size}</Size>)}
            </ContainerSize>
            <ContainerWhatsApp>
              <WhatsApp href="https://contate.me/je.marcas">
                Ir para o whatsApp da loja
              </WhatsApp>
            </ContainerWhatsApp>
          </Info>
        </ContaineInfo>
      )}
    </Container>
  );
}

export default MyProduct;
