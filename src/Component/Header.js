import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../Actions/UserAction";

function Header() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="Link" to="/">
              Grochary
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
              {/* {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Link to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </Link>
              )} */}
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/profile">profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown title="User Infor" id="username">
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
// import { Link, Route } from "react-router-dom";
// import { logout } from "../Actions/UserAction";

// function Header() {
//   const dispatch = useDispatch();

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const logoutHandler = () => {
//     dispatch(logout);
//   };
//   return (
//     <header>
//       <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
//         <Container>
//           <Link to="/">
//             <Navbar.Brand>ProShop</Navbar.Brand>
//           </Link>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Route />
//             <Nav className="ml-auto">
//               <Link to="/cart">
//                 <Nav.Link>
//                   <i className="fas fa-shopping-cart"></i> Cart
//                 </Nav.Link>
//               </Link>
//               {userInfo ? (
//                 <NavDropdown title={userInfo.name} id="username">
//                   <Link to="/profile">
//                     <NavDropdown.Item>Profile</NavDropdown.Item>
//                   </Link>
//                   <NavDropdown.Item onClick={logoutHandler}>
//                     Logout
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               ) : (
//                 <Link to="/login">
//                   <Nav.Link>
//                     <i className="fas fa-user"></i> Sign In
//                   </Nav.Link>
//                 </Link>
//               )}
//               {userInfo && userInfo.isAdmin && (
//                 <NavDropdown title="Admin" id="adminmenu">
//                   <Link to="/admin/userlist">
//                     <NavDropdown.Item>Users</NavDropdown.Item>
//                   </Link>
//                   <Link to="/admin/productlist">
//                     <NavDropdown.Item>Products</NavDropdown.Item>
//                   </Link>
//                   <Link to="/admin/orderlist">
//                     <NavDropdown.Item>Orders</NavDropdown.Item>
//                   </Link>
//                 </NavDropdown>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// }

// export default Header;
