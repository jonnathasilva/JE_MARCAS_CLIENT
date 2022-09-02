import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components';

// Pages
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import MyProduct from './components/pages/MyProduct';
import Girl from './components/pages/Girl';
import Men from './components/pages/Men';
import Kid from './components/pages/kid';
import Accessories from './components/pages/Accessories';
// Layouts
import NavBar from './components/layouts/NavBar';
import ModalMenu from './components/layouts/ModalMenu.';
import Footer from './components/layouts/Footer';
// Context
import { ModalContext } from './context/ModalContext';
import { SearchContext } from './context/SearchContext';

const Header = styled.header``

const Main = styled.main``

function App() {
  return (
    <>
      <HashRouter>
        <SearchContext>
          <ModalContext>
            <Header>
              <NavBar />
              <ModalMenu />
            </Header>
            <Main>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='products/girl' element={<Girl />} />
                <Route path='products/men' element={<Men />} />
                <Route path='products/kid' element={<Kid />} />
                <Route path='products/accessories' element={<Accessories />} />
                <Route path='products' element={<Products />} />
                <Route path='myproduct/:id' element={<MyProduct />} />
                <Route path='*' element={<Navigate to='/' />} />
              </Routes>
            </Main>
            <Footer />
          </ModalContext>
        </SearchContext>
      </HashRouter>
    </>
  )
}

export default App