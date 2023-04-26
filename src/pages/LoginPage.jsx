import { useEffect } from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  useEffect(() => {
    document.title = "Pharmacy Central System";
  }, []);

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "85vh" }}
    >
      <LoginForm />
    </Container>
  );
}
