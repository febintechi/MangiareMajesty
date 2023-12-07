import React, { createContext, useState, useEffect } from "react";
import { BREAKFASTITEMS } from "../../data/breakfastData/breakfastData";
import { LUNCHITEMS } from '../../data/lunchData/lunchData';
import { SNACKITEMS } from '../../data/snackData/snackData';
import { DINNERITEMS } from '../../data/dinnerData/dinnerData';
import { CAKEITEMS } from '../../data/cakeData/cakeData';

export const CartContext = createContext({
    cartItems: {
        breakfast: [],
        lunch: [],
        snacks: [],
        dinner: [],
        cakes: [],
    },
    getProductQuantity: (itemType,id) => { },
    addOneToCart: (itemType,id) => { },
    removeOneFromCart: (itemType,id) => { },
    deleteFromCart: (itemType,id) => { },
    getTotalCost: (itemType,id) => { },
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartProducts(storedCartItems);
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartProducts));
    }, [cartProducts]);

    function getProductQuantity(itemType, id) {
        const itemInCart = cartProducts.find(product => product.itemType === itemType && product.id === id);
        
        return itemInCart ? itemInCart.quantity : 0;
    }

    function addOneToCart(itemType, id) {
        const existingProduct = cartProducts.find(product => product.itemType === itemType && product.id === id);

        if (existingProduct) {
            setCartProducts(
                cartProducts.map(product =>
                    product.itemType === itemType && product.id === id ? { ...product, quantity: product.quantity + 1 } : product
                )
            );
        } else {
            const itemToAdd = getItemById(itemType, id);
            if (itemToAdd) {
                setCartProducts([...cartProducts, { ...itemToAdd, quantity: 1, itemType }]);
            } else {
                console.log("Item not found!");
                
            }
        }
    }

    function removeOneFromCart(itemType, id) {
        const quantity = getProductQuantity(itemType, id);
        
        if (quantity === 1) {
            deleteFromCart(itemType, id);
        } else {
            setCartProducts(
                cartProducts.map(product =>
                    product.itemType === itemType && product.id === id ? { ...product, quantity: product.quantity - 1 } : product
                )
            );
        }
    }

    function deleteFromCart(itemType, id) {
        setCartProducts(cartProducts.filter(product => !(product.itemType === itemType && product.id === id)));
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.forEach(cartItem => {
            totalCost += cartItem.price * cartItem.quantity;
        });
        
        return totalCost;
    }

    // Helper functions to get items by type and ID
    function getItemById(itemType, id) {
        const items = getItemsByType(itemType);
        return items.find(product => product.id === id) || null;
    }

    function getItemsByType(itemType) {
        switch (itemType) {
            case 'breakfast':
                return BREAKFASTITEMS;
            case 'lunch':
                return LUNCHITEMS;
            case 'snacks':
                return SNACKITEMS;
            case 'dinner':
                return DINNERITEMS;
            case 'cakes':
                return CAKEITEMS;
            default:
                return [];
        }
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
