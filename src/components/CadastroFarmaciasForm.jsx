import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

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
  const [inputLatitude, setInputLatitude] = useState("");
  const [inputLongitude, setInputLogintude] = useState("");
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
    inputLogradouro,
    inputNumero,
    inputBairro,
    inputCidade,
    inputEstado,
    inputComplemento,
    inputLatitude,
    inputLongitude,
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
    if (inputCEP.length === 9) buscarCEP();
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
    setInputLatitude("");
    setInputLogintude("");
  };

  return (
    <Form onSubmit={handleSubmit} className="skyblue p-2 rounded">
      <Row className="mb-2">
        <Col>
          <Form.Group className="">
            <Form.Label htmlFor="razao-social" className="mb-1">
              Razão Social:
            </Form.Label>
            <Form.Control
              type="text"
              name="razaoSocial"
              id="razao-social"
              required
              placeholder="Razão Social"
              value={inputRazaoSocial}
              onChange={(e) => setInputRazaoSocial(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="">
            <Form.Label htmlFor="cnpj" className="mb-1">
              CNPJ:
            </Form.Label>
            <Form.Control
              type="text"
              name="cnpj"
              id="cnpj"
              required
              placeholder="CNPJ"
              value={inputCNPJ}
              onChange={(e) => setInputCNPJ(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="">
            <Form.Label htmlFor="nome-fantasia" className="mb-1">
              Nome Fantasia:
            </Form.Label>
            <Form.Control
              type="text"
              name="nomeFantasia"
              id="nome-fantasia"
              required
              placeholder="Nome Fantasia"
              value={inputNomeFantasia}
              onChange={(e) => setInputNomeFantasia(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="">
            <Form.Label htmlFor="email" className="mb-1">
              Email:
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="">
            <Form.Label htmlFor="telefone" className="mb-1">
              Telefone:
            </Form.Label>
            <Form.Control
              type="tel"
              name="telefone"
              id="telefone"
              placeholder="Telefone"
              value={inputTelefone}
              onChange={(e) => setInputTelefone(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="">
            <Form.Label htmlFor="celular" className="mb-1">
              Celular:
            </Form.Label>
            <Form.Control
              type="tel"
              name="celular"
              id="celular"
              required
              placeholder="Celular"
              value={inputCelular}
              onChange={(e) => setInputCelular(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <hr />
      <Row className="mb-2">
        <Col xs={2}>
          <Form.Group className="">
            <Form.Label htmlFor="cep" className="mb-1">
              CEP:
            </Form.Label>
            <Form.Control
              type="text"
              name="cep"
              id="cep"
              required
              placeholder="CEP"
              value={inputCEP}
              onChange={(e) => setInputCEP(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="">
            <Form.Label htmlFor="logradouro" className="mb-1">
              Logradouro:
            </Form.Label>
            <Form.Control
              type="text"
              name="logradouro"
              id="logradouro"
              required
              placeholder="Logradouro"
              value={inputLogradouro}
              onChange={(e) => setInputLogradouro(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="">
            <Form.Label htmlFor="numero" className="mb-1">
              Número:
            </Form.Label>
            <Form.Control
              type="number"
              name="numero"
              id="numero"
              required
              placeholder="Número"
              value={inputNumero}
              onChange={(e) => setInputNumero(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Form.Group className="">
            <Form.Label htmlFor="bairro" className="mb-1">
              Bairro:
            </Form.Label>
            <Form.Control
              type="text"
              name="bairro"
              id="bairro"
              required
              placeholder="Bairro"
              value={inputBairro}
              onChange={(e) => setInputBairro(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="">
            <Form.Label htmlFor="cidade" className="mb-1">
              Cidade:
            </Form.Label>
            <Form.Control
              type="text"
              name="cidade"
              id="cidade"
              required
              placeholder="Cidade"
              value={inputCidade}
              onChange={(e) => setInputCidade(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="">
            <Form.Label htmlFor="estado" className="mb-1">
              Estado:
            </Form.Label>
            <Form.Control
              type="text"
              name="estado"
              id="estado"
              required
              placeholder="Estado"
              value={inputEstado}
              onChange={(e) => setInputEstado(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Form.Group className="">
            <Form.Label htmlFor="complemento" className="mb-1">
              Complemento:
            </Form.Label>
            <Form.Control
              type="text"
              name="complemento"
              id="complemento"
              placeholder="Complemento"
              value={inputComplemento}
              onChange={(e) => setInputComplemento(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={3}>
          <Form.Group className="">
            <Form.Label htmlFor="latitude" className="mb-1">
              Latitude:
            </Form.Label>
            <Form.Control
              type="text"
              name="latitude"
              id="latitude"
              placeholder="Latitude"
              value={inputLatitude}
              onChange={(e) => setInputLatitude(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={3}>
          <Form.Group className="">
            <Form.Label htmlFor="longitude" className="mb-1">
              Longitude:
            </Form.Label>
            <Form.Control
              type="text"
              name="longitude"
              id="longitude"
              placeholder="Longitude"
              value={inputLongitude}
              onChange={(e) => setInputLogintude(e.target.value)}
            />
          </Form.Group>
        </Col>
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
