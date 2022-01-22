import { ButtonRequestInvite } from "components";
import { useWindowSize } from "hooks";
import Image from "next/image";
import { theme } from "styles/theme";
import { Button, Container, Logo, NavBar } from "./styles";

const Header: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width >= theme.breakpoints.xlNum && (
        <Container>
          <NavBar>
            <Logo href="#">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width="140px"
                height="20px"
              />
            </Logo>

            <div>
              <Button href="#">Home</Button>
              <Button href="#">About</Button>
              <Button href="#">Contact</Button>
              <Button href="#">Blog</Button>
              <Button href="#">Careers</Button>
            </div>

            <ButtonRequestInvite />
          </NavBar>
        </Container>
      )}
    </>
  );
};

export default Header;
