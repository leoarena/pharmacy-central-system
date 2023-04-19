import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";

export default function MedicamentosCard({ dadosFormulario }) {
  return (
    <div className="d-flex flex-wrap justify-content-between my-4">
      {Object.keys(dadosFormulario).map((indexMedicamento) => {
        return (
          <Card
            key={indexMedicamento}
            className="m-3"
            style={{ width: "15vw" }}
          >
            <div className="d-flex justify-content-center m-1 mt-4 fs-1">
              <FontAwesomeIcon icon={faBriefcaseMedical} />
            </div>
            <Card.Body>
              <Card.Title>
                {dadosFormulario[indexMedicamento].inputMedicamento}
              </Card.Title>
              <Card.Text>
                {dadosFormulario[indexMedicamento].inputLaboratorio}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
