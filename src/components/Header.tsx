import Image from "next/image";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styled from "styled-components";
import { useToggle } from "../hooks/useToggle";
import { ScaleUpCenter } from "../styles/animations";

const Menu = () => (
  <LinksContainer>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT3</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#!features">Case Studies</a>
    </p>
    <p>
      <a href="#library">Library</a>
    </p>
  </LinksContainer>
);
const Header = () => {
  const [toggle, setToggle] = useToggle();
  return (
    <HeaderContainer>
      <div className="logo">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={62}
          height={16}
          objectFit="contain"
        />
      </div>
      <HeaderLinksContainer>
        <Menu />
      </HeaderLinksContainer>
      <div className="buttons-container">
        <HeaderSignContainer>
          <p>
            <a>Sign in</a>
          </p>
          <Button>Sign up</Button>
        </HeaderSignContainer>
        <HeaderHamburgerMenu>
          {toggle ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggle(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <MenuContainer>
              <Menu />
              <div className="sign-menu-container">
                <p>
                  <a>Sign in</a>
                </p>
                <Button>Sign up</Button>
              </div>
            </MenuContainer>
          )}
        </HeaderHamburgerMenu>
      </div>
    </HeaderContainer>
  );
};

export default Header;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;
  .logo {
    margin-right: 2rem;
  }
  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & p {
    color: #fff;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 25px;
    text-transform: capitalize;
    margin: 0 1rem;
    cursor: pointer;
  }
  @media screen and (max-width: 1050px) {
    padding: 2rem 2rem;
  }
`;
const HeaderLinksContainer = styled.div`
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
const HeaderSignContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const HeaderHamburgerMenu = styled.div`
  position: relative;
  margin-left: 1rem;
  > svg {
    cursor: pointer;
  }
  @media screen and (min-width: 1050px) {
    display: none;
  }
`;
const MenuContainer = styled.div`
  ${ScaleUpCenter}
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;

  text-align: end;
  background: var(--color-footer);
  padding: 2rem;
  position: absolute;
  right: 0;
  top: 40px;
  margin-top: 1rem;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 500px) {
    .sign-menu-container {
      display: none;
    }
  }
`;
const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
  }
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #ff4820;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  border-radius: 5px;
  border: 0;
  outline: none;
  cursor: pointer;
`;
