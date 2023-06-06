import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DadosContext } from "../contexts/DadosContext";

export default function CadastroMedicamentosForm() {
  const [inputMedicamento, setInputMedicamento] = useState("");
  const [inputLaboratorio, setInputLaboratorio] = useState("");
  const [inputDosagem, setInputDosagem] = useState("");
  const [inputTipo, setInputTipo] = useState("");
  const [inputPrecoUnitario, setInputPrecoUnitario] = useState("");
  const [inputDescricao, setInputDescricao] = useState("");
  const { cadastrarMedicamento } = useContext(DadosContext);
  const navigate = useNavigate();

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
      cadastrarMedicamento(dadosNovoMedicamento);
      limparInputs();
      navigate("/pharmacy-central-system/medicamentos");
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
    <Form onSubmit={handleSubmit} className="skyblue p-2 rounded">
      <Row className="mb-2">
        <Col>
          <Form.Group>
            <Form.Label htmlFor="medicamento" className="mb-1">
              Medicamento:
            </Form.Label>
            <Form.Control
              type="text"
              name="medicamento"
              id="medicamento"
              required
              placeholder="Medicamento"
              value={inputMedicamento}
              onChange={(e) => setInputMedicamento(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label htmlFor="laboratorio" className="mb-1">
              Laboratório:
            </Form.Label>
            <Form.Control
              type="text"
              name="laboratorio"
              id="laboratorio"
              required
              placeholder="Laboratório"
              value={inputLaboratorio}
              onChange={(e) => setInputLaboratorio(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Form.Group>
            <Form.Label htmlFor="dosagem" className="mb-1">
              Dosagem:
            </Form.Label>
            <Form.Control
              type="text"
              name="dosagem"
              id="dosagem"
              required
              placeholder="Dosagem"
              value={inputDosagem}
              onChange={(e) => setInputDosagem(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label htmlFor="tipo" className="mb-1">
              Tipo:
            </Form.Label>
            <Form.Select
              name="tipo"
              id="tipo"
              required
              value={inputTipo}
              onChange={(e) => setInputTipo(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="Controlado">Medicamento Controlado</option>
              <option value="Comum">Medicamento Comum</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label htmlFor="preco-unitario" className="mb-1">
              Preço Unitário:
            </Form.Label>
            <Form.Control
              type="number"
              name="preco-unitario"
              id="preco-unitario"
              required
              placeholder="Preço Unitário"
              value={inputPrecoUnitario}
              onChange={(e) => setInputPrecoUnitario(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Group>
          <Form.Label htmlFor="descricao" className="mb-1">
            Descrição:
          </Form.Label>
          <Form.Control
            as="textarea"
            name="descricao"
            id="descricao"
            rows="5"
            placeholder="Descrição"
            value={inputDescricao}
            onChange={(e) => setInputDescricao(e.target.value)}
          />
        </Form.Group>
      </Row>
      <div className="mt-4 d-flex justify-content-end">
        <Button
          variant="light"
          type="button"
          onClick={limparInputs}
          className="mx-1"
        >
          Limpar
        </Button>
        <Button variant="success" type="submit" className="mx-1">
          Salvar
        </Button>
      </div>
    </Form>
  );
}
