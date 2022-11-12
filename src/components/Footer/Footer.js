import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebsiteRights,
  AddressLoc,
  AddressItem,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="home">JITAIMARITIME</SocialLogo>
            <WebsiteRights>
              JITAIMARITIME &copy; {new Date().getFullYear()} All rights
              reversed.
            </WebsiteRights>
            <SocialIcons>
              <AddressLoc>
                <AddressItem>Ji Tai Maritime Pte Ltd</AddressItem>
                <AddressItem>
                  2 Venture Drive, #15-31 Vision Exchange, Singapore 608526
                </AddressItem>
              </AddressLoc>
              {/* <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
