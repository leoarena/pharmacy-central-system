import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export default function CadastroMedicamentosForm() {
  const [inputMedicamento, setInputMedicamento] = useState("");
  const [inputLaboratorio, setInputLaboratorio] = useState("");
  const [inputDosagem, setInputDosagem] = useState("");
  const [inputTipo, setInputTipo] = useState("");
  const [inputPrecoUnitario, setInputPrecoUnitario] = useState("");
  const [inputDescricao, setInputDescricao] = useState("");

  const [dadosMedicamentos, setDadosMedicamentos] = useState([]);

  useEffect(() => {
    const dadosLocalStorage = localStorage.getItem("dadosMedicamentos");
    if (dadosLocalStorage) setDadosMedicamentos(JSON.parse(dadosLocalStorage));
  }, []);

  const dadosNovoMedicamento = {
    inputMedicamento,
    inputLaboratorio,
    inputDosagem,
    inputTipo,
    inputPrecoUnitario,
    inputDescricao,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const dadosAtualizados = [...dadosMedicamentos, dadosNovoMedicamento];
      setDadosMedicamentos(dadosAtualizados);
      localStorage.setItem(
        "dadosMedicamentos",
        JSON.stringify(dadosAtualizados)
      );
      alert("Medicamento cadastrado com sucesso!");
      console.log("formulário submetido");
    } catch (error) {
      console.log("erro ao submeter formulário:", error);
    }
  };

  const limparInputs = () => {
    setInputMedicamento("");
    setInputLaboratorio("");
    setInputDosagem("");
    setInputTipo("");
    setInputPrecoUnitario("");
    setInputDescricao("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="item">
        <label htmlFor="medicamento">Medicamento:</label>
        <input
          type="text"
          name="medicamento"
          id="medicamento"
          required
          value={inputMedicamento}
          onChange={(e) => setInputMedicamento(e.target.value)}
        />
      </div>

      <div className="item">
        <label htmlFor="laboratorio">Laboratório:</label>
        <input
          type="text"
          name="laboratorio"
          id="laboratorio"
          required
          value={inputLaboratorio}
          onChange={(e) => setInputLaboratorio(e.target.value)}
        />
      </div>

      <div className="item">
        <label htmlFor="dosagem">Dosagem:</label>
        <input
          type="text"
          name="dosagem"
          id="dosagem"
          required
          value={inputDosagem}
          onChange={(e) => setInputDosagem(e.target.value)}
        />
      </div>

      <div className="item">
        <label htmlFor="tipo">Tipo:</label>
        <select
          name="tipo"
          id="tipo"
          required
          value={inputTipo}
          onChange={(e) => setInputTipo(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="controlado">Medicamento Controlado</option>
          <option value="comum">Medicamento Comum</option>
        </select>
      </div>

      <div className="item">
        <label htmlFor="preco-unitario">Preço Unitário:</label>
        <input
          type="number"
          name="preco-unitario"
          id="preco-unitario"
          value={inputPrecoUnitario}
          onChange={(e) => setInputPrecoUnitario(e.target.value)}
        />
      </div>

      {/* <div className="divider"></div> */}

      <div className="item">
        <label htmlFor="descricao">Descrição:</label>
        <textarea
          name="descricao"
          id="descricao"
          rows="5"
          value={inputDescricao}
          onChange={(e) => setInputDescricao(e.target.value)}
        />
      </div>

      <div className="botoes">
        <button type="button" onClick={limparInputs}>
          Limpar
        </button>
        <button type="submit">Salvar</button>
      </div>
    </Form>
  );
}
