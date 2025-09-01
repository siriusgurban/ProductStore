import { Link, Route, Routes, useParams } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './Moduls/Home/View/Home.jsx'
import Shop from './Moduls/Shop/View/Shop.jsx'
import ShopDetails from './Moduls/Shop/View/ShopDetails.jsx'
function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop-slug/:id' element={<ShopDetails />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
        {/* <Home /> */}
      </div>
    </>
  )
}

export default App
