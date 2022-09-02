import styled from 'styled-components';
import ListProducts from '../layouts/ListProducts'
import api from '../../utils/api';
import { useEffect, useState } from 'react';
import Loadd from '../layouts/Load';

const Container = styled.section`
width: 90%;
margin: 0 auto;
margin-top: 2em;
`

function Kid() {
  const [search] = useState('Criança')
  const [load, setLoad] = useState()
  const [products, setProducts] = useState([])

  useEffect(() => {
    setLoad(true)
    api.get('public').then((response) => {
      setProducts(response.data.products)
      setLoad(false)
    })
  }, [])

  return (
    <Container>
      {load ? (
        <Loadd />
      ) : (
        <ListProducts products={products} search={search} />
      )}
    </Container>
  );
}

export default Kid;