import { useContext } from "react";
import {
  Table,
  Button,
  Modal,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { DadosContext } from "../contexts/DadosContext";

export default function MedicamentosTable() {
  const {
    medicamentosLocalStorage,
    botaoModal,
    itemSelecionado,
    setItemSelecionado,
    removerMedicamento,
  } = useContext(DadosContext);

  return medicamentosLocalStorage.length === 0 ? (
    <span className="mt-5">Nenhum medicamento cadastrado ainda...</span>
  ) : (
    <Table className="my-4">
      <thead>
        <tr>
          <th>Medicamento</th>
          <th>Laboratório</th>
          <th>Dosagem</th>
          <th>Tipo</th>
          <th>Preço Unitário</th>
          <th>Descrição</th>
          <th className="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(medicamentosLocalStorage).map((indexMedicamento) => {
          const medicamento = medicamentosLocalStorage[indexMedicamento];
          return (
            <tr key={indexMedicamento}>
              <td>{medicamento.inputMedicamento}</td>
              <td>{medicamento.inputLaboratorio}</td>
              <td>{medicamento.inputDosagem}</td>
              <td>{medicamento.inputTipo}</td>
              <td>{medicamento.inputPrecoUnitario}</td>
              <td>{medicamento.inputDescricao}</td>
              <td className="p-0 text-center align-middle">
                <Button size="sm" onClick={() => botaoModal(indexMedicamento)}>
                  Ver mais
                </Button>
              </td>

              {itemSelecionado === indexMedicamento && (
                <Modal show={true} onHide={() => setItemSelecionado(null)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Informações completas</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ListGroup>
                      <ListGroupItem>
                        Medicamento: {medicamento.inputMedicamento}
                      </ListGroupItem>
                      <ListGroupItem>
                        Laboratório: {medicamento.inputLaboratorio}
                      </ListGroupItem>
                      <ListGroupItem>
                        Dosagem: {medicamento.inputDosagem}
                      </ListGroupItem>
                      <ListGroupItem>
                        Tipo: {medicamento.inputTipo}
                      </ListGroupItem>
                      <ListGroupItem>
                        Preço Unitário: {medicamento.inputPrecoUnitario}
                      </ListGroupItem>
                      {medicamento.inputDescricao !== "" && (
                        <ListGroupItem>
                          Descrição: {medicamento.inputDescricao}
                        </ListGroupItem>
                      )}
                    </ListGroup>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="danger"
                      onClick={() => removerMedicamento(indexMedicamento)}
                    >
                      Remover
                    </Button>
                    <Button onClick={() => setItemSelecionado(null)}>
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
