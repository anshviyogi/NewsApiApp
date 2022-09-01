import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import {VscCheckAll} from 'react-icons/vsc'
import {BsGlobe} from 'react-icons/bs'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'
import { useState } from "react";
import {AnimatePresence,motion} from 'framer-motion'
import SidebarMenu from "./SidebarMenu";
import { Avatar } from "@mui/material";

const routes = [
  {
    path: "/",
    name: "Discover",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Smart Up",
    icon: <FaUser />,
  },
  {
    path: "/messages",
    name: "Main Community",
    icon: <Avatar alt="Avatar Image" src="https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />,
  },
  {
    path: "/analytics",
    name: "Fun Community",
    icon: <Avatar alt="Avatar Image" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />,
  },
  {
    path: "/order",
    name: "Tech Community",
    icon: <Avatar alt="Avatar Image" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />,
  },
  {
    path: "/order",
    name: "Lead Community",
    icon: <Avatar alt="Avatar Image" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />,
  },
  {
    path: "/file-manager",
    name: "Status",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Personal ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Completed",
        icon: <VscCheckAll />,
      },
      {
        path: "/settings/billing",
        name: "Read Later",
        icon: <FaMoneyBill />,
      },
    ],
  },

  {
    path: "/file-manager",
    name: "Social",
    icon: <BsGlobe />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Facebook",
        icon: <BsFacebook/>,
      },
      {
        path: "/settings/2fa",
        name: "Instagram",
        icon: <BsInstagram/>,
      },
      {
        path: "/settings/billing",
        name: "Twitter",
        icon: <BsTwitter/>,
      },
    ],
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            textAlign:"center",
            width: isOpen ? "200px" : "55px",
            position:"fixed",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Project
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
