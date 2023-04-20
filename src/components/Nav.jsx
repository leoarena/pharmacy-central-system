import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopMedical } from "@fortawesome/free-solid-svg-icons";
import { SCNav } from "./styledComponents";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Nav() {
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <SCNav>
      <div className="nav-left">
        <div className="icon">
          <FontAwesomeIcon icon={faLaptopMedical} />
        </div>
        <span>Pharmacy Central System</span>
      </div>
      {currentLocation === "/" ? (
        <div className="nav-right">
          <span>Login</span>
        </div>
      ) : (
        <div className="nav-right">
          <Link to="/farmacias">
            <Button className="nav-buttons">Farmácias</Button>
          </Link>
          <Link to="/medicamentos">
            <Button className="nav-buttons">Medicamentos</Button>
          </Link>
          <Link to="/">
            <Button className="nav-buttons sair-button">Sair</Button>
          </Link>
        </div>
      )}
    </SCNav>
  );
}
