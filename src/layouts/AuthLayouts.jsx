import { Outlet } from "react-router-dom";


const AuthLayouts = () => {
    return (
        <div>
            <h1>Auth Layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayouts;