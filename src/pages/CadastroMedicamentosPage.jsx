import { H1 } from "../components/styledComponents";
import CadastroMedicamentosForm from "../components/CadastroMedicamentosForm";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function CadastroMedicamentosPage() {
  useEffect(() => {
    document.title = "Cadastro de Medicamentos";
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center">
      <H1>Cadastro de novo Medicamento</H1>
      <CadastroMedicamentosForm />
    </Container>
  );
}
