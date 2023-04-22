import { useContext } from "react";
import { Table } from "react-bootstrap";
import { DadosContext } from "../contexts/DadosContext";

export default function MedicamentosTable() {
  const { medicamentosLocalStorage } = useContext(DadosContext);
  return (
    <Table className="my-4">
      <thead>
        <tr>
          <th>Medicamento</th>
          <th>Laboratório</th>
          <th>Dosagem</th>
          <th>Tipo</th>
          <th>Preço Unitário</th>
          <th>Descrição</th>
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
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
