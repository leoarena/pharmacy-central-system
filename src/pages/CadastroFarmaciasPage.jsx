import { useState } from "react";
import CadastroFarmaciasForm from "../components/CadastroFarmaciasForm";
import Nav from "../components/Nav";
import { SCCadastroFarmaciasPage } from "../components/styledComponents";

export default function CadastroFarmaciasPage() {
  useState(() => {
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
