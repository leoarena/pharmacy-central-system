import { SCLogin } from "./styledComponents";
import Nav from "./Nav";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <SCLogin>
      <Nav />
      <div className="container">
        <h1>Pharmacy Central System</h1>
        <LoginForm />
      </div>
    </SCLogin>
  );
}
