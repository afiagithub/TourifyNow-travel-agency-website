import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import TouristSpots from './pages/TouristSpots.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './providers/AuthProvider.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import PrivateRoute from './protected/PrivateRoute.jsx';
import SpotDetails from './pages/SpotDetails.jsx';
import MyList from './pages/MyList.jsx';
import UpdateSpot from './pages/UpdateSpot.jsx';
import CountryBasedSpot from './pages/CountryBasedSpot.jsx';
import { HelmetProvider } from 'react-helmet-async';
import SpotAttach from './pages/SpotAttach.jsx';
import CountryAttach from './pages/CountryAttach.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://afia-assignment-10-server.vercel.app/touristSpot")
      },
      {
        path: "/about",
        element: <About></About>,
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
        path: "/spots",
        element: <TouristSpots></TouristSpots>,
      },
      {
        path: "/addSpots",
        element: <PrivateRoute><SpotAttach></SpotAttach></PrivateRoute>
      },
      {
        path: "/spots/:id",
        element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://afia-assignment-10-server.vercel.app/touristSpot/${params.id}`)
      },
      {
        path: "/myList",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
      },
      {
        path: "/update/:id",
        element: <UpdateSpot></UpdateSpot>,
        loader: ({ params }) => fetch(`https://afia-assignment-10-server.vercel.app/touristSpot/${params.id}`)
      },
      {
        path: "/addCountry",
        element: <PrivateRoute><CountryAttach></CountryAttach></PrivateRoute>,
      },
      {
        path: "/countryBasedSpot/:name",
        element: <CountryBasedSpot></CountryBasedSpot>,
        loader: ({ params }) => fetch(`https://afia-assignment-10-server.vercel.app/countryList/${params.name}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
