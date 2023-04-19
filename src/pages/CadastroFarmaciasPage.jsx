import CadastroFarmaciasForm from "../components/CadastroFarmaciasForm";
import Nav from "../components/Nav";
import { SCCadastroFarmaciasPage } from "../components/styledComponents";
import { useEffect } from "react";

export default function CadastroFarmaciasPage() {
  useEffect(() => {
    document.title = "Cadastro de Farmácias";
  }, []);

  return (
    <SCCadastroFarmaciasPage>
      <Nav />
      <h1>Cadastro de nova Farmácia</h1>
      <CadastroFarmaciasForm />
    </SCCadastroFarmaciasPage>
  );
}
