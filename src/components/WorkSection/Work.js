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
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
    url(${bg2});

  @media (max-width: 1500px) {
    height: 100vh;
  }

  @media (max-width: 480px) {
    height: 90vh;
    padding-top: 15px;
  }
`;
const WorkWrapper = styled.div`
  display: flex;
  @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const WorkTextWrapper = styled.div`
  margin-right: 50px;
  padding-right: 50px;
  max-width: 800px;
  color: #fff;

  @media (max-width: 1500px) {
    padding: 0;
    margin: 0;
    text-align: center;
  }
`;
const WorkTitle = styled.h1`
  font-size: 1.25rem;
  padding-bottom: 7.5px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
const WorkDescription = styled.p`
  letter-spacing: 1.5px;
  line-height: 25px;
  width: 600px;
  @media (max-width: 1500px) {
    letter-spacing: 0;
    width: 100%;
  }

  @media (max-width: 800px) {
    font-size: 0.75rem;
    width: 100%;
  }
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
  @media (max-width: 768px) {
    padding: 0;
    margin: 0 auto;
  }
`;

const BarRow = styled.div`
  width: 550px;
  box-sizing: content-box;
  height: 10px; /* Can be anything */
  position: relative;
  background: #555;
  border-radius: 25px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
  @media (max-width: 800px) {
    width: 400px;
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;
const BarFiller1 = styled.span`
  width: 90%;
  display: block;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #ffd700;

  position: relative;
  overflow: hidden;
`;
const BarFiller2 = styled.span`
  width: 90%;
  display: block;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #ff6347;

  position: relative;
  overflow: hidden;
`;
const BarFiller3 = styled.span`
  width: 95%;
  display: block;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #ffa500;

  position: relative;
  overflow: hidden;
`;

const BarTitle = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  position: relative;
  color: #fff;
  bottom: 5px;
`;

const BarWrapper = styled.div``;
