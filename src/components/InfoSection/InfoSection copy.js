import React from "react";
import { Button } from "../ButtonElements";
import mySvg1 from "../../images/svg-1.svg";
import ehLogo from "../../images/logo_.png";
import mission from "../../images/target.png";

import {
  InfoContainer,
  InfoWrapper,
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
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoTitle lightText={true}>About</InfoTitle>
          <SubInfoTitle>
            World class maritime consultancy service provider for all owners’
            request and compliance
          </SubInfoTitle>
          <InfoRow imgStart={false}>
            <Column1>
              <TextWrapper>
                {/* <TopLine textAlign={true}>{topLine}</TopLine> */}
                <Heading lightText={lightText} textAlign={true}>
                  Our Mission
                </Heading>
                <Subtitle darkText={darkText} textAlign={false}>
                  We continually accept as true with that forging a{" "}
                  <strong>'Lifetime of partnerships'</strong> is paramount. We
                  only desire the exceptional for our clients, and we will only
                  give the excellent as a minimum to them
                </Subtitle>
                {/* <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={mission} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow imgStart={false}>
            <Column1>
              <TextWrapper>
                {/* <TopLine textAlign={true}>Our Work Ethics</TopLine> */}
                <Heading lightText={lightText} textAlign={true}>
                  Our Work Ethics
                </Heading>
                <Subtitle darkText={darkText} textAlign={false}>
                  We recognize the impact of climate change, working to ensure
                  human beings worldwide have get right of entry to to cleaner
                  energy. We embrace digitalization while mitigating the dangers
                  it brings and support the development of innovative substances
                  and technologies. We count on the expectations of an expanding
                  global population, together with the want for tightly closed
                  and reliable agricultural production.
                </Subtitle>
                {/* <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              {/* <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap> */}
              <BarWrap>
                <BarRow>
                  <Bar1Caption>Productivity</Bar1Caption>
                  <BarPercent>
                    100%<Tip></Tip>
                  </BarPercent>
                  <Bar1>
                    <Bar1Color></Bar1Color>
                  </Bar1>
                </BarRow>

                <BarRow>
                  <Bar1Caption>Consultancy</Bar1Caption>
                  <BarPercent>
                    100%<Tip></Tip>
                  </BarPercent>
                  <Bar2>
                    <Bar2Color></Bar2Color>
                  </Bar2>
                </BarRow>

                <BarRow>
                  <Bar1Caption>Services</Bar1Caption>
                  <BarPercent>
                    100%<Tip></Tip>
                  </BarPercent>
                  <Bar3>
                    <Bar3Color></Bar3Color>
                  </Bar3>
                </BarRow>
              </BarWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
