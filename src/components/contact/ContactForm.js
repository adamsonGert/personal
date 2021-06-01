import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components";
import emailjs from 'emailjs-com';
import { MdLocationOn, MdEmail } from 'react-icons/md';

const Contact = () => {

const tRef = useRef()
const intialValues = { name: "", email: "", message: "" };
const [formValues, setFormValues] = useState(intialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [isFadingOut, setIsFadingOut] = useState(false);

const sendEmail = (e) => {
  console.log('Checking');
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmitting(true);
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
  if (!values.name) {
    errors.name = "The field is empty";
  } else if (values.name.length < 1) {
    errors.name = "Please enter a name";
  }
  if (!values.email) {
    errors.email = "The field is empty";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.subject) {
    errors.subject = "The field is empty";
  } else if (values.subject.length < 1) {
    errors.subject = "Please enter a message";
  }
  return errors;
};

useEffect(() => {
  const submit = () => {
    document.getElementById("contact-form").reset();
    setIsFadingOut(false);

    emailjs.sendForm('service_yivmgrd', 'gert_template','#contact-form', 'user_ZcMKtjGzxiwS92Xi7ZY3f')

      .then((result) => {
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
  };

  const resetForms = () => {
    setFormValues({
      name: "",
      email: "",
      subject: "",
    });
  }

  if (Object.keys(formErrors).length === 0 && isSubmitting) {
    submit();
    resetForms();

    setTimeout(() => {
      setIsFadingOut(true);
    }, 5000);
  }
}, [formErrors, isSubmitting]);

return (
      <Section id='contact'>
        <div ref={tRef}>
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
                    <input type="text" name="name" placeholder="Name" value={formValues.name}
                    onChange={handleChange}
                    className={formErrors.name && "input-error"} />
                    <label htmlFor="name">Name</label>
                    {formErrors.name && (
                    <div className="error">{formErrors.name}</div>
                    )}
                  </InputArea>
                  <InputArea className="input-group">
                    <input type="email" name="email" placeholder="Email" value={formValues.email}
                    onChange={handleChange}
                    className={formErrors.email && "input-error"} />
                    <label htmlFor="email">Email</label>
                    {formErrors.email && (
                    <div className="error">{formErrors.email}</div>
                    )}
                  </InputArea>
                  <InputArea className="input-group">
                    <textarea rows="5" type="text" name="subject" placeholder="Message" value={formValues.subject}
                    onChange={handleChange}
                    className={formErrors.subject && "input-error"} />
                    <label htmlFor="subject">Message</label>
                    {formErrors.subject && (
                    <div className="error">{formErrors.subject}</div>
                    )}
                  </InputArea>
                  <input type="submit" className="btn-send" value="Send" />
                </ContactForm>
              </div>
            </div>
          </Screen>
          {Object.keys(formErrors).length === 0 && isSubmitting && (
            <SuccessMsg className={isFadingOut ? 'msg-fadeout' : ''}>Message was sent successfully</SuccessMsg>
          )}
        </div>        
      </Section>
    );
  };



const Section = styled.section`
  width: 100%;
  align-items: center;
  align-self: center;
  padding-top: 100px;

  @media (min-width: 769px) {
    padding-top: 0;
  }

  .msg-fadeout {
    opacity: 0;
    transition: opacity 1s, height 1s, margin 1s;
    height: 0;
    margin-bottom: 0;
  }
`;

const Screen = styled.div`
    position: relative;
    border-radius: 15px;
    max-width: 900px;
    margin: 0 auto;

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
  color: #13c399;
  width: 100%;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.5s ease;
  height: 20px; 
  transition: opacity 1s, height 1s, margin 1s;
  opacity: 1;
  display: table;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
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
  }
`;

const InputArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  border-radius: 0.15rem;

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
    left: calc(0.75rem + 1px);
    margin-bottom: calc(0.75rem * -1.5);
    font-size: 10px;
    color: var(--title);
    font-weight: 600;
    opacity: 0;
    transform: translateY(calc(0.75rem / 4));
    transition: opacity 600ms cubic-bezier(0.22, 1, 0.19, 1), transform 600ms cubic-bezier(0.22, 1, 0.19, 1);
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
`;

export default Contact;