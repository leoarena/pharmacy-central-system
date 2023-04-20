import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function LoginForm() {
  const navigate = useNavigate();
  const validarLogin = (e) => {
    e.preventDefault();
    navigate("/farmacias");
  };

  return (
    <Form onSubmit={validarLogin} className="mt-4">
      <Form.Group>
        <Form.Label htmlFor="email">Email:</Form.Label>
        <Form.Control
          type="email"
          name="email"
          id="email"
          placeholder="Insira seu email"
          required
        />
      </Form.Group>

      <Form.Group className="mt-2">
        <Form.Label htmlFor="senha">Senha:</Form.Label>
        <Form.Control
          type="password"
          name="senha"
          id="senha"
          placeholder="Insira sua senha"
          minLength={8}
          required
        />
      </Form.Group>

      <div className="mt-4 d-flex justify-content-center">
        <Button type="submit" className="mx-1">
          Entrar
        </Button>
        <Button
          type="button"
          className="mx-1"
          onClick={() => navigate("/cadastre-se")}
        >
          Cadastrar-se
        </Button>
      </div>
      <div className="text-center mt-2 ">
        <a href="/recuperar" className="text-decoration-none">
          Esqueceu sua senha?
        </a>
      </div>
    </Form>
  );
}
