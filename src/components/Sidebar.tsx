import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-10 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <label htmlFor="">Menu</label>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/charts-and-maps">Charts and Maps</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;