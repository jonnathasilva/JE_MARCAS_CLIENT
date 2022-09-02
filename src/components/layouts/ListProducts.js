import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListContainer = styled.div`
display: flex;
flex-wrap: wrap;
`

const Product = styled.div`
margin: 0px calc(100% - 100%);
width: calc(100% / 5 );
padding: 0 10px;
margin-bottom: 1.8em;
@media (max-width: 1000px) {
  width: calc(100% / 4 ); 
}
@media (max-width: 730px) {
  width: calc(100% / 3 ); 
}
@media (max-width: 480px) {
  width: calc(100% / 2 ); 
  padding: 0 5px;
}
`

const ImgContainer = styled.div``

const Img = styled.img`
width: 100%;
height: 300px;
object-fit: cover;
`

const InfoContainer = styled.div`
height: 45px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top: 5px;
`

const Info = styled.p`
text-align:left ;
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
`

const Linkk = styled(Link)`
text-decoration: none;
`

function ListProducts({ products, search }) {
  return (
    <ListContainer>
      {products.filter(item => item.genre.toLowerCase().includes(search.toLocaleLowerCase())).map((item) => (
        <Product key={item._id}>
          <Linkk to={`/myproduct/${item._id}`} >
            <ImgContainer>
              <Img
                src={`https://jedados.com.br/images/products/${item.images[0]}`}
                alt={item.name}
              />
            </ImgContainer>
          </Linkk>
          <InfoContainer>
            <Linkk to={`/myproduct/${item._id}`} >
              <Info>{item.name}</Info>
            </Linkk>
            <Info>R${item.price}</Info>
          </InfoContainer>
        </Product>
      ))}
    </ListContainer>
  );
}

export default ListProducts;