import LoginForm from "../components/LoginForm";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { H1 } from "../components/styledComponents";

export default function LoginPage() {
  useEffect(() => {
    document.title = "Pharmacy Central System";
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center">
      <H1>Pharmacy Central System</H1>
      <LoginForm />
    </Container>
  );
}
