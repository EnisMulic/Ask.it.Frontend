import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import style from "./Navbar.module.css";

import * as routeConsts from "../../constants/routes";
import * as actions from "../../store/actions";

const Navbar = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const onLogout = useCallback(() => dispatch(actions.forceLogout()), [
        dispatch,
    ]);

    return (
        <>
            <Nav className={style.Nav}>
                <Nav.Item className="btn">
                    <Nav.Link
                        href={routeConsts.HOME_ROUTE}
                        className="text-white"
                    >
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="btn">
                    <Nav.Link
                        href={routeConsts.HOT_QUESTIONS_ROUTE}
                        className="text-white"
                    >
                        Hot Questions
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="btn">
                    <Nav.Link
                        href={routeConsts.TOP_USERS_ROUTE}
                        className="text-white"
                    >
                        Top Users
                    </Nav.Link>
                </Nav.Item>
                <div className={style.Spacer} />
                {auth.token === null ? (
                    <>
                        <Nav.Item className="btn">
                            <Nav.Link
                                href={routeConsts.LOGIN_ROUTE}
                                className="text-white"
                            >
                                Login
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="btn">
                            <Nav.Link
                                href={routeConsts.REGISTER_ROUTE}
                                className="text-white"
                            >
                                Register
                            </Nav.Link>
                        </Nav.Item>
                    </>
                ) : (
                    <>
                        <Nav.Item className="btn">
                            <NavDropdown
                                title="Profile"
                                id="basic-nav-dropdown"
                                className={style.Dropdown}
                            >
                                <NavDropdown.Item
                                    href={routeConsts.YOUR_QUESTIONS_ROUTE}
                                >
                                    Your Questions
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href={routeConsts.EDIT_USER_INFO_ROUTE}
                                >
                                    Edit Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href={routeConsts.CHANGE_PASSWORD_ROUTE}
                                >
                                    Change Password
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
