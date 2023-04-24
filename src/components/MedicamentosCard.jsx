import { Button, Card, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { DadosContext } from "../contexts/DadosContext";

export default function MedicamentosCard() {
  const { medicamentosLocalStorage } = useContext(DadosContext);
  const [medicamentoSelecionado, setMedicamentoSelecionado] = useState(null);

  const botaoModal = (indexMedicamento) => {
    setMedicamentoSelecionado(indexMedicamento);
  };

  return medicamentosLocalStorage.length === 0 ? (
    <span className="mt-5">Nenhum medicamento cadastrado ainda...</span>
  ) : (
    <div className="d-flex flex-wrap my-4" style={{ width: "68vw" }}>
      {Object.keys(medicamentosLocalStorage).map((indexMedicamento) => {
        const medicamento = medicamentosLocalStorage[indexMedicamento];

        return (
          <Card key={indexMedicamento} style={{ width: "15vw", margin: "1vw" }}>
            <div className="d-flex justify-content-center m-1 mt-4">
              <FontAwesomeIcon icon={faBriefcaseMedical} className="fa-4x" />
            </div>
            <Card.Body className="text-center">
              <Card.Title>{medicamento.inputMedicamento}</Card.Title>
              <Card.Text>{medicamento.inputLaboratorio}</Card.Text>

              <Button onClick={() => botaoModal(indexMedicamento)}>
                Ver mais
              </Button>
              {medicamentoSelecionado === indexMedicamento && (
                <Modal
                  show={true}
                  onHide={() => setMedicamentoSelecionado(null)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Informações completas</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="d-flex justify-content-between">
                    <div className="flex-grow-1 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon
                        icon={faBriefcaseMedical}
                        className="fa-6x"
                      />
                    </div>
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
                      <ListGroupItem>
                        Descrição: {medicamento.inputDescricao}
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
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
