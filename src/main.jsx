import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import TouristSpots from './pages/TouristSpots.jsx';
import AddSpot from './pages/AddSpot.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './providers/AuthProvider.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import PrivateRoute from './protected/PrivateRoute.jsx';
import SpotDetails from './pages/SpotDetails.jsx';
import MyList from './pages/MyList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/touristSpot")
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/spots",
        element: <TouristSpots></TouristSpots>,
        loader: () => fetch("http://localhost:5000/touristSpot")
      },
      {
        path: "/addSpots",
        element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>
      },
      {
        path: "/spots/:id",
        element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/touristSpot/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/myList",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
)
