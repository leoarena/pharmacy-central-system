import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./components/LoginPage";
import FarmaciasPage from "./components/FarmaciasPage";

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
        path: "cadastro-farmacia",
        element: <CadastroFarmacia />,
      },
    ],
  },
]);
