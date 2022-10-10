import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import useAuth from '../../hooks/useAuth';
import { Dropdown } from 'react-bootstrap';
import userImage from '../../assets/images/userImg.jpeg'

function CustomNavbar() {
  const { token } = useAuth();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className='text-light'>
            Blog-app
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <Link to="/">
              Home
              </Link>
              </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {
              token ?
                <Dropdown>
                  <Dropdown.Toggle style={{ background: 'transparent', border: 'none' }} id="dropdown-basic">
                    <img src={userImage} style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <Link to="/dashboard">
                        Dashboard
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <Link to="/user/sign-out">
                        Sign out
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                :
                <Link className="btn btn-light px-4" to="/user/login">
                  Login
                </Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;