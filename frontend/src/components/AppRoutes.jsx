import {useRoutes} from "react-router-dom"
import HomePage from "../pages/HomePage"
// import ErrorBoundaries from "./ErrorBoundaries";
import ErrorPage from "../pages/404";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";


export const AppRoutes =()=> {
    const  routes = useRoutes([
        {path:'/' , element: <HomePage/>},
        {path: "/login", element: <LoginPage/>},
        {path:'/signup', element: <SignUpPage/>},
        {path: "*", element: <ErrorPage/>}

    ]);

    return(
        // <ErrorBoundaries>
            routes
        // </ErrorBoundaries>
    )

};



export default AppRoutes