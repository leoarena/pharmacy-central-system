import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import MedicamentosTable from "../components/MedicamentosTable";
import { Button, Container } from "react-bootstrap";
import MedicamentosCard from "../components/MedicamentosCard";
import { H1 } from "../components/styledComponents";

export default function MedicamentosPage() {
  const [dadosFormulario, setDadosFormulario] = useState({});
  const [visualizacao, setVisualizacao] = useState("card");

  useEffect(() => {
    document.title = "Farmácias";
    const dadosLocalStorage = JSON.parse(
      localStorage.getItem("dadosMedicamentos")
    );
    if (dadosLocalStorage) setDadosFormulario(dadosLocalStorage);
  }, []);

  const alterarVisualizacao = () =>
    setVisualizacao(visualizacao === "tabela" ? "card" : "tabela");

  return (
    <>
      <Nav />
      <Container className="d-flex flex-column align-items-center">
        <H1>Listagem de Medicamentos</H1>
        <div>
          <Button onClick={alterarVisualizacao} className="m-1">
            {visualizacao === "tabela"
              ? "Visualizar como card"
              : "Visualizar como tabela"}
          </Button>
          <Link to="/cadastro-medicamento">
            <Button className="m-1">Cadastrar novo medicamento</Button>
          </Link>
        </div>
        {visualizacao === "tabela" ? (
          <MedicamentosTable dadosFormulario={dadosFormulario} />
        ) : (
          <MedicamentosCard dadosFormulario={dadosFormulario} />
        )}
      </Container>
    </>
  );
}
