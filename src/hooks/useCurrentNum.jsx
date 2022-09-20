import React from 'react'

const useCurrentNum = () => {
    let [currentNum, setCurrentNum] = React.useState(null);
    
    return { currentNum, setCurrentNum }
}

export default useCurrentNum