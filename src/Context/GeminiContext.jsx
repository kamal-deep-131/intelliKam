import { createContext, useState } from "react";
import { run } from "../Gemini/Gemini";

export const GeminiContext = createContext(null)

export const ContextProvider = (props) => {
    const [prompt, setPrompt] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState(false)
    const [recentPrompt, setRecentPrompt] = useState("")


    return <GeminiContext.Provider value={
        {
            prompt,
            setPrompt,
            isLoading,
            setIsLoading,
            run,
            response,
            setResponse,
            setRecentPrompt,
            recentPrompt
        }
    }>
        {props.children}
    </GeminiContext.Provider>
}