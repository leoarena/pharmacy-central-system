import { SCCadastroMedicamentosForm } from "./styledComponents";

export default function CadastroMedicamentosForm() {
  return (
    <SCCadastroMedicamentosForm>
      <div className="item">
        <label htmlFor="medicamento">Medicamento</label>
        <input type="text" name="medicamento" id="medicamento" required />
      </div>

      <div className="item">
        <label htmlFor="laboratorio">Laboratório</label>
        <input type="text" name="laboratorio" id="laboratorio" required />
      </div>

      <div className="item">
        <label htmlFor="dosagem">Dosagem</label>
        <input type="text" name="dosagem" id="dosagem" required />
      </div>

      <div className="item">
        <label htmlFor="tipo">Tipo</label>
        <select name="tipo" id="tipo" required>
          <option value="controlado">Medicamento Controlado</option>
          <option value="comum">Medicamento Comum</option>
        </select>
      </div>

      <div className="item">
        <label htmlFor="preco-unitario">Preço Unitário</label>
        <input type="number" name="preco-unitario" id="preco-unitario" />
      </div>

      {/* <div className="divider"></div> */}

      <div className="item">
        <label htmlFor="descricao">Descrição</label>
        <textarea name="descricao" id="descricao" rows="5"></textarea>
      </div>

      <div className="botoes">
        <button>Limpar</button>
        <button>Salvar</button>
      </div>
    </SCCadastroMedicamentosForm>
  );
}
