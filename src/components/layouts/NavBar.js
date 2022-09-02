import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { Context } from '../../context/ModalContext';
import { Contextt } from '../../context/SearchContext';
import { AiOutlineSearch } from "react-icons/ai";
import LOGO from '../../img/logo.png'

const Nav = styled.nav`
background-color:black;
padding: 1em;
display: flex;
justify-content: space-between;
align-items: center;
`
const Logo = styled.div`
width:120px;
`

const Linkk = styled(Link)``

const ImgLogo = styled.img`
width:120px;
height: 100%;
object-fit: cover;
`

const ContainerList = styled.div`
display:flex;
@media (max-width: 750px) {
  display: none;
}
`

const StyledLink = styled(Link)`
width: 100px;
padding: 5px 0px;
text-align: center;
text-decoration: none;
color: #f2d97d;
border-radius: 5px;
&:hover {
  background-color: #f2d97d;
  color: black;
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
}
`

const MenuHamburguer = styled.span`
background-color:#FFF;
width: 100%;
height: 3px;
cursor: pointer;

position: absolute;
&:nth-child(1) {
  top: 0px;
}
&:nth-child(2) {
  top: 7px;
}
&:nth-child(3) {
  top: 14px;
}
`

const SearchContainer = styled.form`
position: relative;
@media (max-width: 750px) {
  display: none;
}
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
width: 150px;
background: transparent;
border: none;
border-bottom: solid 1px #f2d97d;
color: #fff;
::placeholder {
  color: #fff;
}
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

function NavBar(props) {
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
  }

  return (
    <Nav>
      <Logo>
        <Linkk to='/'>
          <ImgLogo src={LOGO} alt='je marcas' />
        </Linkk>
      </Logo>
      <ContainerList>
        <StyledLink to='/' >Inicio</StyledLink>
        <StyledLink to='products/girl' >Feminino</StyledLink>
        <StyledLink to='products/men' >Masculino</StyledLink>
        <StyledLink to='products/kid' >Criança</StyledLink>
        <StyledLink to='products/accessories' >Acessórios</StyledLink>
      </ContainerList>
      <SearchContainer>
        <Labal htmlFor='Search' >Busca</Labal>
        <Search type='text' id='Search' placeholder='Buscar..' onChange={handleInputChange} value={busca} />
        <AiOutlineSearch
        color='#f2d97d'
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
          }} />
        <Linkk to='products' >
          <Submit onClick={submit} type='submit' />
        </Linkk>
      </SearchContainer>
      <ContainerMenu onClick={OnOfMenu}>
        <MenuHamburguer />
        <MenuHamburguer />
        <MenuHamburguer />
      </ContainerMenu>
    </Nav>
  )
}

export default NavBar