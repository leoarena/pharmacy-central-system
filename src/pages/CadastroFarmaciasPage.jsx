import CadastroFarmaciasForm from "../components/CadastroFarmaciasForm";
import Nav from "../components/Nav";
import { SCCadastroFarmaciasPage } from "../components/styledComponents";

export default function CadastroFarmaciasPage() {
  return (
    <SCCadastroFarmaciasPage>
      <Nav />
      <h1>Cadastro de Nova Farmácia</h1>
      <CadastroFarmaciasForm />
    </SCCadastroFarmaciasPage>
  );
}
