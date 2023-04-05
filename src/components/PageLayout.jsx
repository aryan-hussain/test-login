import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar";

const PageLayout = () => {
    return (
        <>
         <Sidebar />
         <div>
         <Outlet/>
         </div>
        
        </>
    )
}

export default PageLayout