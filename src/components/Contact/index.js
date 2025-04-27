import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  resize: vertical;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const TcContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};

  input {
    margin-right: 8px;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    cursor: pointer; 
  }
`;


const TcText = styled.div`
  color: ${({ theme }) => theme.BgLight};
  @media (max-width: 575px) {
    font-size: 12px;
  }
`;

const TC = styled.a`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;

  &:hover{
    cursor: pointer;
    opacity: 0.9;
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-align: center;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 20px 20px 60px #1f2634;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
    filter: brightness(0.5);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/TermsandConditions');
  };

  const [open, setOpen] = useState({ open: false, message: '', severity: 'success' });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        setOpen({ open: true, message: 'Email sent successfully!', severity: 'success' });
        form.current.reset();
        setTermsAccepted(false);
      }, (error) => {
        console.log(error.text);
        setOpen({ open: true, message: 'Failed to send email. Please try again.', severity: 'error' });
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or collaboration!</Desc>
        <Desc>
  <a href="mailto:thejaswivarma@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
    📧 thejaswivarma@gmail.com
  </a>
  <br></br>

  <label>LinkedIn : </label>
  <SocialMediaIcon
            href={`https://www.linkedin.com/in/thejaswigadhiraju`}
            target="_blank"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </SocialMediaIcon>
</Desc>


      </Wrapper>
    </Container>
  );
};

export default Contact;
