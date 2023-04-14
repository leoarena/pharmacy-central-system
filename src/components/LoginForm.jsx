import { useNavigate } from "react-router-dom";
import { SCLoginForm } from "./styledComponents";

export default function LoginForm() {
  const navigate = useNavigate();
  const validarLogin = (e) => {
    e.preventDefault();
    navigate("/farmacias");
  };

  return (
    <SCLoginForm onSubmit={(e) => validarLogin(e)}>
      <div className="campo">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Insira seu email"
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          name="senha"
          placeholder="Insira sua senha"
          minLength={8}
          required
        />
      </div>

      <div className="botoes">
        <button type="submit">Entrar</button>
        <button>Cadastrar-se</button>
      </div>
      <p className="esqueceu">Esqueceu sua senha?</p>
    </SCLoginForm>
  );
}
