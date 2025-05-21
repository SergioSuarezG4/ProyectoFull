import SideBar from "../SideBar";
import NavBar from "./NavBar"
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div>
                <SideBar />
            </div>
            <div className="mb-4">
                <Outlet />
            </div>
        </>
    );
}

export default Layout;