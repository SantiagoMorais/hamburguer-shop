import React, { createContext, useEffect, useState } from "react";

export interface ISnackData {
    id: number;
    name: string;
    flavor?: string;
    ml?: number;
    price: number;
    image: string;
    ingredients?: string[];
    weight?: string;
}

interface ICartContext {
    cartItems: ISnackData[],
    setCartItems: React.Dispatch<React.SetStateAction<ISnackData[]>>,
}

export const CartContext = createContext<ICartContext>({cartItems: [], setCartItems: () => {}});

interface ICartProviderProps {
    children: React.ReactNode;
}

export const CartProvider: React.FC<ICartProviderProps> = ({children}) => {
    const [cartItems, setCartItems] = useState<ISnackData[]>(() => {
        const localCartData = localStorage.getItem('cartData');
        return localCartData ? JSON.parse(localCartData) : [];
    });

    useEffect(() => {
        window.localStorage.setItem('cartData', JSON.stringify(cartItems));
    }, [cartItems])

    return (
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}