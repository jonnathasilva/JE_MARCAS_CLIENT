import styled from 'styled-components';
import { useContext, useState } from 'react';
import { Context } from '../../context/ModalContext';
import { Contextt } from '../../context/SearchContext';
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";

const Modal = styled.nav`
position: fixed;
top: 0;
right: 0;
background-color: #FFF;
width: 100%;
height: 100vh;
padding: 2em;
transition: all .5s;
transform: ${props => props.isVisible ? "translateX(0)" : "translateX(900px)"};
visibility: ${props => props.isVisible ? "visible" : "hidden"};
z-index: 10;
`

const MenuHamburguer = styled.span`
background-color: black;
width: 100%;
height: 3px;
cursor: pointer;
position: absolute;
transition: all .5s;
&:nth-child(1) {
  top: 0px;
  transform: rotate(-40deg);
}
&:nth-child(2) {
  top: 0px;
  transform: rotate(40deg);
}
`

const ContainerMenu = styled.div`
display: none;
@media (max-width: 750px) {
  display: block;
  position: relative;
  width: 30px;
  height: 20px;
  cursor: pointer;
  &:hover ${MenuHamburguer} {
  transform: rotate(0deg);
}
}
`

const ContainerList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1em;
`

const StyledLink = styled(Link)`
margin-bottom: 1em;
text-decoration: none;
text-align: center;
color: black;
background-color: #f2d97d;
padding: 5px 0px;
width: 200px;
cursor: pointer;
border-radius: 5px;
&:hover {
  background-color: black;
  color: #f2d97d;
}
`

const SearchContainer = styled.form`
position: relative;
margin-bottom: 1em;
`

const Labal = styled.label`
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;
`

const Search = styled.input`
padding: 5px;
outline: none;
width: 200px;
`

const Submit = styled.input`
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;
`

const Linkk = styled(Link)``

function ModalMenu() {
  const [busca, setBusca] = useState('')
  const [menu, setMenu] = useContext(Context)
  const [search, setSearch] = useContext(Contextt)

  function OnOfMenu() {
    menu ? setMenu(false) : setMenu(true)
  }

  function handleInputChange(e) {
    e.preventDefault()
    setBusca(e.target.value)
  }

  function submit(e) {
    setSearch(busca)
    menu ? setMenu(false) : setMenu(true)
  }

  return (
    <Modal isVisible={menu}>
      <ContainerMenu onClick={OnOfMenu}>
        <MenuHamburguer />
        <MenuHamburguer />
      </ContainerMenu>
      <ContainerList>
        <SearchContainer>
          <Labal htmlFor='Search' >Busca</Labal>
          <Search type='text' id='Search' placeholder='Buscar..' onChange={handleInputChange} value={busca} />
          <AiOutlineSearch
            style={{
              position: 'absolute',
              top: 7,
              right: 7,
            }} />
          <Linkk to='/products' >
            <Submit onClick={submit} type='submit' />
          </Linkk>
        </SearchContainer>
        <StyledLink onClick={OnOfMenu} to='/' >Inicio</StyledLink>
        <StyledLink onClick={OnOfMenu} to='products/girl' >Feminino</StyledLink>
        <StyledLink onClick={OnOfMenu} to='products/men' >Masculino</StyledLink>
        <StyledLink onClick={OnOfMenu} to='products/kid' >Criança</StyledLink>
        <StyledLink onClick={OnOfMenu} to='products/accessories' >Acessórios</StyledLink>
      </ContainerList>
    </Modal>
  );
}

export default ModalMenu;