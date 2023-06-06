import { useLocation, useNavigate } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopMedical } from "@fortawesome/free-solid-svg-icons";

export default function NavComponent() {
  const { pathname: rotaAtual } = useLocation();
  const navigate = useNavigate();

  return (
    <Navbar className="skyblue" expand="lg" style={{ height: "45px" }}>
      {rotaAtual === "/pharmacy-central-system/" && (
        <>
          <FontAwesomeIcon icon={faLaptopMedical} className="fa-2x mx-2" />
          <span>Pharmacy Central System</span>
          <div className="ms-auto">
            <span className="me-2">Login</span>
          </div>
        </>
      )}

      {rotaAtual !== "/pharmacy-central-system/" && (
        <>
          <Nav.Link
            href="/pharmacy-central-system/farmacias"
            className="d-flex align-items-center"
          >
            <FontAwesomeIcon icon={faLaptopMedical} className="fa-2x mx-2" />
            <span>Pharmacy Central System</span>
          </Nav.Link>
          <Navbar.Collapse>
            <Nav className="ms-auto">
              {rotaAtual === "/pharmacy-central-system/farmacias" ||
              rotaAtual === "/pharmacy-central-system/cadastro-farmacia" ? (
                <>
                  <Button
                    variant=""
                    href="/pharmacy-central-system/farmacias"
                    className="border-0 fw-bold"
                  >
                    Farmácias
                  </Button>
                  <Button
                    variant=""
                    href="/pharmacy-central-system/medicamentos"
                    className="border-0"
                  >
                    Medicamentos
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant=""
                    href="/pharmacy-central-system/farmacias"
                    className="border-0"
                  >
                    Farmácias
                  </Button>
                  <Button
                    variant=""
                    href="/pharmacy-central-system/medicamentos"
                    className="border-0 fw-bold"
                  >
                    Medicamentos
                  </Button>
                </>
              )}
              <Button
                variant="danger"
                onClick={() => navigate("/pharmacy-central-system/")}
                className="me-1 border-dark"
              >
                Sair
              </Button>
            </Nav>
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  );
}
