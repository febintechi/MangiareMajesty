import React, { createContext, useState , useEffect} from "react";
import { BREAKFASTITEMS } from "../../data/breakfastData/products";

export const CartContext = createContext({
    cartItems: [], 
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);
     
     // Load cart items from localStorage on component mount
      useEffect(() => {
      const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartProducts(storedCartItems);
      }, []);

     // Save cart items to localStorage whenever cartProducts state changes
      useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartProducts));
      }, [cartProducts]);
   


    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        
        if (quantity === undefined){
            return 0;
        }
        return quantity;
    }

    function addOneToCart(id) {
        const existingProduct = cartProducts.find(product => product.id === id);

        if (existingProduct) {
            setCartProducts(
                cartProducts.map(product =>
                    product.id === id ? { ...product, quantity: product.quantity + 1 } : product
                )
            );
        } else {
            const productToAdd = BREAKFASTITEMS.find(product => product.id === id);
            if (productToAdd) {
                setCartProducts([...cartProducts, { ...productToAdd, quantity: 1 }]);
            }
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);
        
        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(product =>
                    product.id === id ? { ...product, quantity: product.quantity - 1 } : product
                )
            );
        }
    }

    function deleteFromCart(id) {
        setCartProducts(cartProducts.filter(product => product.id !== id));
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.forEach(cartItem => {
            totalCost += cartItem.price * cartItem.quantity;
        });
        
        return totalCost;
    }

    const contextValue = {
        cartItems: cartProducts, 
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
    };

    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

export default CartProvider;
