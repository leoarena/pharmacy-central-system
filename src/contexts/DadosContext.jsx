import { createContext, useState } from "react";

export const DadosContext = createContext();

export function ContextProvider({ children }) {
  const [empresasLocalStorage, setEmpresasLocalStorage] = useState(
    JSON.parse(localStorage.getItem("dadosEmpresas")) || []
  );
  const cadastrarEmpresa = (dadosNovaEmpresa) => {
    const dadosAtualizados = [...empresasLocalStorage, dadosNovaEmpresa];
    setEmpresasLocalStorage(dadosAtualizados);
    localStorage.setItem("dadosEmpresas", JSON.stringify(dadosAtualizados));
    alert("Empresa cadastrada com sucesso!");
  };
  const removerEmpresa = (indexEmpresa) => {
    const confirmacao = window.confirm(
      "Tem certeza que deseja remover este item?"
    );
    if (confirmacao) {
      const dadosAtualizados = [...empresasLocalStorage];
      dadosAtualizados.splice(indexEmpresa, 1);
      setEmpresasLocalStorage(dadosAtualizados);
      localStorage.setItem("dadosEmpresas", JSON.stringify(dadosAtualizados));
    }
  };

  const [medicamentosLocalStorage, setMedicamentosLocalStorage] = useState(
    JSON.parse(localStorage.getItem("dadosMedicamentos")) || []
  );
  const cadastrarMedicamento = (dadosNovoMedicamento) => {
    const dadosAtualizados = [
      ...medicamentosLocalStorage,
      dadosNovoMedicamento,
    ];
    setMedicamentosLocalStorage(dadosAtualizados);
    localStorage.setItem("dadosMedicamentos", JSON.stringify(dadosAtualizados));
    alert("Medicamento cadastrado com sucesso!");
  };
  const removerMedicamento = (indexEmpresa) => {
    const confirmacao = window.confirm(
      "Tem certeza que deseja remover este item?"
    );
    if (confirmacao) {
      const dadosAtualizados = [...empresasLocalStorage];
      dadosAtualizados.splice(indexEmpresa, 1);
      setMedicamentosLocalStorage(dadosAtualizados);
      localStorage.setItem(
        "dadosMedicamentos",
        JSON.stringify(dadosAtualizados)
      );
    }
  };

  return (
    <DadosContext.Provider
      value={{
        empresasLocalStorage,
        setEmpresasLocalStorage,
        cadastrarEmpresa,
        removerEmpresa,
        medicamentosLocalStorage,
        setMedicamentosLocalStorage,
        cadastrarMedicamento,
        removerMedicamento,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
}
