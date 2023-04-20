import { useState } from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Modal,
  Table,
} from "react-bootstrap";

export default function FarmaciasTable({ dadosFormulario }) {
  const [empresaSelecionada, setEmpresaSelecionada] = useState(null);

  const botaoModal = (indexEmpresa) => {
    setEmpresaSelecionada(indexEmpresa);
  };

  return (
    <Table className="my-4">
      <thead>
        <tr>
          <th>Razão Social</th>
          <th>CNPJ</th>
          <th>Nome Fantasia</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Celular</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(dadosFormulario).map((indexEmpresa) => {
          const empresa = dadosFormulario[indexEmpresa];

          return (
            <tr key={indexEmpresa}>
              <td>{empresa.inputRazaoSocial}</td>
              <td>{empresa.inputCNPJ}</td>
              <td>{empresa.inputNomeFantasia}</td>
              <td>{empresa.inputEmail}</td>
              <td>{empresa.inputTelefone}</td>
              <td>{empresa.inputCelular}</td>
              <td>
                <Button onClick={() => botaoModal(indexEmpresa)}>
                  Ver mais
                </Button>
              </td>

              {empresaSelecionada === indexEmpresa && (
                <Modal show={true} onHide={() => setEmpresaSelecionada(null)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Informações completas</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ListGroup>
                      <ListGroupItem>
                        Razão Social: {empresa.inputRazaoSocial}
                      </ListGroupItem>
                      <ListGroupItem>CNPJ: {empresa.inputCNPJ}</ListGroupItem>
                      <ListGroupItem>
                        Nome Fantasia: {empresa.inputNomeFantasia}
                      </ListGroupItem>
                      <ListGroupItem>Email: {empresa.inputEmail}</ListGroupItem>
                      <ListGroupItem>
                        Telefone: {empresa.inputTelefone}
                      </ListGroupItem>
                      <ListGroupItem>
                        Celular: {empresa.inputCelular}
                      </ListGroupItem>
                      <ListGroupItem>CEP: {empresa.inputCEP}</ListGroupItem>
                      <ListGroupItem>
                        Logradouro: {empresa.inputLogradouro}
                      </ListGroupItem>
                      <ListGroupItem>
                        Número: {empresa.inputNumero}
                      </ListGroupItem>
                      <ListGroupItem>
                        Bairro: {empresa.inputBairro}
                      </ListGroupItem>
                      <ListGroupItem>
                        Cidade: {empresa.inputCidade}
                      </ListGroupItem>
                      <ListGroupItem>
                        Estado: {empresa.inputEstado}
                      </ListGroupItem>
                    </ListGroup>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setMedicamentoSelecionado(null)}>
                      Fechar
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
