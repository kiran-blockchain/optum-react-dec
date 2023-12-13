import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/CartReducer";

export const Products = ({handleAddToCart}) => {
    console.log("I am inside products");
    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);
    const cartContext = useContext(CartContext);
    const getProducts = async () => {
        console.log("I am inside the getProducts");
        const url = "https://dummyjson.com/products";
        try {
            const result = await axios.get(url);
            setProducts(result.data.products)
        } catch (ex) {
            console.log(ex);
        }
    }
    useEffect(() => {
        console.log("Products => Loading!!!!!")
        getProducts();
        return ()=>{
            //do clean up
            console.log("Products => Unloading!!!!!")
        };
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
                            <button class="btn btn-primary" onClick={e=>{
                               // cartContext.updateCart(item);
                               dispatch(addItemToCart(item));
                            }}>Add to Cart</button>
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