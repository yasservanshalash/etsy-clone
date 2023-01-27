import { Product } from "../../types/types";
import { productActions } from "../slices/productsSlice";
import { AppDispatch } from "../store";

// const url = "http://localhost:3000/api/products";
const url = "https://fakestoreapi.com/products";

export function fetchProductData() {
    return async (dispatch: AppDispatch) => {
        const response = await fetch(url);
        const productData = await response.json();
        const data = productData.forEach((product: Product) => product.quantity = 1)
        dispatch(productActions.getProductsData(productData));
    }
}