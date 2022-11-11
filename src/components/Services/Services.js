import React, { useState } from "react";

import cargo_1 from "../../images/cargo_1.jpg";
import cargo_2 from "../../images/purchase.jpg";
import cargo_3 from "../../images/radio.jpg";
import cargo_4 from "../../images/scrap.jpg";
import cargo_5 from "../../images/flags.jpg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesIcon,
  ServicesWrapper,
  ServicesCard,
  ServicesTextWrap,
  ServicesIcon1,
  ServicesIcon2,
  ServicesIcon3,
  ServicesIcon4,
  ServicesIcon5,
} from "./ServicesElements";

const Services = () => {
  const [scrollNav, setScrollNav] = useState("");
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard style={{ backgroundImage: `url(${cargo_1})` }}>
            <ServicesTextWrap>
              <ServicesIcon1 />
              <ServicesH2>Cargo Procurement</ServicesH2>
            </ServicesTextWrap>
          </ServicesCard>
          <ServicesCard style={{ backgroundImage: `url(${cargo_2})` }}>
            <ServicesTextWrap>
              <ServicesIcon2 />
              <ServicesH2>Sales and purchase of ships</ServicesH2>
            </ServicesTextWrap>
          </ServicesCard>
          <ServicesCard style={{ backgroundImage: `url(${cargo_3})` }}>
            <ServicesTextWrap>
              <ServicesIcon3 />
              <ServicesH2>Radio accounting services</ServicesH2>
            </ServicesTextWrap>
          </ServicesCard>
          <ServicesCard style={{ backgroundImage: `url(${cargo_4})` }}>
            <ServicesTextWrap>
              <ServicesIcon4 />
              <ServicesH2>Direct Scrap Sales</ServicesH2>
            </ServicesTextWrap>
          </ServicesCard>
          <ServicesCard style={{ backgroundImage: `url(${cargo_5})` }}>
            <ServicesTextWrap>
              <ServicesIcon5 />
              <ServicesH2>Ship Registration with Various Flags</ServicesH2>
            </ServicesTextWrap>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
