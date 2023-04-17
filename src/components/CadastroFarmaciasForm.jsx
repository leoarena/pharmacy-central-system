import { SCCadastroFarmaciasForm } from "./styledComponents";

export default function CadastroFarmaciasForm() {
  return (
    <SCCadastroFarmaciasForm>
      <div className="item">
        <label htmlFor="razao-social">Razão Social</label>
        <input type="text" name="razao-social" required />
      </div>

      <div className="item">
        <label htmlFor="cnpj">CNPJ</label>
        <input type="number" name="cnpj" required />
      </div>

      <div className="item">
        <label htmlFor="nome-fantasia">Nome Fantasia</label>
        <input type="text" name="nome-fantasia" required />
      </div>

      <div className="item">
        <label htmlFor="e-mail">E-mail</label>
        <input type="email" name="e-mail" required />
      </div>

      <div className="item">
        <label htmlFor="telefone">Telefone</label>
        <input type="tel" name="telefone" />
      </div>

      <div className="item">
        <label htmlFor="celular">Celular</label>
        <input type="number" name="celular" required />
      </div>

      {/* <div className="divider"></div> */}

      <div className="item">
        <label htmlFor="cep">CEP</label>
        <input type="number" name="cep" required />
      </div>

      <div className="item">
        <label htmlFor="logradouro">Logradouro</label>
        <input type="text" name="logradouro" required />
      </div>

      <div className="item">
        <label htmlFor="numero">Número</label>
        <input type="number" name="numero" required />
      </div>

      <div className="item">
        <label htmlFor="bairro">Bairro</label>
        <input type="text" name="bairro" required />
      </div>

      <div className="item">
        <label htmlFor="cidade">Cidade</label>
        <input type="text" name="cidade" required />
      </div>

      <div className="item">
        <label htmlFor="estado">Estado</label>
        <input type="text" name="estado" required />
      </div>

      <div className="item">
        <label htmlFor="complemento">Complemento</label>
        <input type="text" name="complemento" />
      </div>

      <div className="item">
        <label htmlFor="latitude">Latitude</label>
        <input type="text" name="latitude" />
      </div>

      <div className="item">
        <label htmlFor="longitude">Longitude</label>
        <input type="text" name="longitude" />
      </div>

      <div className="botoes">
        <button>Limpar</button>
        <button>Salvar</button>
      </div>
    </SCCadastroFarmaciasForm>
  );
}
