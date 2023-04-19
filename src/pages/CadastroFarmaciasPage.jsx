import { Container } from "react-bootstrap";
import CadastroFarmaciasForm from "../components/CadastroFarmaciasForm";
import { H1 } from "../components/styledComponents";
import { useEffect } from "react";

export default function CadastroFarmaciasPage() {
  useEffect(() => {
    document.title = "Cadastro de Farmácias";
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center">
      <H1>Cadastro de nova Farmácia</H1>
      <CadastroFarmaciasForm />
    </Container>
  );
}
