import { SCLoginPage } from "../components/styledComponents";
import Nav from "../components/Nav";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
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
