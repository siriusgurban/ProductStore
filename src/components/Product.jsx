import { useParams } from 'react-router-dom'
import data from '../assets/db/data.js'

function Product() {

    const { id } = useParams()

    let product = data.find((item) => item.id === Number(id))

    return (
        <>
            <h1>{product.name}</h1>
            <p>{product.year}</p>
            <p>{product.price}</p>
            <p>{product.vol}</p>
            <p>{product.run}</p>
            <img src={product.img} alt="image" />

        </>
    )
}

export default Product