import { SCCadastroMedicamentosPage } from "../components/styledComponents";
import Nav from "../components/Nav";
import CadastroMedicamentosForm from "../components/CadastroMedicamentosForm";

export default function CadastroMedicamentosPage() {
  return (
    <SCCadastroMedicamentosPage>
      <Nav />
      <h1>Cadastro de novo Medicamento</h1>
      <CadastroMedicamentosForm />
    </SCCadastroMedicamentosPage>
  );
}
