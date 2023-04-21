import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopMedical } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";

export default function NavComponent() {
  const { pathname: rotaAtual } = useLocation();
  const navigate = useNavigate();

  return (
    <Navbar bg="primary" expand="lg" style={{ height: "45px" }}>
      <FontAwesomeIcon icon={faLaptopMedical} className="fa-2x mx-2" />
      <span>Pharmacy Central System</span>
      {rotaAtual === "/" ? (
        <div className="ms-auto">
          <span className="pe-2">Login</span>
        </div>
      ) : (
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="/farmacias">Farmácias</Nav.Link>
            <Nav.Link href="/medicamentos">Medicamentos</Nav.Link>
            <Button onClick={() => navigate("/")}>Sair</Button>
          </Nav>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
}
