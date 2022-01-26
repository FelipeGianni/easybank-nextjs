import { ButtonRequestInvite } from "components";
import React from "react";
import { Container, Content, SiteImage } from "./styles";

const Hero: React.FC = () => {
  return (
    <Container>
      <SiteImage className="hero__image" />

      <Content>
        <h1>Next generation digital banking</h1>

        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <ButtonRequestInvite />
      </Content>
    </Container>
  );
};

export default Hero;
