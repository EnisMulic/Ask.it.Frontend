import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import style from "./Navbar.module.css";

import * as routeConsts from "../../constants/routes";
import * as actions from "../../store/user/auth";
import NotificationList from "../NotificationList";

const Navbar = () => {
    const auth = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const onLogout = useCallback(() => dispatch(actions.forceLogout()), [
        dispatch,
    ]);

    return (
        <>
            <Nav className={style.Nav}>
                <Nav.Item className="btn">
                    <Nav.Link>
                        <Link to={routeConsts.HOME_ROUTE}>Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="btn">
                    <Nav.Link>
                        <Link to={routeConsts.HOT_QUESTIONS_ROUTE}>
                            Hot Questions
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="btn">
                    <Nav.Link>
                        <Link to={routeConsts.TOP_USERS_ROUTE}>Top Users</Link>
                    </Nav.Link>
                </Nav.Item>
                <div className={style.Spacer} />
                {auth.token === null ? (
                    <>
                        <Nav.Item className="btn">
                            <Nav.Link>
                                <Link to={routeConsts.LOGIN_ROUTE}>Login</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="btn">
                            <Nav.Link>
                                <Link to={routeConsts.REGISTER_ROUTE}>
                                    Register
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                    </>
                ) : (
                    <>
                        <NotificationList className={style.Dropdown} />
                        <Nav.Item className="btn">
                            <NavDropdown
                                title="Profile"
                                id="basic-nav-dropdown"
                                className={style.Dropdown}
                            >
                                <NavDropdown.Item
                                    className={style.DropdownItem}
                                >
                                    <Link to={routeConsts.YOUR_QUESTIONS_ROUTE}>
                                        Your Questions
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    className={style.DropdownItem}
                                >
                                    <Link to={routeConsts.EDIT_USER_INFO_ROUTE}>
                                        Edit Profile
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className={style.DropdownItem}
                                >
                                    <Link
                                        to={routeConsts.CHANGE_PASSWORD_ROUTE}
                                    >
                                        Change Password
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                        <Nav.Item className="btn">
                            <Nav.Link
                                href="#"
                                className="text-white"
                                onClick={() => onLogout()}
                            >
                                Logout
                            </Nav.Link>
                        </Nav.Item>
                    </>
                )}
            </Nav>
        </>
    );
};

export default Navbar;
