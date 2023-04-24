import { createContext, useState } from "react";

export const DadosContext = createContext();

export function ContextProvider({ children }) {
  const [medicamentosLocalStorage, setMedicamentosLocalStorage] = useState(
    JSON.parse(localStorage.getItem("dadosMedicamentos")) || []
  );
  const [empresasLocalStorage, setEmpresasLocalStorage] = useState(
    JSON.parse(localStorage.getItem("dadosEmpresas")) || []
  );

  return (
    <DadosContext.Provider
      value={{
        empresasLocalStorage,
        setEmpresasLocalStorage,
        medicamentosLocalStorage,
        setMedicamentosLocalStorage,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
}
