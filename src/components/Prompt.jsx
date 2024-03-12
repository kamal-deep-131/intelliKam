import { useContext } from "react";
import { GeminiContext } from "../Context/GeminiContext";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Prompt = () => {
    const { prompt, setPrompt, run, setResponse, setIsLoading, setRecentPrompt } = useContext(GeminiContext)

    const promptController = async (e) => {
        setIsLoading(true)
        e.preventDefault()
        const response = await run(prompt)
        setRecentPrompt(prompt)
        setPrompt("")
        setIsLoading(false)
        setResponse(response)
    }

    return (
        <form onSubmit={(e) => { promptController(e) }} className="flex items-center justify-center fixed m-auto w-screen  bottom-4 z-14">
            <input type="text"
                onChange={(e) => {
                    setPrompt(e.target.value)

                }}
                value={prompt}
                className="text-lg text-black placeholder:text-black dark:placeholder:text-white dark:text-white outline-none bg-slate-150 bg-slate-100 dark:bg-black
                border-2 w-3/5 border-green-500 rounded-l-full  px-6 py-3" placeholder="Add Prompt" />
            <button type="submit" className="text-white border-2 border-green-500 rounded-r-full p-2 bg-green-500  px-6 py-3 cursor-pointer">
                <RiArrowRightDoubleLine className="text-white" size={28} />
            </button >
        </form>
    )
}

export default Prompt