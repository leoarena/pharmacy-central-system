import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { ContextProvider } from "../contexts/DadosContext";
import FarmaciasMap from "../components/FarmaciasMap";
import FarmaciasTable from "../components/FarmaciasTable";

export default function FarmaciasPage() {
  const [visualizacao, setVisualizacao] = useState("mapa");

  useEffect(() => {
    document.title = "Farmácias";
  }, []);

  const alterarVisualizacao = () =>
    setVisualizacao(visualizacao === "mapa" ? "tabela" : "mapa");

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1 style={{ margin: "5vh 0" }}>Listagem de Farmácias</h1>
      <div>
        <Button
          variant="secondary"
          onClick={alterarVisualizacao}
          className="m-1"
        >
          {visualizacao === "mapa"
            ? "Visualizar como tabela"
            : "Visualizar como mapa"}
        </Button>
        <Button variant="success" className="m-1" href="/cadastro-farmacia">
          Cadastrar nova farmácia
        </Button>
      </div>
      {visualizacao === "mapa" ? (
        <ContextProvider children={<FarmaciasMap />} />
      ) : (
        <ContextProvider children={<FarmaciasTable />} />
      )}
    </Container>
  );
}
