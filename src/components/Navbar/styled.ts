import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const Logo = styled.img`
  object-fit: contain;
  max-width: 4em;
  border-radius: 50%;
`;

export const NavbarMenu = styled.ul`
  display: none;

  > li {
    color: var(--links-color);
  }

  > li.active {
    color: var(--active-link-color);
  }

  > li a {
    padding: 1em;
    color: inherit;
    text-decoration: none;
  }

  @media screen and (min-width: 600px) {
    display: flex;
    list-style-type: none;
    gap: 1em;
  }
`;

export const NavbarBurger = styled.div`
  display: block;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const BurgerMenu = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1em;
  z-index: 100;
  list-style-type: none;
  border-radius: 0.7em;
  padding: 0.5em;
  right: 2em;
  top: 4em;
  padding: 1.5em;

  li {
    color: white;
  }

  li.active {
    color: var(--links-color);
  }

  li a {
    text-decoration: none;
    color: inherit;
  }
`;

export const BurgerHandler = styled.button`
  border: 0;
  cursor: pointer;
  border-radius: 0.1em;
  padding: 0.2em;
  background-color: transparent;
`;
