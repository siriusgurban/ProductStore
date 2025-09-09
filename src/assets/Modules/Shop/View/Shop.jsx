import { useEffect, useState } from "react";
import { ShopService } from "../Service/ShopService";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // show 6 items first

  const getData = async () => {
    try {
      const res = await ShopService.productList();
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6); // load 6 more each click
  };

  return (
    <section className="shop">
      <div className="container">
        <div className="row">
          <div className="productBox">
            {products.slice(0, visibleCount).map((item) => (
              <div className="productCard" key={item.id}>
                <div className="image">
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < products.length && (
            <div className="showMore">
              <button onClick={handleShowMore}>Show More</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop;
