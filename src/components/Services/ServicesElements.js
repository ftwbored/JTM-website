import styled from "styled-components";
import { GiCargoShip, GiCargoCrane } from "react-icons/gi";
import { BiPurchaseTag } from "react-icons/bi";
import { GoRadioTower } from "react-icons/go";
import { MdEmojiFlags } from "react-icons/md";

export const ServicesContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f8ff;
  padding-top: 80px;
  padding-bottom: 120px;

  @media (max-width: 768px) {
    height: 1100px;
  }

  @media (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1500px;
  height: 100%;
  width: 100%;
  column-gap: 5%;
  row-gap: 5%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 50px;

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
  height: 250px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

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
  justify-content: flex-start;
  align-items: center;
  background: #191970;
  opacity: 85%;
  padding: 10px;
  border: 2px solid white;
  border-radius: 5px;
  margin-top: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const ServicesIcon1 = styled(GiCargoShip)`
  color: #fff;
  font-size: 1.2rem;
  ${"" /* margin-bottom: 10px; */}
`;
export const ServicesIcon2 = styled(BiPurchaseTag)`
  color: #fff;
  font-size: 1.2rem;
  ${"" /* margin-bottom: 10px; */}
`;
export const ServicesIcon3 = styled(GoRadioTower)`
  color: #fff;
  font-size: 1.2rem;
  ${"" /* margin-bottom: 10px; */}
`;
export const ServicesIcon4 = styled(GiCargoCrane)`
  color: #fff;
  font-size: 1.2rem;
  ${"" /* margin-bottom: 10px; */}
`;
export const ServicesIcon5 = styled(MdEmojiFlags)`
  color: #fff;
  font-size: 1.2rem;
  ${"" /* margin-bottom: 10px; */}
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #000;
  margin-bottom: 32px;

  font-family: "raleway", sans-serif;
  text-transform: uppercase;
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h1`
  display: inline;
  font-size: 1rem;
  ${"" /* margin-bottom: 10px; */}
  text-align: center;
  font-weight: 700;
  font-family: "raleway", sans-serif;
  text-transform: uppercase;
  color: #fff;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  font-family: "raleway", sans-serif;
`;
