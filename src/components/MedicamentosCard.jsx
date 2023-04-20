import { Button, Card, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function MedicamentosCard({ dadosFormulario }) {
  const [medicamentoSelecionado, setMedicamentoSelecionado] = useState(null);

  const botaoModal = (indexMedicamento) => {
    setMedicamentoSelecionado(indexMedicamento);
  };

  return (
    <div className="d-flex flex-wrap justify-content-between my-4">
      {Object.keys(dadosFormulario).map((indexMedicamento) => {
        const medicamento = dadosFormulario[indexMedicamento];

        return (
          <Card
            key={indexMedicamento}
            className="m-3"
            style={{ width: "15vw" }}
          >
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
                    <Modal.Title>
                      Medicamento: {medicamento.inputMedicamento}
                    </Modal.Title>
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
