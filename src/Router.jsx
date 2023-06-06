import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import FarmaciasPage from "./pages/FarmaciasPage";
import CadastroFarmaciasPage from "./pages/CadastroFarmaciasPage";
import MedicamentosPage from "./pages/MedicamentosPage";
import CadastroMedicamentosPage from "./pages/CadastroMedicamentosPage";

export const appRouter = createBrowserRouter([
  {
    path: "/pharmacy-central-system/",
    element: <App />,
    children: [
      {
        path: "/pharmacy-central-system/",
        element: <LoginPage />,
      },
      {
        path: "/pharmacy-central-system/farmacias",
        element: <FarmaciasPage />,
      },
      {
        path: "/pharmacy-central-system/cadastro-farmacia",
        element: <CadastroFarmaciasPage />,
      },
      {
        path: "/pharmacy-central-system/medicamentos",
        element: <MedicamentosPage />,
      },
      {
        path: "/pharmacy-central-system/cadastro-medicamento",
        element: <CadastroMedicamentosPage />,
      },
    ],
  },
]);
