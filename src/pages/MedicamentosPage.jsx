import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { SCMedicamentosPage } from "../components/styledComponents";
import { Link } from "react-router-dom";
import MedicamentosTable from "../components/MedicamentosTable";

export default function MedicamentosPage() {
  const [dadosFormulario, setDadosFormulario] = useState({});

  useEffect(() => {
    const dadosLocalStorage = JSON.parse(
      localStorage.getItem("dadosMedicamentos")
    );
    if (dadosLocalStorage) setDadosFormulario(dadosLocalStorage);
  }, []);

  return (
    <SCMedicamentosPage>
      <Nav />
      <h1>Listagem de Medicamentos</h1>
      <MedicamentosTable dadosFormulario={dadosFormulario} />
      <Link to="/cadastro-medicamento">
        <button>Cadastrar novo medicamento</button>
      </Link>
    </SCMedicamentosPage>
  );
}
