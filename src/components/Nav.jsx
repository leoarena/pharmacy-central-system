import { FaClinicMedical } from "react-icons/fa";
import { SCNav } from "./styledComponents";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <SCNav>
      <Link to="/farmacias" className="link">
        <div className="nav-left">
          <div className="icon">
            <FaClinicMedical />
          </div>
          <span>Pharmacy Central System</span>
        </div>
      </Link>
      <div className="nav-right">
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
