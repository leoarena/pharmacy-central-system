import { SCLogin } from "./styledComponents";
import { FaClinicMedical } from "react-icons/fa";

export default function Login() {
  return (
    <SCLogin>
      <nav>
        <div className="nav-left">
          <div className="icon">
            <FaClinicMedical />
          </div>
          <p>Pharmacy Central System</p>
        </div>
        <div className="nav-right">
          <button className="nav-login">Login</button>
        </div>
      </nav>
      <div className="container">
        <h1>Pharmacy Central System</h1>
        <form className="login">
          <div className="campo"></div>

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
        </form>
      </div>
    </SCLogin>
  );
}
