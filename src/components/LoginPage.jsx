import { SCLoginPage } from "./styledComponents";
import Nav from "./Nav";
import LoginForm from "./LoginForm";

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
