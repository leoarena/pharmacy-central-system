import { SCCadastroFarmaciasForm } from "./styledComponents";

export default function CadastroFarmaciasForm() {
  return (
    <SCCadastroFarmaciasForm>
      <div className="item">
        <label htmlFor="razao-social">Razão Social</label>
        <input type="text" name="razao-social" id="razao-social" required />
      </div>

      <div className="item">
        <label htmlFor="cnpj">CNPJ</label>
        <input type="number" name="cnpj" id="cnpj" required />
      </div>

      <div className="item">
        <label htmlFor="nome-fantasia">Nome Fantasia</label>
        <input type="text" name="nome-fantasia" id="nome-fantasia" required />
      </div>

      <div className="item">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>

      <div className="item">
        <label htmlFor="telefone">Telefone</label>
        <input type="tel" name="telefone" id="telefone" />
      </div>

      <div className="item">
        <label htmlFor="celular">Celular</label>
        <input type="tel" name="celular" id="celular" required />
      </div>

      {/* <div className="divider"></div> */}

      <div className="item">
        <label htmlFor="cep">CEP</label>
        <input type="number" name="cep" id="cep" required />
      </div>

      <div className="item">
        <label htmlFor="logradouro">Logradouro</label>
        <input type="text" name="logradouro" id="logradouro" required />
      </div>

      <div className="item">
        <label htmlFor="numero">Número</label>
        <input type="number" name="numero" id="numero" required />
      </div>

      <div className="item">
        <label htmlFor="bairro">Bairro</label>
        <input type="text" name="bairro" id="bairro" required />
      </div>

      <div className="item">
        <label htmlFor="cidade">Cidade</label>
        <input type="text" name="cidade" id="cidade" required />
      </div>

      <div className="item">
        <label htmlFor="estado">Estado</label>
        <input type="text" name="estado" id="estado" required />
      </div>

      <div className="item">
        <label htmlFor="complemento">Complemento</label>
        <input type="text" name="complemento" id="complemento" />
      </div>

      {/* <div className="item">
        <label htmlFor="latitude">Latitude</label>
        <input type="text" name="latitude" id="latitude" />
      </div>

      <div className="item">
        <label htmlFor="longitude">Longitude</label>
        <input type="text" name="longitude" id="longitude" />
      </div> */}

      <div className="botoes">
        <button type="button">Limpar</button>
        <button type="submit">Salvar</button>
      </div>
    </SCCadastroFarmaciasForm>
  );
}
