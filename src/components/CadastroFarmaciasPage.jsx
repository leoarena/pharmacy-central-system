import CadastroFarmaciasForm from "./CadastroFarmaciasForm";
import Nav from "./Nav";
import { SCCadastroFarmaciasPage } from "./styledComponents";

export default function CadastroFarmaciasPage() {
  return (
    <SCCadastroFarmaciasPage>
      <Nav />
      <h1>Cadastro de Nova Farmácia</h1>
      <CadastroFarmaciasForm />
    </SCCadastroFarmaciasPage>
  );
}
