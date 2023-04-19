import { Table } from "react-bootstrap";

export default function MedicamentosTable({ dadosFormulario }) {
  return (
    <Table>
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
        {Object.keys(dadosFormulario).map((indexMedicamento) => {
          return (
            <tr key={indexMedicamento}>
              <td>{dadosFormulario[indexMedicamento].inputMedicamento}</td>
              <td>{dadosFormulario[indexMedicamento].inputLaboratorio}</td>
              <td>{dadosFormulario[indexMedicamento].inputDosagem}</td>
              <td>{dadosFormulario[indexMedicamento].inputTipo}</td>
              <td>{dadosFormulario[indexMedicamento].inputPrecoUnitario}</td>
              <td>{dadosFormulario[indexMedicamento].inputDescricao}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
