import './App.css'
import Blogs from './components/Blogs/Blogs'
import Brands from './components/Brands/Brands'
import CampaignSingle from './components/CampaignSingle/CampaignSingle'
import Campaigns from './components/Campaigns/Campaigns'
import Categories from './components/Categories/Categories'
import Footer from './components/Layout/Footer/Footer'
import Header from './components/Layout/Header/Header'
import Policy from './components/Layout/Policy/Policy'
import Products from './components/Products/Products'
import Slider from './components/Slider/Slider'

function App() {
  

  return (
    <>
    <Header></Header>
    <Slider></Slider>
    <Categories></Categories>
    <Products></Products>
    <Campaigns></Campaigns>
    <Blogs></Blogs>
    <Brands></Brands>
    <CampaignSingle></CampaignSingle>
    <Policy></Policy>
    <Footer></Footer>
    </>
  )
}

export default App
