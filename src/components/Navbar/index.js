import React from "react";
import { useSelector } from "react-redux";

import Nav from "react-bootstrap/Nav";
import style from "./Navbar.module.css";

import * as routeConsts from "../../constants/routes";

const Navbar = () => {
    const auth = useSelector((state) => state.auth);

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
                    <Nav.Item className="btn">Logout</Nav.Item>
                )}
            </Nav>
        </>
    );
};

export default Navbar;
