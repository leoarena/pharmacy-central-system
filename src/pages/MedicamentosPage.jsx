import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MedicamentosTable from "../components/MedicamentosTable";
import { Button, Container } from "react-bootstrap";
import MedicamentosCard from "../components/MedicamentosCard";
import { ContextProvider } from "../contexts/DadosContext";

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
        <Link to="/cadastro-medicamento">
          <Button variant="success" className="m-1">
            Cadastrar novo medicamento
          </Button>
        </Link>
      </div>
      {visualizacao === "tabela" ? (
        <ContextProvider children={<MedicamentosTable />} />
      ) : (
        <ContextProvider children={<MedicamentosCard />} />
      )}
    </Container>
  );
}
