import styled from "styled-components";

export const SCLoginPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
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
    margin: 0 0 6%;
  }
`;

export const SCLoginForm = styled.form`
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  width: 50%;

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
    text-decoration: underline;
  }
`;

export const SCNav = styled.nav`
  background-color: skyblue;
  width: 100vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;

  .link {
    text-decoration: none;
    color: initial;
    cursor: pointer;
  }

  .nav-left {
    /* background-color: brown; */
    display: flex;
    align-items: center;
    width: 20vw;
    margin: 0 0 0vw 0.5vw;
  }

  .icon {
    /* background-color: yellowgreen; */
    color: black;
    display: flex;
    font-size: 2rem;
    margin: 0 0.2vw 0.2vw 0;
  }

  span {
    /* background-color: yellow; */
    margin: 0 1%;
    font-weight: 600;
  }

  .nav-right {
    margin: 0 0.5vw 0 0;
  }

  .display-none {
    display: none;
  }

  .nav-buttons {
    font-size: 1.2rem;
    border-radius: 5px;
    border-style: none;
    padding: 5px;
    margin: 0 0 0 0.5vw;
    cursor: pointer;
  }
  
  .nav-buttons:hover {
    background-color: black;
    color: white;
  }
  
  .sair-button {
    background-color: gray;
    color: white;
    border: 1px solid black;
  }
  
  .sair-button:hover {
    background-color: red;
  }

  .sair-button:active {
    background-color: black;
  }
  `;

export const SCFarmaciasPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 3%;
  }
`;

export const SCCadastroFarmaciasPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 3%;
  }
`;

export const SCCadastroFarmaciasForm = styled.form`
  background-color: red;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 45vw;
  height: 50vh;
  /* padding: 1%; */

  .item {
    background-color: yellow;
    width: 15vw;
    /* margin: 0 1vw; */
  }

  .divider {
    border: 1px solid black;
  }

  .botoes {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: blue;
  }

  button {
    margin: 1%;
  }
`;

export const SCMedicamentosPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 3%;
  }
`;

export const SCCadastroMedicamentosPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 3%;
  }
`;

export const SCCadastroMedicamentosForm = styled.form`
  background-color: red;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 45vw;
  height: 50vh;
  /* padding: 1%; */

  .item {
    background-color: yellow;
    width: 15vw;
    /* margin: 0 1vw; */
  }

  .divider {
    border: 1px solid black;
  }

  .botoes {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: blue;
  }

  button {
    margin: 1%;
  }
`;
