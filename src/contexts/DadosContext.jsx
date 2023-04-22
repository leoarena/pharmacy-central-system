import { createContext } from "react";

export const DadosContext = createContext();

export function Provider({ children }) {
  const empresasLocalStorage = JSON.parse(
    localStorage.getItem("dadosEmpresas")
  );
  const medicamentosLocalStorage = JSON.parse(
    localStorage.getItem("dadosMedicamentos")
  );

  return (
    <DadosContext.Provider
      value={{ empresasLocalStorage, medicamentosLocalStorage }}
    >
      {children}
    </DadosContext.Provider>
  );
}
