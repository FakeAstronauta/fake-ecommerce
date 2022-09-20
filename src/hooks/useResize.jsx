import React from 'react'

export const useResize = () => {
    let [resized, setResized] = React.useState(window.innerWidth);
    
    window.onresize = () => {
        setResized(window.innerWidth);
    }
    
    return { resized, setResized }
}

export default useResize