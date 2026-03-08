import { NavLink ,Link } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { RiUser4Line } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go"; 
import type { IconType } from "react-icons";
import Logo from "./Logo";

type SlideOption = {
  name: string;
  path: string;
  icon: IconType;
};

function Sidebar() {
  const slideOptions: SlideOption[] = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: TbLayoutDashboard,
    },
    {
      name: "Clients",
      path: "/clients",
      icon: RiUser4Line,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: GoProjectSymlink,
    },
  ];

  return (
    <div style={{position:'sticky', top:'0'}} className="relative w-65 h-screen bg-(--side-barbg) text-gray-300 dark:bg-(--zdark-color) flex flex-col px-6 py-8">
      
      {/* styling */}
      <div className="opacity-0 dark:opacity-100 absolute right-0 inset-y-0 w-[1.5px] h-full bg-[linear-gradient(to_bottom,#089BDC_0%,#089BDC_35%,rgba(8,155,220,0.6)_85%,transparent_100%)]"></div>
      {/* styling */}

      {/* Logo */}
      <div className="relative mb-10">
      {/* styling */}
      {/* <div className="absolute bottom-0 right-0 w-full h-[1.5px] bg-[linear-gradient(to_left,#089BDC_0%,#089BDC_35%,rgba(8,155,220,0.6)_60%,transparent_100%)]"></div>  */}
      {/* styling */}
      <Link to={'/'}>
        <Logo/>
      </Link>
      </div>

      {/* Menu */}
      <div>
        <p className="text-xs uppercase tracking-wider text-(--side-bar-sce-text) mb-4">
          Main Menu
        </p>

        <div className="flex flex-col gap-2">
          {slideOptions.map((opt) => {
            const Icon = opt.icon;

            return (
              <NavLink key={opt.name} to={opt.path} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${ isActive ? "bg-(--side-bar-option-active) text-(--zd5-color) shadow-md" : "hover:bg-(--side-bar-option-hover) hover:text-(--zd5-color)"}`}>
                <Icon className="text-lg" />
                {opt.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
