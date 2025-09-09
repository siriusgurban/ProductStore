import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { ShopService } from "../../Shop/Service/ShopService";



const SwiperCard = () => {
    const [products, setProducts] = useState([]);

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


    return (
        <section className="shop">
            <div className="container">
                <div className="row">
                    <div className="productBox">
                        <Swiper
                            pagination={{
                                type: 'progressbar',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {products.map((item) => (

                                <SwiperSlide>
                                    <div className="productCard" key={item.id}>
                                        <div className="image">
                                            <img src={item.image} alt={item.title} />
                                            <p>{item.title}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}


                        </Swiper>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default SwiperCard;
