import Bookmark from "./Bookmark";
import Home from "./Home";
import { RouterProvider,createBrowserRouter } from "react-router-dom";


const Body = () => {
  const appRouter = createBrowserRouter([{
      path: "/",
      element: <Home />,
    },
    {
      path: "/bookmarks",   
      element: <Bookmark />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;