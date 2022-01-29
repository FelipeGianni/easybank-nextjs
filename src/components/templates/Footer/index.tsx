import { ButtonRequestInvite } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { firstLinks, icons, secondLinks } from "./content";
import {
  Clickable,
  Column,
  Container,
  Copyright,
  Final,
  FirstLinks,
  Icon,
  Logo,
  SecondLinks,
  Social,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Column>
        <Social>
          <Logo>
            <Link href="#" passHref>
              <Clickable>
                <Image
                  src="/assets/logo-dark.svg"
                  alt="Logo"
                  width={140}
                  height={20}
                />
              </Clickable>
            </Link>
          </Logo>

          <Icon>
            {icons.map((icon) => (
              <Link key={icon.src} href={icon.href} passHref>
                <Clickable>
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                  />
                </Clickable>
              </Link>
            ))}
          </Icon>
        </Social>

        <FirstLinks>
          {firstLinks.map((firstLink, index) => (
            <Link
              key={`firstLink-${String(index)}`}
              href={firstLink.href}
              passHref
            >
              <Clickable>{firstLink.content}</Clickable>
            </Link>
          ))}
        </FirstLinks>

        <SecondLinks>
          {secondLinks.map((secondLink, index) => (
            <Link
              key={`secondLink-${String(index)}`}
              href={secondLink.href}
              passHref
            >
              <Clickable>{secondLink.content}</Clickable>
            </Link>
          ))}
        </SecondLinks>
      </Column>

      <Final>
        <ButtonRequestInvite />

        <Copyright>© Easybank. All Rights Reserved</Copyright>
      </Final>
    </Container>
  );
};

export default Footer;
