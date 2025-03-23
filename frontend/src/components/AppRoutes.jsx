import {useRoutes} from "react-router-dom"
import HomePage from "../pages/HomePage"


export const AppRoutes =()=> {
    const  routes = useRoutes([
        {path:'/' , element: <HomePage/>}

    ]);

    return routes;
};


export default AppRoutes