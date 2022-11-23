import React, { createContext, useContext } from 'react'

const UserContext = createContext();

export const ResizeProvider = ({ children }) => {
    let [resized, setResized] = React.useState(window.innerWidth);
    
    window.onresize = () => {
        setResized(window.innerWidth);
    }

    return (
        <UserContext.Provider value={ resized }>
            {children}
        </UserContext.Provider>
    )
}

export const useResize = () => {
    return useContext(UserContext);
}