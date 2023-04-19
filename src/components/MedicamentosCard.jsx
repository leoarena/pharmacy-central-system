import { Card } from "react-bootstrap";
import { FaBriefcaseMedical } from "react-icons/fa";

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
              <FaBriefcaseMedical />
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
