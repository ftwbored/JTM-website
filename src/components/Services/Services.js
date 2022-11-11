import React from "react";
import icon1 from "../../images/agreement.png";
import icon2 from "../../images/cargo-sale.png";
import icon3 from "../../images/rservice.png";
import icon4 from "../../images/scrapsales.png";
import icon5 from "../../images/ship.png";

import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesIcon,
  ServicesWrapper,
  ServicesCard,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Cargo Procurement</ServicesH2>
          <ServicesP>
            With our experience in the market, our procurement teams from the
            shipper's side recognize tenders from the inside out.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>Sales and purchase of ships</ServicesH2>
          <ServicesP>We help you with the process of buying cargos</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>Radio accounting services</ServicesH2>
          <ServicesP>
            We ensure that your vessel is accounted by a Radio Accounting
            Authority
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon4} />
          <ServicesH2>Direct scrap sales</ServicesH2>
          <ServicesP>
            We ensure you get the highest value for your scrap
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon5} />
          <ServicesH2>Ship registration with various flags</ServicesH2>
          <ServicesP>
            Panama, Commonwealth of Dominica, Mongolia, Belize
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
