import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const cartReducer = (cart, action) => {
        let data;

        switch (action.type) {
            case 'ADD':
                data = action.payload;

                const newItem = {
                    'id': data.id,
                    'title': data.title,
                    'price': data.price
                }

                const isItemInCart = cart.some((item) => item.id === newItem.id);

                return !isItemInCart ? [...cart, newItem] : cart;
            
            case 'REMOVE':
                data = action.payload;

                return cart.filter((item) => item.id !== data.id);
            
            case 'CLEAR':
                return [];

            default:
                throw new Error('Invalid action type.')
        }
    }

    const [cart, dispatch] = useReducer(cartReducer, []);

    const contextValue = {
        cart,
        dispatch
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext);
}