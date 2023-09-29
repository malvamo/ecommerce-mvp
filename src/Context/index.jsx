import { useState, createContext } from 'react';

export const ShopingCartContext = createContext();

export const ShopingCartProvider =  ({ children }) => {

    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = () => useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    return (
        <ShopingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
        }}>
            {children}
        </ShopingCartContext.Provider>
    );
}