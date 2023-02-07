import React from "react";

import { HeaderWrapper } from "./ScHeader";
import LogoContainer from "../LogoContainer";

const Header = ({ logoImg }) => {
  return (
    <HeaderWrapper>
      <LogoContainer img={logoImg} />
    </HeaderWrapper>
  );
};

export default Header;
