import React from "react";
import icon1 from "../../images/svg-1.svg";
import icon2 from "../../images/svg-2.svg";
import icon3 from "../../images/svg-3.svg";

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
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>Premium benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cashback
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>Premium benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cashback
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>Premium benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cashback
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
