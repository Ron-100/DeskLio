import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import Footer from "../components/Footer"

function Layout() {

    const userStatus = useSelector((state:RootState)=> state.auth.status)

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex flex-1 min-h-0">
                {userStatus && <Sidebar />}
                <div className="flex flex-col flex-1 min-h-0">
                    <Topbar />
                    <div className="flex-1 overflow-y-auto">
                    <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
