import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { ContextProvider } from "../contexts/DadosContext";
import MedicamentosCard from "../components/MedicamentosCard";
import MedicamentosTable from "../components/MedicamentosTable";

export default function MedicamentosPage() {
  const [visualizacao, setVisualizacao] = useState("card");

  useEffect(() => {
    document.title = "Medicamentos";
  }, []);

  const alterarVisualizacao = () =>
    setVisualizacao(visualizacao === "tabela" ? "card" : "tabela");

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1 style={{ margin: "5vh 0" }}>Listagem de Medicamentos</h1>
      <div>
        <Button
          variant="secondary"
          onClick={alterarVisualizacao}
          className="m-1"
        >
          {visualizacao === "tabela"
            ? "Visualizar como card"
            : "Visualizar como tabela"}
        </Button>
        <Button variant="success" className="m-1" href="#/cadastro-medicamento">
          Cadastrar novo medicamento
        </Button>
      </div>
      {visualizacao === "card" ? (
        <ContextProvider children={<MedicamentosCard />} />
      ) : (
        <ContextProvider children={<MedicamentosTable />} />
      )}
    </Container>
  );
}
