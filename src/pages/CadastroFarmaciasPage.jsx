import { Container } from "react-bootstrap";
import CadastroFarmaciasForm from "../components/CadastroFarmaciasForm";
import { useEffect } from "react";

export default function CadastroFarmaciasPage() {
  useEffect(() => {
    document.title = "Cadastro de Farmácias";
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1 style={{ margin: "5vh 0" }}>Cadastro de nova Farmácia</h1>
      <CadastroFarmaciasForm />
    </Container>
  );
}
