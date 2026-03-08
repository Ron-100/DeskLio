import { useState, useEffect } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

function DarkMode() {

    const [isDark, setIsdark] = useState<boolean>(false)

    useEffect(()=>{
        const currentMode = document.documentElement.classList.contains('dark');
        setIsdark(currentMode)
    },[])

    const swithcMode = () => {
        document.documentElement.classList.toggle('dark')
        setIsdark((prev) => !prev)
    } 

    return (
        <>
            <div onClick={swithcMode} className=" cursor-pointer bg-(--zd5-color) border border-(--zd11-color) dark:bg-(--zdark-color) p-2.5 rounded-full shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)]">
                {isDark ? (
                    <CiLight className="text-[20px] text-(--zd11-color)"/>
                ) : (
                    <CiDark className="text-[20px] text-(--zd11-color)"/>
                ) }
            </div>
        </>        
    )
}

export default DarkMode
