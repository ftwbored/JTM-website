import styled from "styled-components";
import { GiCargoShip, GiCargoCrane } from "react-icons/gi";
import { BiPurchaseTag } from "react-icons/bi";
import { GoRadioTower } from "react-icons/go";
import { MdEmojiFlags } from "react-icons/md";

export const ServicesContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding-top: 50px;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    height: 1100px;
  }

  @media (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1500px;
  max-height: 200px;
  height: 100%;
  width: 100%;
  column-gap: 5%;
  row-gap: 5%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  ${"" /* padding: 0 50px; */}

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  ${"" /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */}
  border: 2px solid #DCDCDC;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesTextWrap = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: center;
  align-items: center;
  ${"" /* background: #191970; */}
  opacity: 85%;
  padding: 10px;
  border: 2px solid white;
  border-radius: 5px;
  margin-top: 5px;
  ${"" /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */}
`;

export const ServicesIcon1 = styled(GiCargoShip)`
  color: #000;
  font-size: 2rem;
  ${"" /* margin-bottom: 10px; */}
`;
export const ServicesIcon2 = styled(BiPurchaseTag)`
  color: #000;
  font-size: 2rem;
  ${"" /* margin-bottom: 10px; */}
`;
export const ServicesIcon3 = styled(GoRadioTower)`
  color: #000;
  font-size: 2rem;
  ${"" /* margin-bottom: 10px; */}
`;
export const ServicesIcon4 = styled(GiCargoCrane)`
  color: #000;
  font-size: 2rem;
  ${"" /* margin-bottom: 10px; */}
`;
export const ServicesIcon5 = styled(MdEmojiFlags)`
  color: #000;
  font-size: 2rem;
  ${"" /* margin-bottom: 10px; */}
`;

export const ServicesH1 = styled.h1`
  font-size: 3rem;
  color: #000;
  margin-bottom: 32px;
  border-bottom: 2px solid #ff7f50;
  border-width: medium;

  font-family: "raleway", sans-serif;
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.p`
  display: inline;
  font-size: 1.2rem;
  ${"" /* margin-bottom: 10px; */}
  text-align: center;
  font-family: "raleway", sans-serif;
  text-transform: uppercase;
  color: #000;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  font-family: "raleway", sans-serif;
`;
