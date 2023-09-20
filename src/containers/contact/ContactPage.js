import React, { useState, useEffect, useMemo } from 'react';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const initialValues = useMemo(() => ({ name: "", email: "", subject: "", message: "" }), []);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const sendEmail = (e) => {
      e.preventDefault();
      const errors = validate(formValues);
      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
          setIsSubmitting(true);
      }
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const validate = (values) => {
      let errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      if (!values.name.trim()) {
          errors.name = "Please enter a name";
      }
      if (!values.email.trim()) {
          errors.email = "The field is empty";
      } else if (!regex.test(values.email)) {
          errors.email = "Invalid email format";
      }
      if (!values.subject.trim()) {
          errors.subject = "Please enter a message";
      }
      return errors;
  };

  useEffect(() => {
    if (!isSubmitting) return;

    const formElement = document.getElementById("contact-form");
    emailjs.sendForm('service_yivmgrd', 'gert_template', formElement, 'user_ZcMKtjGzxiwS92Xi7ZY3f')
        .then((result) => {
            console.log(result.text);
            formElement.reset();
            setFormValues(initialValues);
            setTimeout(() => {
                setIsFadingOut(true);
            }, 5000);
        }, (error) => {
            console.log(error.text);
        })
        .finally(() => {
            setIsSubmitting(false);
        });
}, [isSubmitting, initialValues]);

    return (
        <Section id='contact'>
            <Screen>
                <div className="screen-header">
                <div className="screen-header-left">
                    <div className="screen-header-button close"></div>
                    <div className="screen-header-button maximize"></div>
                    <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                    <div className="screen-header-dot"></div>
                    <div className="screen-header-dot"></div>
                    <div className="screen-header-dot"></div>
                </div>
                </div>
                <div className="screen-body">
                    <div className="screen-body-item left">
                    <div className="form-title">
                        <h3>Let's talk</h3>
                        <span>I'm available for freelance work.<br /> Drop me a line if you fancy a chat.</span>
                        <hr />
                        <ul>
                        <li><MdLocationOn/><span>Estonia, Tallinn</span></li>
                        <li><MdEmail/><span>gert_adamson@hotmail.com</span></li>
                        </ul>
                    </div>
                </div>
                <div className="screen-body-item">
                    <ContactForm className="contact-form" id="contact-form" onSubmit={sendEmail} noValidate>
                        <InputArea className="input-group">
                            <input type="text" aria-label="Name input" name="name" id="name" placeholder="Name" value={formValues.name}
                            onChange={handleChange}
                            className={formErrors.name && "input-error"} />
                            <label htmlFor="name">Name</label>
                            {formErrors.name && (
                            <div className="error">{formErrors.name}</div>
                            )}
                        </InputArea>
                        <InputArea className="input-group">
                            <input type="email" aria-label="Email input" name="email" id="email" placeholder="Email" value={formValues.email}
                            onChange={handleChange}
                            className={formErrors.email && "input-error"} />
                            <label htmlFor="email">Email</label>
                            {formErrors.email && (
                            <div className="error">{formErrors.email}</div>
                            )}
                        </InputArea>
                        <InputArea className="input-group">
                            <textarea rows="5" aria-label="Message text" name="subject" id="subject" placeholder="Message" value={formValues.subject}
                            onChange={handleChange}
                            className={formErrors.subject && "input-error"} />
                            <label htmlFor="subject">Message</label>
                            {formErrors.subject && (
                            <div className="error">{formErrors.subject}</div>
                            )}
                        </InputArea>
                        <input type="submit" aria-label="Submit button" className="btn-send" value="Send" />
                    </ContactForm>
                  </div>
                </div>
            </Screen>
           {Object.keys(formErrors).length === 0 && isSubmitting && (
                <SuccessMsg className={isFadingOut ? 'msg-fadeout' : ''}><FaCheckCircle />Message was sent successfully</SuccessMsg>
            )}
      </Section>
    );
};

const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 100px;
    position: relative;

    @media (min-width: 769px) {
        height: 100vh;
        padding-top: 0;
    }

    .msg-fadeout {
        opacity: 0;
        transition: opacity 2s, height 2s, margin 2s;
        height: 0;
        margin-bottom: 0;
    }
