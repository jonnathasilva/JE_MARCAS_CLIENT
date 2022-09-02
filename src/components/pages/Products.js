import styled from "styled-components";
import { Contextt } from "../../context/SearchContext";
import { useContext, useState, useEffect } from "react";
import api from "../../utils/api";

import Loadd from "../layouts/Load";
import SearchPeoducts from "../layouts/SearchPeoducts";

const Container = styled.section`
  width: 94%;
  margin: 0 auto;
  margin-top: 1em;
`;

function Products() {
  const [search] = useContext(Contextt);
  const [load, setLoad] = useState();
  const [products, setProducts] = useState([]);

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
        <SearchPeoducts products={products} search={search} />
      )}
    </Container>
  );
}

export default Products;
