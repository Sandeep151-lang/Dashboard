import React, { useState } from "react";
import Header from "../Header";
import logo from "../../images/chablogo.png";
import './layout.css'
import { Link } from "react-router-dom";
import { FaHome, FaTachometerAlt } from "react-icons/fa";
import { MdModelTraining } from "react-icons/md";

const Layout = ({ children }) => {
  const [open,isOpen] = useState(false)
    const routes =[
        {
        link:'/',
        name:"Dashboard",
        icon:<FaHome className="my-auto"/>
    },
    {
        link:'/Demo',
        name:"Analytics",
        icon:<FaTachometerAlt className="my-auto"/>
    },
    {
        link:'/',
        name:"Training",
        icon:<MdModelTraining className="my-auto"/>
    },
    {
      link:'/',
      name:"Dashboard",
      icon:<FaHome className="my-auto"/>
  },
  {
      link:'/Demo',
      name:"Demo",
      icon:<FaHome className="my-auto"/>
  },
  {
      link:'/',
      name:"Dashboard",
      icon:<FaHome className="my-auto"/>
  },
  {
    link:'/',
    name:"Dashboard",
    icon:<FaHome className="my-auto"/>
},
{
    link:'/Demo',
    name:"Demo",
    icon:<FaHome className="my-auto"/>
},
{
    link:'/',
    name:"Dashboard",
    icon:<FaHome className="my-auto"/>
},
{
  link:'/',
  name:"Dashboard",
  icon:<FaHome className="my-auto"/>
},
{
  link:'/Demo',
  name:"Demo",
  icon:<FaHome className="my-auto"/>
},
{
  link:'/',
  name:"Dashboard",
  icon:<FaHome className="my-auto"/>
},
{
  link:'/',
  name:"Dashboard",
  icon:<FaHome className="my-auto"/>
},
{
  link:'/Demo',
  name:"Demo",
  icon:<FaHome className="my-auto"/>
},
{
  link:'/',
  name:"Dashboard",
  icon:<FaHome className="my-auto"/>
},
{
  link:'/',
  name:"Dashboard",
  icon:<FaHome className="my-auto"/>
},
{
  link:'/Demo',
  name:"Demo",
  icon:<FaHome className="my-auto"/>
},
{
  link:'/',
  name:"Dashboard",
  icon:<FaHome className="my-auto"/>
}
]
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 gx-0 d-md-block  sidebar collapse position-sticky  border "
        >
          <div className="position-sticky h-100 ">
            <div className="logo-section border gx-0 position-sticky">
              <img className="logo mx-auto" src={logo} alt="logo" width={100}/>
            </div>
           
            <div className="menu  ">
                {routes?.map((item)=>{
                    return (
                        <div className=" gap-2 py-1 my-3  submenu">
                        <div className="d-flex gap-2   mx-4">
                          {/* <FaHome className="my-auto"/> */}
                          {item?.icon}
                        <Link className="links " to={item?.link}>{item?.name}</Link>
                        </div>
                    </div>
                    )
                })}
              
                
            </div>
          </div>
        </nav>
        <nav
          id="sidebarMenu"
          className={`col-md-3 col-lg-2 gx-0 d-lg-none  ${open ? 'collapse' : ''} sidebar border`}
        >
          <div className="position-sticky h-100 ">
            <div className="logo-section border gx-0 position-sticky">
              <img className="logo mx-auto" src={logo} alt="logo" width={100}/>
            </div>
           
            <div className="menu  ">
                {routes?.map((item)=>{
                    return (
                        <div className=" gap-2 py-1 my-3  submenu">
                        <div className="d-flex gap-2   mx-4">
                          {/* <FaHome className="my-auto"/> */}
                          {item?.icon}
                        <Link className="links " to={item?.link}>{item?.name}</Link>
                        </div>
                    </div>
                    )
                })}
              
                
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="main-content col-md-9 gx-0 col-lg-10 ">
          <Header isOpen={isOpen} open={open}/>
          <div className="pt-3 pb-3 px-md-4">
            {/* <h2>Dashboard</h2> */}
            {/* This is where the children (dynamic content) will be rendered */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
