import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Portada from "./Portada";
import Legislacion from "./Legislacion";
import Leyes from "./Leyes";
import Tramite from "./Tramite";
import Etica from "./Etica"
import Caracteristicas from "./Caracteristicas";
import Conclusiones from "./Conclusiones";
import imagenes from "../assets/imagenes";

const styles = {
  img:{
    width:"100px",
  },
}

function NavbarComp() {

  return (
    
    <Router>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to={"/Portada"}>
              <Image src={imagenes.img1} style={styles.img} rounded />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

                <Nav.Link as={Link} to={"/Portada"}>Portada</Nav.Link>

                <NavDropdown title="Contenido" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/Legislacion"}>Legislación</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/Leyes"}>Leyes</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/Tramite"}>Tramite</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/Etica"}>Etica</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/Caracteristicas"}>Caracteristicas</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/Conclusiones"}>Conclusiones</NavDropdown.Item>
                </NavDropdown>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/Portada" element={<Portada />} />
          <Route path="/Legislacion" element={<Legislacion />} />
          <Route path="/Leyes" element={<Leyes />} />
          <Route path="/Tramite" element={<Tramite />} />
          <Route path="/Etica" element={<Etica />} />
          <Route path="/Caracteristicas" element={<Caracteristicas />} />
          <Route path="/Conclusiones" element={<Conclusiones />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NavbarComp;
