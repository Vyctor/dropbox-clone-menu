import React from "react";

import { Container, Navigation, DropboxLogo, Form } from "./styles";

const MenuForm: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo></DropboxLogo>
          <span>Dropbox</span>
        </h1>

        <button className="action--close" onClick={handleToggle}>
          {" "}
          ✕{" "}
        </button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span className="title">Preencha o formulário abaixo</span>
        <input type="text" placeholder="Nome"></input>
        <input type="text" placeholder="Sobrenome"></input>
        <input type="email" placeholder="E-mail"></input>
        <input type="password" placeholder="Senha"></input>

        <button>Prosseguir</button>
        <span className="terms">
          Esta página está sujeita à Política de privacidade a aos Termos de
          Serviço
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
