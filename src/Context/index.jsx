import { useState, createContext } from 'react';

export const ShopingCartContext = createContext();

export const ShopingCartProvider =  ({ children }) => {

    const [count, setCount] = useState(0)
    
    return (
        <ShopingCartContext.Provider value={{
            count,
            setCount,
        }}>
            {children}
        </ShopingCartContext.Provider>
    );
}