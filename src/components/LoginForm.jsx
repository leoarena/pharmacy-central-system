import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function LoginForm() {
  const navigate = useNavigate();
  const validarLogin = (e) => {
    e.preventDefault();
    navigate("/farmacias");
  };

  return (
    <Form onSubmit={validarLogin} className="mt-4 skyblue p-5 rounded">
      <h1 className="text-center mb-5">Login</h1>
      <Form.Group>
        <Form.Label htmlFor="email" className="mb-1">
          Email:
        </Form.Label>
        <Form.Control
          type="email"
          name="email"
          id="email"
          placeholder="Insira seu email"
          required
        />
      </Form.Group>

      <Form.Group className="mt-2">
        <Form.Label htmlFor="senha" className="mb-1">
          Senha:
        </Form.Label>
        <Form.Control
          type="password"
          name="senha"
          id="senha"
          placeholder="Insira sua senha"
          required
          minLength={8}
        />
      </Form.Group>

      <div className="mt-4 d-flex justify-content-center">
        <Button variant="dark" type="submit" className="mx-1 border-0">
          Entrar
        </Button>
        <Button
          variant="dark"
          type="button"
          className="mx-1 border-0"
          onClick={() => navigate("/cadastre-se")}
        >
          Cadastrar-se
        </Button>
      </div>
      <div className="text-center mt-2">
        <a href="/recuperar" className="link-login text-dark">
          Esqueceu sua senha?
        </a>
      </div>
    </Form>
  );
}
