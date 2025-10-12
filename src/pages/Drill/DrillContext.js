import React, { createContext, useState } from "react";

const DrillContext = createContext()

export const DrillProvider = ({children}) => {
    const [receive, setReceive] = useState("hello")

    return (
        <DrillContext.Provider value={{receive, setReceive}}>
            {children}
        </DrillContext.Provider>
    )
}

export default DrillContext;