import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../utils/api";

import Loadd from "../layouts/Load";
import Carousel from "../layouts/Carousel";

const Container = styled.section`
  text-align: center;
  padding-top: 1em;
`;

const ContainerBox = styled.div`
  margin-bottom: 3em;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  text-transform: uppercase;
`;

const Genre = styled.h2`
  text-align: left;
  width: 96%;
  margin: 0 auto;
`;

function Home() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState();

  useEffect(() => {
    setLoad(true);
    api.get("public").then((response) => {
      setProducts(response.data);
      setLoad(false);
    });
  }, []);

  return (
    <Container>
      {load ? (
        <Loadd />
      ) : (
        <>
          <Title>Destaque da Semana</Title>

          {products.filter((item) => item.genre.includes("Feminino")).length >
          0 ? (
            <ContainerBox>
              <Genre>Feminino</Genre>
              <Carousel
                sliceA={0}
                sliceB={10}
                data={products}
                search={"Feminino"}
              />
            </ContainerBox>
          ) : (
            ""
          )}

          {products.filter((item) => item.genre.includes("Masculino")).length >
          0 ? (
            <ContainerBox>
              <Genre>Masculino</Genre>
              <Carousel
                sliceA={0}
                sliceB={10}
                data={products}
                search={"Masculino"}
              />
            </ContainerBox>
          ) : (
            ""
          )}

          {products.filter((item) => item.genre.includes("Criança")).length >
          0 ? (
            <ContainerBox>
              <Genre>Criança</Genre>
              <Carousel
                sliceA={0}
                sliceB={10}
                data={products}
                search={"Criança"}
              />
            </ContainerBox>
          ) : (
            ""
          )}

          {products.filter((item) => item.genre.includes("Acessórios")).length >
          0 ? (
            <ContainerBox>
              <Genre>Acessórios</Genre>
              <Carousel
                sliceA={0}
                sliceB={10}
                data={products}
                search={"Acessórios"}
              />
            </ContainerBox>
          ) : (
            ""
          )}
        </>
      )}
    </Container>
  );
}

export default Home;
