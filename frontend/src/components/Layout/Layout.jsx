import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

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