`;

const Screen = styled.div`
    position: relative;
    border-radius: 15px;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    opacity: 0;
    animation: slideInFromBottom 1s forwards;
    transition: opacity 1s cubic-bezier(.23, 1, .32, 1), transform 1s cubic-bezier(.23, 1, .32, 1);

    .screen-header {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      border: 2px solid var(--formBorder);
      border-bottom: 0;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;

      &-left {
        margin-right: auto;
      }

      &-button {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 3px;
        border-radius: 8px;
        background: white;

        &.close {
          background: #ed1c6f;
        }

        &.maximize {
          background: #e8e925;
        }

        &.minimize {
          background: #74c54f;
        }
      }

      &-dot {
        width: 3px;
        height: 3px;
        margin-left: 2px;
        border-radius: 8px;
        background: #999;
      }

      &-right {
        display: flex;
      }
    }

    .screen-body {
      flex-direction: column;
      display: flex;
      padding: 24px;
      border: 2px solid var(--formBorder);

      @media (min-width: 769px) {
        flex-direction: row;
        padding: 50px;
      }

      &-item {
        flex: 1;

        &.left {
          display: flex;
          flex-direction: column;
          margin-bottom: 24px;

          @media (min-width: 769px) {
            margin-right: 100px;
            margin-bottom: 0;
          }
        }

        .form-title {
          display: flex;
          flex-direction: column;
          position: relative;
          color: var(--text);

          h3 {
            text-transform: uppercase;
            letter-spacing: 0.1em;
            line-height: 1.7;
            font-weight: 800;
            font-size: 24px;
          }

          hr {
            border-bottom: 1px solid var(--hr);
            margin: 24px 0;
          }

          ul {
            list-style: none;

              li {
              padding: 9px 0;
              display: flex;
              align-items: center;

              svg {
                margin-right: 10px;
                color: var(--primary);
                width: 20px;
                height: 20px;
              }
            }
          }
        }

        .form-group {
          margin-bottom: 15px;
        }
      }
    }
`;

const SuccessMsg = styled.div`
    background: #13c399;
    font-weight: 500;
    width: 100%;
    margin-bottom: 1rem;
    overflow: hidden;
    transition: opacity 2s,height 2s,margin 2s;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    bottom: auto;
    top: 50%;
    width: fit-content;
    padding: 1rem;
    border-radius: 5px;

    @media (min-width: 769px) {
      top: auto;
      bottom: 5rem;
    }

    svg {
      margin-right: .5rem;
    }
`;

const ContactForm = styled.form`
  .btn-send {
    color: var(--background);
    background-color: var(--primary);
    font-weight: 700;
    border: 0;
    position: relative;
    display: inline-block;
    box-shadow: 0 2px 4px 0 rgba(100,105,124,.24);
    border-radius: 3px;
    transition: all .2s;
    line-height: 23px;
    width: 100%;
    text-align: center;
    padding: 13px 30px;
    font-size: 13px;

    &:hover {
      cursor: pointer;
      background-color: var(--primaryHover);
    }
  }
`;

const InputArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  border-radius: .15rem;

  &:focus-within {
    label {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ::placeholder {
    color: var(--white);
  }

  & + * {  margin-top: 24px; }

  label {
    position: absolute;
    top:  .45rem;
    left: calc(.75rem + 1px);
    margin-bottom: calc(.75rem * -1.5);
    font-size: 10px;
    color: var(--title);
    font-weight: 600;
    opacity: 0;
    transform: translateY(calc(.75rem / 4));
    transition: opacity 600ms cubic-bezier(.22, 1, .19, 1), transform 600ms cubic-bezier(.22, 1, .19, 1);
  }

  .error {    
    color: #dc0e0e;
    position: absolute;
    bottom: -20px;
    font-size: 11px;
    font-weight: 500;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    padding: calc(0.75rem * 1.5) 0.75rem;
    font-size: 1rem;
    width: 100%;
    color: var(--text);
    background-color: var(--formInput);
    outline: none;
    border: none;
    resize: none;
    border-radius: 0.15rem;
    transition: border-color 600ms cubic-bezier(0.22, 1, 0.19, 1),box-shadow 600ms cubic-bezier(0.22, 1, 0.19, 1),transition 600ms cubic-bezier(0.22, 1, 0.19, 1);
    
    &::placeholder {
      color: gray;
      transition: color 600ms cubic-bezier(0.22, 1, 0.19, 1),transform 600ms cubic-bezier(0.22, 1, 0.19, 1);
      transition-delay: 200ms;
    }
    
    &:focus {
      border-color: #d8d8d8;
      box-shadow: none;
    }
    
    &:focus::placeholder { 
      color: transparent;
      transform: translateX(calc(0.75rem / 2));
      transition-duration: 0ms;
      transition-delay: 0ms;
    }
    
    &:focus,
    &:not(:placeholder-shown) {
      padding: calc(0.75rem * 2)
    0.75rem
    0.75rem;
    }
    
    &:not(:placeholder-shown) {
      &:invalid:not(:focus) {      
        + label { opacity: 1; }
      }

      + label {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    &:-webkit-autofill + label { opacity: 1; }
  }

  textarea {
    height: auto;
    font-family: inherit;
    font-size: inherit;
  }

  @keyframes slideInFromBottom {
      0% {
        transform: translateY(30%);
        opacity: 0;
      }

      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
`;
  
export default Contact;