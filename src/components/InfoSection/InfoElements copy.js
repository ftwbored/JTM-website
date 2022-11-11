import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  height: 120vh;
  display: flex;
  overflow: hidden visible;
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
  max-width: 1500px;
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
  max-width: 560px;
  height: 150px;
  margin-bottom: 35px;
  font-size: 1.2rem;
  line-height: 25px;
  font-style: italic;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: #000;
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
  padding-bottom: 15px;
  font-size: 3.5rem;
  line-height: 1.1;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  color: ${({ lightText }) => (lightText ? "#010606" : "#f7f8fa")};

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  padding-bottom: 15px;
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
  font-size: 2.75rem;
  line-height: 1.1;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  color: ${({ lightText }) => (lightText ? "#010606" : "#f7f8fa")};\
  text-align: ${({ textAlign }) => (textAlign ? "left" : "right")};

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  max-width: 450px;
  height: 150px;
  margin-bottom: 35px;
  font-size: 1.2rem;
  margin: 0 auto;
  font-weight: 300;
  font-family: "Roboto", sans-serif;

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
  height: 350px;
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  object-fit: contain;
`;

export const BarWrap = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 50px;
`;
export const BarRow = styled.div``;

export const Bar1 = styled.div`
  width: 450px;
  height: 20px;
  position: relative;
  border-radius: 10px;
  text-align: right;
  border: 5px solid white;
`;
export const Bar1Color = styled.div`
  position: absolute;
  background-color: yellow;
  width: 0px;
  height: 10px;
  border-radius: 15px;
  animation: progres 5s infinite linear;
  @keyframes progres {
    0% {
      width: 0%;
    }
    25% {
      width: 50%;
    }
    50% {
      width: 75%;
    }
    75% {
      width: 85%;
    }
    100% {
      width: 100%;
    }
  }
`;
export const Bar2 = styled.div`
  width: 450px;
  height: 18px;
  position: relative;
  border-radius: 10px;
  text-align: right;
  border: 5px solid white;
`;
export const Bar2Color = styled.div`
  position: absolute;
  background-color: red;
  width: 0px;
  height: 10px;
  border-radius: 15px;
  animation: progres 5s infinite linear;
  animation-delay: 1s;
  @keyframes progres {
    0% {
      width: 0%;
    }
    25% {
      width: 50%;
    }
    50% {
      width: 75%;
    }
    75% {
      width: 85%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const Bar3 = styled.div`
  width: 450px;
  height: 15px;
  position: relative;
  border-radius: 10px;
  text-align: right;
  border: 5px solid white;
`;
export const Bar3Color = styled.div`
  position: absolute;
  background-color: orange;
  width: 0px;
  height: 10px;
  border-radius: 15px;
  animation: progres 5s infinite linear;
  animation-delay: 2s;
  @keyframes progres {
    0% {
      width: 0%;
    }
    25% {
      width: 50%;
    }
    50% {
      width: 75%;
    }
    75% {
      width: 85%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const Bar1Caption = styled.p`
  color: black;
  font-size: 0.75rem;
  text-transform: uppercase;
  position: relative;
  top: 5px;
`;

export const BarPercent = styled.div`
  color: white;
  position: relative;
  padding: 5px;
  text-align: center;
  top: -15px;
  left: 400px;
  background: gray;
  width: 50px;
  border-radius: 5px;
  font-size: 0.75rem;
`;

export const Tip = styled.span`
  width: 1px;
  height: 20px;
  border-left: 10px solid #fff;
  border-right: 10px solid #fff;
  border-top: 8px solid #000;
  position: relative;
  top: 26px;
  right: 23px;
  z-index: -10;
`;
