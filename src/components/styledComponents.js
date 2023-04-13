import styled from "styled-components";

export const SCLogin = styled.div`
  /* background-color: white; */
  /* height: 50vh; */
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-radius: 20px; */
  /* margin: 25% 0 0 0; */

  nav {
    background-color: skyblue;
    width: 100vw;
    /* height: 5%; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5%;
    font-size: 1.2rem;
  }

  .nav-left {
    /* background-color: brown; */
    display: flex;
    align-items: center;
    width: 50%;
  }

  nav .icon {
    /* background-color: black; */
    color: black;
    padding: 0.2% 0.2% 0 0.21%;
    margin: 0.2% 0;
    /* border-radius: 5px; */
    font-size: 2rem;
  }

  nav p {
    margin: 0 1%;
    font-weight: 600;
  }

  .nav-login {
    font-size: 1.2rem;
    border-radius: 5px;
    border-style: none;
    padding: 5px;
  }

  .nav-login:hover {
    background-color: black;
    color: white;
  }

  .container{
    background-color: skyblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 3%;
    margin: 9% 0 0;
    border-radius: 20px;
    border: 1px solid black;
  }
  
  h1 {
    font-size: 2.3rem;
    margin: 0 0 4%;
  }
  
  .login {
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .campo {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    margin: 0 0 3%;
  }

  .campo label {
    padding-left: 1%;
    font-size: 1.3rem;
  }

  .campo input {
    margin: 0 0 2% 0;
    padding-left: 1%;
    font-size: 1.3rem;
    border-radius: 3px;
    border-style: none;
  }

  .botoes {
    /* background-color: blueviolet; */
    display: flex;
    justify-content: space-around;
    margin: 8% 0 0;
  }

  .botoes button {
    font-size: 1.2rem;
    border-radius: 5px;
    border-style: none;
    /* padding: 2%; */
    padding: 5px;
  }

  .botoes button:hover {
    background-color: black;
    color: white;
  }

  .esqueceu {
    font-size: 1.1rem;
    margin: 5% auto 0;
  }

  .esqueceu:hover {
    color: blue;
    text-decoration: underline;
  }
`;
