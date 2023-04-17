import { SCFarmaciasPage } from "../components/styledComponents";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

export default function FarmaciasPage() {
  return (
    <SCFarmaciasPage>
      <Nav />
      <h1>Listagem de Farmácias</h1>
      <Link to='/cadastro-farmacia'>
        <button>Cadastrar nova farmácia</button>
      </Link>
    </SCFarmaciasPage>
  );
}
