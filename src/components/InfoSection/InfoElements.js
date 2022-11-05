import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;

  height: 100vh;
  display: flex;

  background: ${({ LightBg }) => (LightBg ? "#f9f9f9" : "#fff")};

  @media (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 420px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  margin-top: 75px;
  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

export const SubInfoTitle = styled.p`
  max-width: 800px;
  height: 150px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 25px;
  margin: 0 auto;

  text-align: ${({ textAlign }) => (textAlign ? "left" : "right")};
  color: ${({ darkText }) => (darkText ? "#000" : "#000")};
  @media (max-width: 768px) {
    width: 100vw;
    text-align: center;
  }
`;

export const TextBorder = styled.div`
  border: 1px solid black;
  padding: 20px;
`;

export const InfoTitle = styled.h1`
  margin: 0 auto;
  padding-bottom: 30px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#010606" : "#f7f8fa")};

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media (max-width: 768px) {
    align-items: center;
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1 ' 'col2 col2 '`}
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: #16537e;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: ${({ textAlign }) => (textAlign ? "left" : "right")};
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#010606" : "#f7f8fa")};

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  max-width: 500px;
  height: 150px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 25px;
  margin: 0 auto;

  text-align: ${({ textAlign }) => (textAlign ? "right" : "left")};
  color: ${({ darkText }) => (darkText ? "#000" : "#000")};
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  height: 250px;
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
