import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h1 className="contact-heading wrapper-background">
        Contact <span className="contact-sub-heading">Our Team</span>
      </h1>

      <div className="container">
        <div className="contact-inner">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xjkbvvay"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <input
                type="number"
                name="number"
                placeholder="Phone Number"
                autoComplete="off"
                required
              />
              <textarea
                name="message"
                cols="30"
                rows="6"
                placeholder="Message"
                autoComplete="off"
                required
              ></textarea>

              <input type="submit" value="submit" />
            </form>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7362.539118427596!2d75.87357824252142!3d22.681007117658393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcc03e36712d%3A0xb6f3c2bf734a7c!2sInstitute%20of%20Engineering%20%26%20Technology%2C%20DAVV!5e0!3m2!1sen!2sin!4v1719740324172!5m2!1sen!2sin"
              width="90%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-heading {
    text-transform: uppercase;
    font-size: 3rem;
    text-align: center;
    .contact-sub-heading {
      color: ${({ theme }) => theme.colors.bg};
    }
  }
  .contact-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
    margin: 6rem 0;
  }
  .contact-form {
    width: 100%;
    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.bg};
          color: ${({ theme }) => theme.colors.bg};
        }
      }
    }
  }
  .map {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 5px 0px #888888;
    padding: 0.2rem;
    margin: 0 auto;
    border-radius: 1rem;
    padding: 2rem;
    iframe {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      border-radius: 1rem;
      width: 100%;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .contact-heading {
      font-size: 4rem;
    }
    .contact-inner {
      flex-direction: row;
    }
    .contact-form {
      width: 40%;
    }
    .map {
      width: 60%;
    }
    .contact-inner {
      margin: 10rem 0 12rem;
    }
  }
`;

export default Contact;
