import axios from "axios";
import { useEffect, useState } from "react"

export const Products = () => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const url = "https://dummyjson.com/products";
        try {
            const result = await axios.get(url);
            setProducts(result.data.products)
        } catch (ex) {
            console.log(ex);
        }
    }
    useEffect(() => {
        getProducts();
    }, []);

    const buildProducts = () => {
        let result = products.map((item, index) => {
            return (
                <div className="col-md-3">
                    <div class=" card"
                        style={{
                            width: "30rem"
                        }} >
                        <img src="" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">{item.title}</p>
                            <p class="card-text">{item.description}</p>
                            <p class="card-text">{item.price}</p>
                            <button class="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            )
        });
        return result
    };

    return (
        <div className="row mt-5">
            {buildProducts()}
        </div>
    )
}