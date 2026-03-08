import { TbHeartHandshake } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { useState, useRef, useEffect } from "react"; 
import DarkMode from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";
import { RxExit } from "react-icons/rx";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { clearInfo } from "../store/authSlice";
import appwriteService from "../appwrite/appwrite";

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const userStatus = useSelector((state:RootState)=> state.auth.status)
  const user = useSelector((state:RootState)=> state.auth.data)


  const handleLogOut = async () => {
    try {
      await appwriteService.logout()
      dispatch(clearInfo())
      navigate('/')
    } catch (error) {
      console.log(`Error From Logout ${error}`);
    }finally{
      navigate('/')
    }
  }

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{position:'sticky', top:'0'}} className="z-20 relative h-16 flex items-center justify-between px-8 py-5 bg-(--zd5-color)/80 dark:bg-(--zdark-color) backdrop-blur-md border-b border-gray-200 dark:border-(--zdark-color)">
      
      {/* styling */}
      <div className="opacity-0 dark:opacity-100 absolute bottom-0 left-0 w-full h-[1.5px] bg-[linear-gradient(to_right,var(--zd1-color)_0%,var(--zd1-color)_35%,rgba(8,155,220,0.6)_85%,transparent_100%)]"></div> 
      {/* styling */}

      {/* Welcome */}
      {userStatus ? 
        <div className="flex items-center gap-2 capitalize bg-(--top-welcm-bg) text-(--zd11-color) px-4 py-1 rounded-full text-sm font-medium">
          <span>Welcome {user?.name}!</span>
          <TbHeartHandshake className="text-lg" />
        </div>
        :
        <Link to={'/'}>
          <Logo className="bg-(--zd10-color) text-(--zd11-color) dark:text-(--zd5-color) px-5 py-1 rounded-full dark:bg-transparent"/>
        </Link>
      }

      {/* Right Section */}
      <div className="flex items-center gap-4">

        <div>
          <DarkMode />
        </div>

        {/* Profile */}
        {userStatus ?
          <div ref={dropdownRef} className="relative flex items-center gap-3">
            <img
              src="https://testingbot.com/free-online-tools/random-avatar/300"
              alt="avatar"
              className="w-9 h-9 rounded-full object-cover"
            />

            <div
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center capitalize gap-1 cursor-pointer text-sm font-medium text-gray-700 dark:text-(--zd5-color)"
            >
              {user?.name}
              <IoIosArrowDown
                className={`transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Dropdown */}
            {isOpen && (
              <div onClick={handleLogOut} className="z-99 absolute right-0 top-12 w-40 bg-(--zd5-color) dark:bg-(--zdark-color) rounded-xl shadow-lg py-2">
                <h1 className="w-full text-left flex justify-between items-center px-5 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition">
                  Logout
                  <RxExit/>
                </h1>
              </div>
            )}
          </div>
          :
          <Link to='/sign-login' className="flex items-center gap-2 bg-(--top-welcm-bg) text-(--zd11-color) px-4 py-1 rounded-full text-sm font-medium">
            <span>Let's Start</span>
            <CiLogin className="text-lg" />
          </Link>
        }
      </div>
    </div>
  );
}

export default Topbar;
