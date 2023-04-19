import { Table } from "react-bootstrap";

export default function FarmaciasTable({ dadosFormulario }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Razão Social</th>
          <th>CNPJ</th>
          <th>Nome Fantasia</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Celular</th>
          <th>CEP</th>
          <th>Logradouro</th>
          <th>Número</th>
          <th>Bairro</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>Complemento</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(dadosFormulario).map((indexEmpresa) => {
          return (
            <tr key={indexEmpresa}>
              <td>{dadosFormulario[indexEmpresa].inputRazaoSocial}</td>
              <td>{dadosFormulario[indexEmpresa].inputCNPJ}</td>
              <td>{dadosFormulario[indexEmpresa].inputNomeFantasia}</td>
              <td>{dadosFormulario[indexEmpresa].inputEmail}</td>
              <td>{dadosFormulario[indexEmpresa].inputTelefone}</td>
              <td>{dadosFormulario[indexEmpresa].inputCelular}</td>
              <td>{dadosFormulario[indexEmpresa].inputCEP}</td>
              <td>{dadosFormulario[indexEmpresa].inputLogradouro}</td>
              <td>{dadosFormulario[indexEmpresa].inputNumero}</td>
              <td>{dadosFormulario[indexEmpresa].inputBairro}</td>
              <td>{dadosFormulario[indexEmpresa].inputCidade}</td>
              <td>{dadosFormulario[indexEmpresa].inputEstado}</td>
              <td>{dadosFormulario[indexEmpresa].inputComplemento}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
