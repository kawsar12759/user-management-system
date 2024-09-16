import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home.jsx';
import AddUser from './components/AddUser.jsx';
import UpdateUser from './components/UpdateUser.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://user-management-server-qbzah4sa1-md-kawsar-hossains-projects.vercel.app/users')
      },
      {
        path: "/adduser",
        element: <AddUser></AddUser>
      },
      {
        path: "/updateuser/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({ params }) => fetch(`https://user-management-server-qbzah4sa1-md-kawsar-hossains-projects.vercel.app/users/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
