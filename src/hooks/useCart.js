import { useSelector } from "react-redux"
import { selectCartItems } from "../redux/slice/cartSlice"

export const useCart = () => {
    const products = useSelector(selectCartItems);
}