import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout"; 
import HomePage from "../pages/Home/HomePage";
import BlogPage from "../pages/Blog/BlogPage";


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/blog",
                element: <BlogPage/>
            },
         
        ]
    }
]);
export default router;