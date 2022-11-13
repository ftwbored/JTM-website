import styled from "styled-components";
import { GiCargoShip, GiCargoCrane } from "react-icons/gi";
import { BiPurchaseTag } from "react-icons/bi";
import { GoRadioTower } from "react-icons/go";
import { MdEmojiFlags } from "react-icons/md";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    height: 1100px;
  }

  @media (max-width: 480px) {
    height: 800px;
  }
`;

export const ServicesWrapper = styled.div`
  ${
    "" /* max-width: 700px;
  height: 100%;
  width: 100%;
  column-gap: 5%;
  row-gap: 5%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
  &:nth-last-child(1):nth-child(odd) {
    grid-column: 2 / span 2;
  } */
  }
  max-width: 600px;
  width: 100%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
`;

export const ServicesCard = styled.div`
  ${
    "" /* background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); 
  border: 2px solid #DCDCDC;
  transition: all 0.2s ease-in-out;
  border-radius: 4px; */
  }
  height: 150px;
  width: 400px;
  flex: 1 1 calc(16.66% - 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border: 2px solid #dcdcdc;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media (max-width: 480px) {
    width: 320px;
  }
`;

export const ServicesTextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
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

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 150px;
  }
`;

export const ServicesH2 = styled.p`
  display: inline;
  font-size: 1.2rem;
  ${"" /* margin-bottom: 10px; */}
  text-align: center;
  text-transform: uppercase;
  color: #000;
  p {
    margin-top: 5px;
    font-size: 0.75rem;
    font-style: italic;
    width: 85%;
    margin: 0 auto;
  }
`;
