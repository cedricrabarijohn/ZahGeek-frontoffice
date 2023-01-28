import * as React from "react";
import "./user-navbar.css";
import { NavbarInterface } from "./NavbarInterface";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserNavbar = () => {
  const inviso_navbar_container_ref = React.useRef(null);

  const navbar_menus_mock: Array<NavbarInterface> = [
    {
      link_name: "Vos demandes",
      link_href: "/app/requests",
      is_current: true,
    },
    {
      link_name: "Nouvelle demande",
      link_href: "/app/new-request",
    },
    {
      link_name: "IMPOTS",
      link_href: "/app/taxes",
    },
    {
      link_name: "FAQ",
      link_href: "/app/faq",
    },
    {
      link_name: "deconnection",
      link_href: "/signin",
      link_style:{
        // border:'1px solid red',
        borderRadius: 5,
        // padding: 15,
        color: 'red'
      }
    },
  ];

  const [navbar_menus, set_navbar_menus] = useState(navbar_menus_mock)

  const checkIfNavbarIsOpened = (
    navbar_to_check_ref: React.MutableRefObject<null>
  ): boolean => {
    if (navbar_to_check_ref.current === null) return false;
    const navbar_class_list = (navbar_to_check_ref.current as HTMLElement)
      .classList;
    const arr = [...navbar_class_list];
    if (arr.includes("navbar-open")) return true;
    else return false;
  };
  const openNavbar = (navbar_ref_to_open: React.MutableRefObject<null>) => {
    if (navbar_ref_to_open.current === null) return;
    if ((navbar_ref_to_open.current as HTMLElement).classList === null) return;
    (navbar_ref_to_open.current as HTMLElement).classList.add("navbar-open");
  };

  const closeNavbar = (
    navbar_ref_to_close: React.MutableRefObject<null>
  ): void => {
    if (navbar_ref_to_close.current === null) return;
    if ((navbar_ref_to_close.current as HTMLElement).classList === null) return;
    (navbar_ref_to_close.current as HTMLElement).classList.remove(
      "navbar-open"
    );
  };

  const handleToggleMobileNavbar = () => {
    if (inviso_navbar_container_ref.current === null) return;
    if ((inviso_navbar_container_ref.current as HTMLElement).classList === null)
      return;
    if (checkIfNavbarIsOpened(inviso_navbar_container_ref))
      closeNavbar(inviso_navbar_container_ref);
    else openNavbar(inviso_navbar_container_ref);
  };

  const handle_change_focus = (array_id: number) => {
    let new_array = [...navbar_menus]
    new_array = new_array.map((element,key)=>{
      if(array_id === key){
        element.is_current = true
      }else{
        element.is_current = false
      }
      return element
    })
    set_navbar_menus([...new_array])
  };
  return (
    <>
      <div id="inviso-navbar-container" ref={inviso_navbar_container_ref}>
        <div id="inviso-navbar-background"></div>
        <div id="inviso-navbar-left" className="inviso-navbar-field">
          <a href="/">{/* <img src={logo} alt="inviso-logo" /> */}</a>
         <div style={{paddingLeft: 40}}>
         Samedi, 28 janvier 2023
         </div>
        </div>
        <div id="inviso-navbar-center" className="">
          {navbar_menus &&
            navbar_menus.map((menu_item, key) => {
              let color = "rgb(190, 190, 190)";
              color = menu_item.is_current ? "blue" : color;
              return (
                <div className="navbar-menu" key={menu_item.link_name}>
                  <Link
                    onClick={() => {
                      handle_change_focus(key);
                      if (menu_item.onClick) {
                        menu_item.onClick();
                      }
                    }}
                    style={{
                      color: color,
                      ...menu_item.link_style
                    }}
                    to={menu_item.link_href}
                  >
                    {menu_item.link_name}
                  </Link>
                </div>
              );
            })}
        </div>
        <div id="inviso-navbar-right" className="inviso-navbar-field">
          <div id="inviso-navbar-button-border"></div>
          <div id="inviso-navbar-button" onClick={handleToggleMobileNavbar}>
            <div id="navbar-top-bar" className="navbar-bar"></div>
            <div id="navbar-middle-bar" className="navbar-bar"></div>
            <div id="navbar-bottom-bar" className="navbar-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserNavbar;
