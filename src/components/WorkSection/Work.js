import React from "react";
import styled from "styled-components";
import bg2 from "../../images/work_.jpg";

const Work = () => {
  return (
    <>
      <WorkContainer>
        <WorkWrapper>
          <WorkTextWrapper>
            <WorkTitle>How We Work</WorkTitle>
            <WorkDescription>
              Driven by society, we acknowledge the challenges of growing
              urbanization, anticipating the need for safer, smarter cities. We
              anticipate the expectations of an expanding global population,
              including the need for secure and reliable agricultural
              production. We understand the impact of climate change, working to
              ensure people worldwide have access to cleaner energy while
              supporting our clients in the efficient management or conversion
              of their existing assets. We embrace digitalization while
              mitigating the risks it brings and supports the development of
              revolutionary materials and technologies.
            </WorkDescription>
          </WorkTextWrapper>
          <StatsWrapper>
            <BarWrapper>
              <BarTitle>Productivity</BarTitle>
              <BarRow>
                <BarFiller1></BarFiller1>
              </BarRow>
            </BarWrapper>

            <BarWrapper>
              <BarTitle>Consultancy</BarTitle>
              <BarRow>
                <BarFiller2></BarFiller2>
              </BarRow>
            </BarWrapper>
            <BarWrapper>
              <BarTitle>Services</BarTitle>
              <BarRow>
                <BarFiller3></BarFiller3>
              </BarRow>
            </BarWrapper>
          </StatsWrapper>
        </WorkWrapper>
      </WorkContainer>
    </>
  );
};

export default Work;
const WorkContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
    url(${bg2});
`;
const WorkWrapper = styled.div`
  display: flex;
`;

const WorkTextWrapper = styled.div`
  margin-right: 50px;
  padding-right: 50px;
  max-width: 800px;
  color: #fff;
`;
const WorkTitle = styled.h1`
  font-size: 1.25rem;
  padding-bottom: 7.5px;
`;
const WorkDescription = styled.p`
  letter-spacing: 1.5px;
  line-height: 25px;
  width: 600px;
`;
const StatsWrapper = styled.div`
  padding-top: 15px;
  height: 300px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  padding-left: 50px;
`;

const BarRow = styled.div`
  width: 450px;
  box-sizing: content-box;
  height: 10px; /* Can be anything */
  position: relative;
  background: #555;
  border-radius: 25px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
`;
const BarFiller1 = styled.span`
  width: 90%;
  display: block;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-image: linear-gradient(#f1a165, #f36d0a);
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
    z-index: 1;
    background-size: 50px 50px;
    animation: move 2s linear infinite;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    overflow: hidden;
  }

  @keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
  }
`;
const BarFiller2 = styled.span`
  width: 90%;
  display: block;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-image: linear-gradient(#f0a3a3, #f42323);
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    z-index: 1;
    background-size: 50px 50px;
    animation: move 2s linear infinite;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    overflow: hidden;
  }

  @keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
  }
`;
const BarFiller3 = styled.span`
  width: 95%;
  display: block;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgb(255, 119, 90);
  background-image: linear-gradient(
    center bottom,
    rgb(43, 194, 83) 37%,
    rgb(84, 240, 84) 69%
  );
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    z-index: 1;
    background-size: 50px 50px;
    animation: move 2s linear infinite;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    overflow: hidden;
  }

  @keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
  }
`;

const BarTitle = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  position: relative;
  color: #fff;
  bottom: 5px;
`;

const BarWrapper = styled.div``;
