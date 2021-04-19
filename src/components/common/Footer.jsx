import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 3rem 0;
`;

const Footer = () => (
  <FooterWrapper>
    <p>&copy; King Slice {new Date().getFullYear()}</p>
  </FooterWrapper>
);

export default Footer;
