import {useRoutes} from "react-router-dom"
import HomePage from "../pages/HomePage"
// import ErrorBoundaries from "./ErrorBoundaries";
import ErrorPage from "../pages/404";


export const AppRoutes =()=> {
    const  routes = useRoutes([
        {path:'/' , element: <HomePage/>},
        {path: "*", element: <ErrorPage/>}

    ]);

    return(
        // <ErrorBoundaries>
            routes
        // </ErrorBoundaries>
    )

};



export default AppRoutes