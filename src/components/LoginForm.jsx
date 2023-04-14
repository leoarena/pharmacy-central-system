import { Link } from "react-router-dom";
import { SCLoginForm } from "./styledComponents";

export default function LoginForm() {
  return (
    <SCLoginForm>
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
        <Link to='/farmacias'>
          <button type="submit">Entrar</button>
        </Link>
        <button>Cadastrar-se</button>
      </div>
      <p className="esqueceu">Esqueceu sua senha?</p>
    </SCLoginForm>
  );
}
