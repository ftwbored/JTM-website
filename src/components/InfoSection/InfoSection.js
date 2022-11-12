import React from "react";
import { Button } from "../ButtonElements";

import {
  InfoContainer,
  InfoWrapper,
  InfoCard,
  InfoTextWrap,
  InfoIcon,
  InfoH2,
  InfoP,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  InfoTitle,
  TextBorder,
  SubInfoTitle,
  BarWrap,
  Bar1,
  Bar2,
  Bar3,
  Bar1Caption,
  BarRow,
  BarPercent,
  Tip,
  Bar1Color,
  Bar2Color,
  Bar3Color,
  InfoLogo,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer id="about">
        <InfoLogo></InfoLogo>
        <InfoTitle>
          World class maritime consultancy service provider for all owners’
          request and compliance
        </InfoTitle>
        {/* <InfoWrapper>
          <InfoCard>
            <InfoTextWrap>
              <InfoH2>Who Are We</InfoH2>
              <InfoP>
                World class maritime consultancy service provider for all
                owners’ request and compliance
              </InfoP>
            </InfoTextWrap>
          </InfoCard>
          <InfoCard>
            <InfoTextWrap>
              <InfoH2>Our Mission</InfoH2>
              <InfoP>
                We continually accept as true with that forging a 'Lifetime of
                partnerships' is paramount. We only desire the exceptional for
                our clients, and we will only give the excellent as a minimum to
                them
              </InfoP>
            </InfoTextWrap>
          </InfoCard> */}
        {/* <InfoCard>
            <InfoTextWrap>
              <InfoH2>How We Work</InfoH2>
              <InfoP>
                We recognize the impact of climate change, working to ensure
                human beings worldwide have get right of entry to to cleaner
                energy. We embrace digitalization while mitigating the dangers
                it brings and support the development of innovative substances
                and technologies.
              </InfoP>
            </InfoTextWrap>
          </InfoCard> */}
        {/* </InfoWrapper> */}
      </InfoContainer>
    </>
  );
};

export default InfoSection;
