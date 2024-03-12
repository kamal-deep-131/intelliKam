import { useState, useEffect } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false)

    const toogleMode = () => {
        setDarkMode((prev) => !prev)

    }

    useEffect(() => {
        darkMode ? document.getElementById('body').classList.add('dark') : document.getElementById('body').classList.remove('dark')
    }, [toogleMode])

    return (
        <header className="flex items-center justify-between p-5 bg-slate-100 text-zinc-950 dark:bg-zinc-950 dark:text-white cursor-pointer z-40">
            <div>Intelli<span className="font-bold text-green-500">Kam</span></div>
            <div onClick={toogleMode} className='flex items-center justify-center gap-2 text-sm text-green-500 cursor-pointer'>
                Light
                {darkMode ? <BsToggleOn size={30} /> : <BsToggleOff size={30} />}
                Dark
            </div>
        </header>
    )
}

export default Navbar