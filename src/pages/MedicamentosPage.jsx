import Nav from "../components/Nav";
import { SCMedicamentosPage } from "../components/styledComponents";
import { Link } from "react-router-dom";

export default function MedicamentosPage() {
  return (
    <SCMedicamentosPage>
      <Nav />
      <h1>Listagem de Medicamentos</h1>
      <Link to='/cadastro-medicamento'>
        <button>Cadastrar novo medicamento</button>
      </Link>
    </SCMedicamentosPage>
  );
}
