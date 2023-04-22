import { Link } from "react-router-dom";
import FarmaciasTable from "../components/FarmaciasTable";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { H1 } from "../components/styledComponents";
import FarmaciasMap from "../components/FarmaciasMap";

export default function FarmaciasPage() {
  const [dadosFormulario, setDadosFormulario] = useState({});
  const [visualizacao, setVisualizacao] = useState("mapa");

  useEffect(() => {
    document.title = "Farmácias";
    const dadosLocalStorage = JSON.parse(localStorage.getItem("dadosEmpresas"));
    if (dadosLocalStorage) setDadosFormulario(dadosLocalStorage);
  }, []);

  const alterarVisualizacao = () =>
    setVisualizacao(visualizacao === "mapa" ? "tabela" : "mapa");

  return (
    <Container className="d-flex flex-column align-items-center">
      <H1>Listagem de Farmácias</H1>
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
        <Link to="/cadastro-farmacia">
          <Button variant="success" className="m-1">
            Cadastrar nova farmácia
          </Button>
        </Link>
      </div>
      {visualizacao === "mapa" ? (
        <FarmaciasMap dadosFormulario={dadosFormulario} />
      ) : (
        <FarmaciasTable dadosFormulario={dadosFormulario} />
      )}
    </Container>
  );
}
