import React from "react";
import Navbar from "../../molecules/navigation/NavBar";
import "../../../styles/components/organisms/layout/Header.css";

const Header = ({ carrito = [] }) => {
  return (
    <header className="header-principal">
      <Navbar carrito={carrito} />
    </header>
  );
};

export default Header;