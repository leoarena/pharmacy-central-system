import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopMedical } from "@fortawesome/free-solid-svg-icons";
import { SCNav } from "./styledComponents";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav() {
  const [navRightButtons, setnavRightButtons] = useState("nav-right");
  const [navRightLogin, setNavRightLogin] = useState("display-none");
  const [link, setLink] = useState(true);

  const location = useLocation();
  const currentLocation = location.pathname;

  useEffect(() => {
    if (currentLocation === "/") {
      setnavRightButtons("display-none");
      setNavRightLogin("nav-right");
      setLink(false);
    }
  }, []);

  return (
    <SCNav>
      {link ? (
        <Link to="/farmacias" className="link">
          <div className="nav-left">
            <div className="icon">
              <FontAwesomeIcon icon={faLaptopMedical} />
            </div>
            <span>Pharmacy Central System</span>
          </div>
        </Link>
      ) : (
        <div className="nav-left">
          <div className="icon">
            <FontAwesomeIcon icon={faLaptopMedical} />
          </div>
          <span>Pharmacy Central System</span>
        </div>
      )}

      <div className={navRightLogin}>
        <span>Login</span>
      </div>
      <div className={navRightButtons}>
        <Link to="/farmacias">
          <button className="nav-buttons">Farmácias</button>
        </Link>
        <Link to="/medicamentos">
          <button className="nav-buttons">Medicamentos</button>
        </Link>
        <Link to="/login">
          <button className="nav-buttons sair-button">Sair</button>
        </Link>
      </div>
    </SCNav>
  );
}
