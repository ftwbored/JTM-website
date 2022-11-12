import React from "react";
import styled from "styled-components";
import bg2 from "../../images/cargo.jpg";
import { Link } from "react-scroll";

const Quote = () => {
  return (
    <>
      <QuoteContainer>
        <QuoteTextWrap>
          <p>
            We always believe that forging a{" "}
            <strong>“Lifetime of partnership”</strong> is paramount. We only
            want the best for our clients, and we will only give the best as a
            minimum to them.
          </p>
          <QuoteButton to="contact" smooth={true} duration={500}>
            Get a quote
          </QuoteButton>
        </QuoteTextWrap>
      </QuoteContainer>
    </>
  );
};

export default Quote;

const QuoteContainer = styled.div`
  background-image: url(${bg2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  opacity: 95%;
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuoteTextWrap = styled.div`
  color: #fff;
  font-size: 2rem;
  max-width: 1500px;
  text-align: center;

  p {
    padding-bottom: 40px;
  }
`;

const QuoteButton = styled(Link)`
  border: 2px solid #ff7f50;
  border-radius: 15px;
  padding: 20px;
  background: #ff7f50;
  color: #fff;
  font-size: 0.75rem;
  letter-spacing: 3px;
  cursor: pointer;

  &:hover {
    background: black;
  }
  text-transform: uppercase;
  font-weight: bold;
`;
