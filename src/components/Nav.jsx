import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopMedical } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";

export default function NavComponent() {
  const { pathname: rotaAtual } = useLocation();
  const navigate = useNavigate();

  return (
    <Navbar className="skyblue" expand="lg" style={{ height: "45px" }}>
      <FontAwesomeIcon icon={faLaptopMedical} className="fa-2x mx-2" />
      <span>Pharmacy Central System</span>
      {rotaAtual === "/" ? (
        <div className="ms-auto">
          <span className="me-2">Login</span>
        </div>
      ) : (
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Button variant="" href="/farmacias" className="border-0">
              Farmácias
            </Button>
            <Button variant="" href="/medicamentos" className="border-0">
              Medicamentos
            </Button>
            <Button
              variant="danger"
              onClick={() => navigate("/")}
              className="me-1 border-dark"
            >
              Sair
            </Button>
          </Nav>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
}
