import { useEffect, useState } from "react";
import { SCCadastroFarmaciasForm } from "./styledComponents";
import { useNavigate } from "react-router-dom";

export default function CadastroFarmaciasForm() {
  const [inputRazaoSocial, setInputRazaoSocial] = useState("");
  const [inputCNPJ, setInputCNPJ] = useState("");
  const [inputNomeFantasia, setInputNomeFantasia] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputTelefone, setInputTelefone] = useState("");
  const [inputCelular, setInputCelular] = useState("");
  const [inputCEP, setInputCEP] = useState("");
  const [inputNumero, setInputNumero] = useState("");
  const [inputComplemento, setInputComplemento] = useState("");
  const [inputLogradouro, setInputLogradouro] = useState("");
  const [inputBairro, setInputBairro] = useState("");
  const [inputCidade, setInputCidade] = useState("");
  const [inputEstado, setInputEstado] = useState("");
  const [dadosEmpresas, setDadosEmpresas] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const dadosLocalStorage = localStorage.getItem("dadosEmpresas");
    if (dadosLocalStorage) setDadosEmpresas(JSON.parse(dadosLocalStorage));
  }, []);

  const dadosNovaEmpresa = {
    inputRazaoSocial,
    inputCNPJ,
    inputNomeFantasia,
    inputEmail,
    inputTelefone,
    inputCelular,
    inputCEP,
    inputNumero,
    inputComplemento,
    inputLogradouro,
    inputBairro,
    inputCidade,
    inputEstado,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const dadosAtualizados = [...dadosEmpresas, dadosNovaEmpresa];
      setDadosEmpresas(dadosAtualizados);
      localStorage.setItem("dadosEmpresas", JSON.stringify(dadosAtualizados));
      alert("Empresa cadastrada com sucesso!");
      limparInputs();
      navigate("/farmacias");
    } catch (error) {
      console.log("erro ao submeter formulário:", error);
    }
  };

  useEffect(() => {
    if (inputCEP.length === 8) buscarCEP();
  }, [inputCEP]);

  const buscarCEP = () => {
    fetch(`https://viacep.com.br/ws/${inputCEP}/json/`)
      .then((resposta) => resposta.json())
      .then((objetoResposta) => inputsEndereco(objetoResposta))
      .catch((error) => console.log(error));
  };

  const inputsEndereco = (objeto) => {
    setInputLogradouro(objeto.logradouro);
    setInputBairro(objeto.bairro);
    setInputCidade(objeto.localidade);
    setInputEstado(objeto.uf);
  };

  const limparInputs = () => {
    setInputRazaoSocial("");
    setInputCNPJ("");
    setInputNomeFantasia("");
    setInputEmail("");
    setInputTelefone("");
    setInputCelular("");
    setInputCEP("");
    setInputLogradouro("");
    setInputNumero("");
    setInputBairro("");
    setInputCidade("");
    setInputEstado("");
    setInputComplemento("");
  };

  return (
    <SCCadastroFarmaciasForm onSubmit={handleSubmit}>
      <div className="item">
        <label htmlFor="razao-social">Razão Social:</label>
        <input
          type="text"
          name="razaoSocial"
          id="razao-social"
          required
          value={inputRazaoSocial}
          onChange={(e) => setInputRazaoSocial(e.target.value)}
        />
      </div>

      <div className="item">
        <label htmlFor="cnpj">CNPJ:</label>
        <input
          type="number"
          name="cnpj"
          id="cnpj"
          required
          value={inputCNPJ}
          onChange={(e) => setInputCNPJ(e.target.value)}
        />
      </div>

      <div className="item">
        <label htmlFor="nome-fantasia">Nome Fantasia:</label>
        <input
          type="text"
          name="nomeFantasia"
          id="nome-fantasia"
          required
          value={inputNomeFantasia}
          onChange={(e) => setInputNomeFantasia(e.target.value)}
        />
      </div>

      <div className="item">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
      </div>

      <div className="item">
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="tel"
          name="telefone"
          id="telefone"
          value={inputTelefone}
          onChange={(e) => setInputTelefone(e.target.value)}
        />
      </div>

      <div className="item">
        <label htmlFor="celular">Celular:</label>
        <input
          type="tel"
          name="celular"
          id="celular"
          required
          value={inputCelular}
          onChange={(e) => setInputCelular(e.target.value)}
        />
      </div>

      {/* <div className="divider"></div> */}

      <div className="item">
        <label htmlFor="cep">CEP:</label>
        <input
          type="number"
          name="cep"
          id="cep"
          required
          maxLength={8}
          value={inputCEP}
          onChange={(e) => setInputCEP(e.target.value)}
        />
      </div>

      <div className="item">
        <label htmlFor="logradouro">Logradouro:</label>
        <input
          type="text"
          name="logradouro"
          id="logradouro"
          required
          value={inputLogradouro}
          onChange={(e) => setInputLogradouro(e.target.value)}
        />
      </div>

      <div className="item">
        <label htmlFor="numero">Número:</label>
        <input
          type="number"
          name="numero"
          id="numero"
          required
          value={inputNumero}
          onChange={(e) => setInputNumero(e.target.value)}
        />
      </div>

      <div className="item">
        <label htmlFor="bairro">Bairro:</label>
        <input
          type="text"
          name="bairro"
          id="bairro"
          required
          value={inputBairro}
          onChange={(e) => setInputBairro(e.target.value)}
        />
      </div>

      <div className="item">
        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          name="cidade"
          id="cidade"
          required
          value={inputCidade}
          onChange={(e) => setInputCidade(e.target.value)}
        />
      </div>

      <div className="item">
        <label htmlFor="estado">Estado:</label>
        <input
          type="text"
          name="estado"
          id="estado"
          required
          value={inputEstado}
          onChange={(e) => setInputEstado(e.target.value)}
        />
      </div>

      <div className="item">
        <label htmlFor="complemento">Complemento:</label>
        <input
          type="text"
          name="complemento"
          id="complemento"
          value={inputComplemento}
          onChange={(e) => setInputComplemento(e.target.value)}
        />
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
        <button type="button" onClick={limparInputs}>
          Limpar
        </button>
        <button type="submit">Salvar</button>
      </div>
    </SCCadastroFarmaciasForm>
  );
}
