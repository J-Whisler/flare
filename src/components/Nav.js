import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="logo" />
        <h1>Flare</h1>
      </Logo>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 60%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    color: #ca743a;
    background: #353d3a;
    position: relative;
    right: 8.5rem;
    border-radius: 0rem 1rem 1rem 0rem;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  /* color: #ca743a; */
  img {
    width: 2rem;
    height: 2rem;
    /* background-color: #ca743a; */
  }
`;
export default Nav;
