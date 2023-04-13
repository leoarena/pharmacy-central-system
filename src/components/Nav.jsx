import { FaClinicMedical } from "react-icons/fa";
import { SCNav } from "./styledComponents";

export default function Nav() {
  return (
    <SCNav>
      <div className="nav-left">
        <div className="icon">
          <FaClinicMedical />
        </div>
        <p>Pharmacy Central System</p>
      </div>
      <div className="nav-right">
        <button className="nav-login">Login</button>
      </div>
    </SCNav>
  );
}
