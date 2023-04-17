import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import FarmaciasPage from "./pages/FarmaciasPage";
import CadastroFarmaciasPage from "./pages/CadastroFarmaciasPage";
import MedicamentosPage from "./pages/MedicamentosPage";
import CadastroMedicamentosPage from "./pages/CadastroMedicamentosPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/farmacias",
        element: <FarmaciasPage />,
      },
      {
        path: "/cadastro-farmacia",
        element: <CadastroFarmaciasPage />,
      },
      {
        path: "/medicamentos",
        element: <MedicamentosPage />,
      },
      {
        path: "/cadastro-medicamento",
        element: <CadastroMedicamentosPage />,
      },
    ],
  },
]);
