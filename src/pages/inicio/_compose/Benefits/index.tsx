import React from "react";
import Image from "next/image";
import { Container, Title, Options, Option } from "./styles";
import { options } from "./content";

const Benefits: React.FC = () => {
  return (
    <Container>
      <Title>
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </Title>

      <Options>
        {options.map((option) => (
          <Option key={option.image}>
            <Image
              src={option.image}
              alt={option.alt}
              width={option.width}
              height={option.height}
            />

            <h3>{option.title}</h3>
            <p>{option.description}</p>
          </Option>
        ))}
      </Options>
    </Container>
  );
};

export default Benefits;
