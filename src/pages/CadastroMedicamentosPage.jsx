import CadastroMedicamentosForm from "../components/CadastroMedicamentosForm";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { ContextProvider } from "../contexts/DadosContext";

export default function CadastroMedicamentosPage() {
  useEffect(() => {
    document.title = "Cadastro de Medicamentos";
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1 style={{ margin: "5vh 0" }}>Cadastro de novo Medicamento</h1>
      <ContextProvider children={<CadastroMedicamentosForm />} />
    </Container>
  );
}
