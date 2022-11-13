import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useState } from "react";

export const ContactUs = () => {
  const form = useRef();
  const [isSuccessfullySubmitted, setISuccessfullySubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_66badbw",
        "template_fwv9p75",
        form.current,
        "7BiLP9m1B18gnn5QM"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setISuccessfullySubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <ContactContainer id="contact">
        <ContactHeader>Contact Us</ContactHeader>
        <StyledContactForm>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" required />
            {isSuccessfullySubmitted && (
              <div className="success">Email successfully sent!</div>
            )}
          </form>
        </StyledContactForm>
      </ContactContainer>
    </>
  );
};

export default ContactUs;
const ContactContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding-bottom: 50px;
`;
const ContactHeader = styled.h1`
  margin-top: 50px;
  font-size: 3.5rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
const StyledContactForm = styled.div`
  border: 2px solid black;
  padding: 20px;
  border-radius: 10px;
  margin-top: 50px;
  width: 600px;
  background: #fff;
  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 480px) {
    width: 300px;
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
