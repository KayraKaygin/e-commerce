import './App.css'
import Categories from './components/Layout/Categories/Categories'
import Footer from './components/Layout/Footer/Footer'
import Header from './components/Layout/Header/Header'
import Policy from './components/Layout/Policy/Policy'
import Products from './components/Layout/Products/Products'
import Slider from './components/Layout/Slider/Slider'

function App() {
  

  return (
    <>
    <Header></Header>
    <Slider></Slider>
    <Categories></Categories>
    <Products></Products>
    <Policy></Policy>
    <Footer></Footer>
    </>
  )
}

export default App
