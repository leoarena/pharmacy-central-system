import { SCFarmaciasPage } from "./styledComponents";
import Nav from "./Nav";
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
