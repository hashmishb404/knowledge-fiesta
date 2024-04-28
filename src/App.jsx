import React from 'react'
import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Courses from './Components/Courses/Courses';
import AboutUs from './Components/AboutUs/AboutUs';
import Header from './Components/Header/Header';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Footer from './Components/Footer/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Courses",
    element: <Courses/>,
  },
  {
    path: "/AboutUs",
    element: <AboutUs/>,
  },
  {
    path: "/ChooseUs",
    element: <ChooseUs/>,
  },

]);
function App() {
  return (
    <>
    <Header/>
   <RouterProvider router={router} />
   <Footer/>
</>
   
  );
}

export default App;



