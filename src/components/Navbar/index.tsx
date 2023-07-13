import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import burger from "../../assets/menu.svg";
import close from "../../assets/close.svg";

import { navLinks } from "../../utils/constants";
import {
  NavbarWrapper,
  NavbarMenu,
  NavbarBurger,
  BurgerMenu,
  BurgerHandler,
  Logo,
  LogoWrapper,
} from "./styled";
import { Container } from "../../shared/styled";

export const Navbar = () => {
  const [activeLink, setActive] = useState<typeof navLinks[number]["id"]>("");
  const [isToggled, setToggle] = useState(false);

  return (
    <Container>
      <NavbarWrapper>
        <LogoWrapper>
          <Link
            to="/"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <Logo src={logo} alt="logo" />
          </Link>
          <h3>Dima Honcharenko</h3>
        </LogoWrapper>
        <NavbarMenu>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={link.id === activeLink ? "active" : undefined}
            >
              <a onClick={setActive.bind(null, link.id)} href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </NavbarMenu>
        <NavbarBurger>
          <BurgerHandler onClick={setToggle.bind(null, !isToggled)}>
            <img src={isToggled ? close : burger} alt="open menu" />
          </BurgerHandler>
          <BurgerMenu
            className="black-gradient"
            style={{
              display: isToggled ? "flex" : "none",
            }}
          >
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={link.id === activeLink ? "active" : undefined}
              >
                <a
                  onClick={() => {
                    setToggle(false);
                    setActive(link.id);
                  }}
                  href={`#${link.id}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </BurgerMenu>
        </NavbarBurger>
      </NavbarWrapper>
    </Container>
  );
};
