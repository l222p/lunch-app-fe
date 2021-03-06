import React, { FC } from 'react';
import { Button, Navbar, Nav, Dropdown } from 'react-bootstrap'
import { useAuth0 } from '../context/Auth0Context';
import { Link } from 'react-router-dom';

const Navigation: FC = () => {
    const { isAuthenticated, loginWithRedirect, user, logout } = useAuth0();

    const logoutWithRedirect = () =>
        logout({
            returnTo: window.location.origin
        });
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Lunch Picker</Navbar.Brand>
            <Nav className="mr-auto">
                <Link className="nav-link" to="/lunch-picker">Get Lunch</Link>
                <Link className="nav-link" to="/lunch-form">Add Lunch</Link>
            </Nav>
            <Nav>
                {!isAuthenticated && (

                    <Button onClick={() => loginWithRedirect({})}>
                        Log in
                    </Button>

                )}

                {isAuthenticated && user && (
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            <img
                                src={user.picture}
                                alt="Profile"
                                className="nav-user-profile rounded-circle"
                                width="21"
                            />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => logoutWithRedirect()}>Log Out</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                )}
            </Nav>
        </Navbar>
    )
}

export default Navigation;