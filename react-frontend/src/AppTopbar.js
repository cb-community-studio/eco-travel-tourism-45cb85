import React, { useRef } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import classNames from "classnames";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { MegaMenu } from "primereact/megamenu";

const AppTopbar = (props) => {
    const history = useHistory();
    const userMenuRef = useRef(null);

    const toggleUserMenu = (e) => userMenuRef.current.toggle(e);
    const items = [
        {
            label: "Account",
            icon: "pi pi-flag",
            command: () => history.push("/account"),
        },
        {
            label: "LogOut",
            icon: "pi pi-fw pi-sign-out ",
            template: (item) => {
                return (
                    <ul className="p-menu-list p-reset border-top-1 border-200">
                        <li className="p-menu-list p-reset ">
                            <a className="p-menuitem-link" onClick={onLogout} role="menuitem">
                                <span className={"p-menuitem-icon pi pi-sign-out text-primary"}></span>
                                <span className={"p-menuitem-text text-primary"}>{item.label}</span>
                            </a>
                        </li>
                    </ul>
                );
            },
        },
    ];

    const onLogout = async () => {
        try {
            await props.logout();
            history.replace("/");
            toggleUserMenu();
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div className="layout-topbar h-9rem pr-7 pl-7 ">
            {/* {props.showSideMenuButton ? (
                <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                    <i className="pi pi-bars" />
                </button>
            ) : null} */}
            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
            </button>

            <ul className={classNames("layout-topbar-menu", { "layout-topbar-menu-mobile-active": props.mobileTopbarMenuActive })}>
                {props.onSettings ? (
                    <li>
                        <button className="p-link layout-topbar-button" onClick={props.onSettings}>
                            <i className="pi pi-cog" />
                            <span>Settings</span>
                        </button>
                    </li>
                ) : null}
                {props.onAccount ? (
                    <li>
                        <button className="p-link layout-topbar-button" onClick={props.onAccount}>
                            <i className="pi pi-user" />
                            <span>Profile</span>
                        </button>
                    </li>
                ) : null}

                {/* EcoWanderlust Title */}
                <Link to="/">
                    <div className="block cursor-pointer flex align-items-end">
                        {<img src={"assets/media/logo.svg"} height={30} className="layout-topbar-logo" />}
                        <h3 className="text-green-500" style={{ fontFamily: "MarlinGeo", fontWeight: "bolder", marginLeft: 8 }}>
                            EcoWanderlust
                        </h3>
                    </div>
                </Link>

                <div className="topbar-r">
                    {/* Hotline */}
                    <div className="hotline pr-4">
                        <div className="inline-block hot-line-text text-base font-bold">Hotline:</div>
                        <div className="inline-block hot-line-number">+602-3456-9994</div>
                    </div>
                    <div className="seperator"></div>

                    {/* login btn */}
                    {props.isLoggedIn ? (
                        <Button className="p-button-rounded p-button-success p-button-outlined ml-3" style={{ zIndex: 20 }} icon="pi pi-user" label={props.user?.email} onClick={toggleUserMenu} aria-controls="user-popup-menu" aria-haspopup />
                    ) : (
                        <Button label="Log In" className="login-btn border-transparent p-button-outlined font-light pr-4" onClick={() => history.push("/login")} />
                    )}

                    {/* signup btn */}
                    {!props.isLoggedIn ? (
                        <div className="sign-up-btn ">
                            <Button label="Sign up" className="p-button-success p-button-outlined w-10rem font-bold border-2" onClick={() => history.push("/signup")} />
                        </div>
                    ) : null}
                </div>
            </ul>

            {/* menu bar */}
            <div className="menubar-container">
                <ul className="nav-list">
                    {/* <Link to="/" style={{ textDecoration: "none" }}> */}
                    {/* <li>Flight + Hotel</li> */}
                    {/* </Link> */}
                    {/* <CustomLink to="/vegetables"> */}
                    <li className="nav-item">Tour Packages</li>
                    {/* </CustomLink> */}
                    {/* <CustomLink to="/fruits"> */}
                    <li className="nav-item">Attraction Tickets</li>
                    {/* </CustomLink>
                                        <CustomLink to="/rice"> */}
                    <li className="nav-item">Blog</li>
                    {/* </CustomLink> */}
                </ul>
            </div>
            {/* nav rightside-bar */}
            <Menu
                model={items}
                popup
                ref={userMenuRef}
                id="user-popup-menu"
                onClick={() => {
                    toggleUserMenu();
                }}
            />
        </div>
    );
};

const mapState = (state) => {
    const { isLoggedIn, user } = state.auth;
    return { isLoggedIn, user };
};
const mapDispatch = (dispatch) => ({
    logout: () => dispatch.auth.logout(),
});

export default connect(mapState, mapDispatch)(AppTopbar);
