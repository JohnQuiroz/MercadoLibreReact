import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

export interface CartType {
    id: number,
    image: string,
    alt: string,
    price: number,
    sale: string | null,
    delivery: boolean,
    svg: boolean
}

interface CartContextProps {
    cart: CartType[];
    setCart: Dispatch<SetStateAction<CartType[]>>;
    counter: number;
    setCounter: Dispatch<SetStateAction<number>>;
    totalPrice: number;
    setTotalPrice: Dispatch<SetStateAction<number>>;
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const useCartContext = () => useContext(CartContext);

interface CartContextProviderProps {
    children: JSX.Element;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [cart, setCart] = useState<CartType[]>([]);
    const [counter, setCounter] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    return (
        <CartContext.Provider value={{ cart, setCart, counter, setCounter, totalPrice, setTotalPrice }}>
            {children}
        </CartContext.Provider>
    )
}