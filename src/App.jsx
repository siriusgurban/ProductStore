import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./assets/Modules/Home/View/Home";
import Shop from "./assets/Modules/Shop/View/Shop";
import ShopDetails from "./assets/Modules/Shop/View/ShopDetails";
import FAQ from "./assets/Modules/FAQ/View/FAQ";
import SwiperCard from "./assets/Modules/Swiper/View/SwiperCard";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-details/:productId" element={<ShopDetails />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/swiper" element={<SwiperCard />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
