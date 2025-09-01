import React, { useEffect, useState } from 'react'
import { getProductService } from '../Services/index.js'

function Shop() {

    const [product, setProduct] = useState([])

    // useEffect(() => async () => {
    //     const data = await getProductService().then(res=>res.data)
    //     console.log(data, "data");
    //     setProduct(data)

    //     console.log(product);

    // }, [product])

    return (
        <div>Shop</div>
    )
}

export default Shop