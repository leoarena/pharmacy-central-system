import { useContext } from "react";
import {
  Table,
  Button,
  Modal,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { DadosContext } from "../contexts/DadosContext";

export default function FarmaciasTable() {
  const {
    empresasLocalStorage,
    botaoModal,
    itemSelecionado,
    setItemSelecionado,
    removerEmpresa,
  } = useContext(DadosContext);

  return empresasLocalStorage.length === 0 ? (
    <span className="mt-5">Nenhuma fármacia cadastrada ainda...</span>
  ) : (
    <Table className="my-4">
      <thead>
        <tr>
          <th>Razão Social</th>
          <th>CNPJ</th>
          <th>Nome Fantasia</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Celular</th>
          <th className="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(empresasLocalStorage).map((indexEmpresa) => {
          const empresa = empresasLocalStorage[indexEmpresa];

          return (
            <tr key={indexEmpresa}>
              <td>{empresa.inputRazaoSocial}</td>
              <td>{empresa.inputCNPJ}</td>
              <td>{empresa.inputNomeFantasia}</td>
              <td>{empresa.inputEmail}</td>
              <td>{empresa.inputTelefone}</td>
              <td>{empresa.inputCelular}</td>
              <td className="p-0 text-center align-middle">
                <Button size="sm" onClick={() => botaoModal(indexEmpresa)}>
                  Ver mais
                </Button>
              </td>
              {itemSelecionado === indexEmpresa && (
                <Modal show={true} onHide={() => setItemSelecionado(null)}>
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
                      {empresa.inputTelefone !== "" && (
                        <ListGroupItem>
                          Telefone: {empresa.inputTelefone}
                        </ListGroupItem>
                      )}
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
                      {empresa.inputComplemento !== "" && (
                        <ListGroupItem>
                          Complemento: {empresa.inputComplemento}
                        </ListGroupItem>
                      )}
                      {empresa.inputLatitude !== "" && (
                        <ListGroupItem>
                          Latitude: {empresa.inputLatitude}
                        </ListGroupItem>
                      )}
                      {empresa.inputLongitude !== "" && (
                        <ListGroupItem>
                          Longitude: {empresa.inputLongitude}
                        </ListGroupItem>
                      )}
                    </ListGroup>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="danger"
                      onClick={() => removerEmpresa(indexEmpresa)}
                    >
                      Remover
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
