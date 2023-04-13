import { SCLogin } from "./styledComponents";
import Nav from "./Nav";

export default function Login() {
  return (
    <SCLogin>
      <Nav />
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
