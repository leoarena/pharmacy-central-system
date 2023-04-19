import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopMedical } from "@fortawesome/free-solid-svg-icons";
import { SCNav } from "./styledComponents";
import { Link, useLocation } from "react-router-dom";

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
            <button className="nav-buttons">Farmácias</button>
          </Link>
          <Link to="/medicamentos">
            <button className="nav-buttons">Medicamentos</button>
          </Link>
          <Link to="/">
            <button className="nav-buttons sair-button">Sair</button>
          </Link>
        </div>
      )}
    </SCNav>
  );
}
