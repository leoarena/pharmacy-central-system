import { SCFarmaciasPage } from "../components/styledComponents";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import FarmaciasTable from "../components/FarmaciasTable";
import { useEffect, useState } from "react";
import { Button, Navbar } from "react-bootstrap";

export default function FarmaciasPage() {
  const [dadosFormulario, setDadosFormulario] = useState({});

  useEffect(() => {
    const dadosLocalStorage = JSON.parse(localStorage.getItem("dadosEmpresas"));
    if (dadosLocalStorage) setDadosFormulario(dadosLocalStorage);
  }, []);

  return (
    <SCFarmaciasPage>
      <Nav />
      <h1>Listagem de Farmácias</h1>
      <FarmaciasTable dadosFormulario={dadosFormulario} />
      <Link to="/cadastro-farmacia">
        <Button>Cadastrar nova farmácia</Button>
      </Link>
    </SCFarmaciasPage>
  );
}
