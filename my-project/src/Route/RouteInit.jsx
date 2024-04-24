import { createBrowserRouter } from "react-router-dom";
import Root from "../Page/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        // element: <Contact />,
      },
    ],
  },
]);
export default router;
