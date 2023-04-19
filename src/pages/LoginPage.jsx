import { SCLoginPage } from "../components/styledComponents";
import Nav from "../components/Nav";
import LoginForm from "../components/LoginForm";
import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    document.title = "Pharmacy Central System";
  }, []);

  return (
    <SCLoginPage>
      <Nav />
      <div className="container">
        <h1>Pharmacy Central System</h1>
        <LoginForm />
      </div>
    </SCLoginPage>
  );
}
