import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
const MainLayout = () => {
    return (
        <div className="drawer lg:drawer-open"> 
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col ">
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu</label>
            {/* Content Start */}
            <Outlet></Outlet>
            {/* Content End */}
          </div> 
          {/* SideBar Start */}
          <Sidebar></Sidebar>
          {/* SideBar End */}
        </div>
    );
};

export default MainLayout;