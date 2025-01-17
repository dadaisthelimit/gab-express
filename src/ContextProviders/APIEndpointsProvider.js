import React, {useState, createContext} from 'react'

export const apiEndpointContext = createContext()

function APIEndpointsProvider(props) {
    const { children } = props
    const [gabExpressApi, setGabExpressApi] = useState("https://e92c-136-158-41-37.ngrok-free.app")

    return (
        <apiEndpointContext.Provider value={{gabExpressApi, setGabExpressApi}}>{children}</apiEndpointContext.Provider>
    )
}

export default APIEndpointsProvider