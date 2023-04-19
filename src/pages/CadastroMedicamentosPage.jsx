import { SCCadastroMedicamentosPage } from "../components/styledComponents";
import Nav from "../components/Nav";
import CadastroMedicamentosForm from "../components/CadastroMedicamentosForm";
import { useEffect } from "react";

export default function CadastroMedicamentosPage() {
  useEffect(() => {
    document.title = "Cadastro de Medicamentos";
  }, []);

  return (
    <SCCadastroMedicamentosPage>
      <Nav />
      <h1>Cadastro de novo Medicamento</h1>
      <CadastroMedicamentosForm />
    </SCCadastroMedicamentosPage>
  );
}
