import { createContext, useState, useContext } from "react";

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true); 

    return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        {children}
    </LoadingContext.Provider>
    );
}

export function useLoading() {
    return useContext(LoadingContext); 
}