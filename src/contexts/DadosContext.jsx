import { createContext, useState } from "react";

export const DadosContext = createContext();

export function ContextProvider({ children }) {
  const [empresasLocalStorage, setEmpresasLocalStorage] = useState(
    JSON.parse(localStorage.getItem("dadosEmpresas")) || []
  );
  const removerEmpresa = (indexEmpresa) => {
    const confirmacao = window.confirm(
      "Tem certeza que deseja excluir este item?"
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
  const removerMedicamento = (indexEmpresa) => {
    const confirmacao = window.confirm(
      "Tem certeza que deseja excluir este item?"
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
        removerEmpresa,
        medicamentosLocalStorage,
        setMedicamentosLocalStorage,
        removerMedicamento,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
}
