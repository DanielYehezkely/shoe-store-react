import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

import {GITHUB_LINK, GMAIL, LINKEDIN_LINK } from '../../../models/constants'



import './Footer.css';

const Footer = () => {

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(GMAIL);
      toast.success('Email copied to clipboard!', {
        className: 'custom-toast-position', 
        autoClose: 2000,
        hideProgressBar: true,
      });
    } catch (err) {
      toast.error('Failed to copy email.', {
        position: 'bottom-right', 
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="Footer">
      <div className="footer-logo">
        <img src="/assets/svg/logo-no-background.svg" alt="footer-logo" />
      </div>
      <div className="copyrights">
        &copy; 2024 Daniel Yehezkely. All rights reserved.
        <a href="/terms-of-service">Terms of Service</a> | <a href="/privacy-policy">Privacy Policy</a>
      </div>
      <div className="footer-social-links">
        <a  href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="icon-link github-link">
          <FaGithub />
        </a>
        <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="icon-link linked-in-link">
          <IoLogoLinkedin />
        </a>
        <span className="icon-link email-link" onClick={handleCopy}>
          <SiGmail />
        </span>
      </div>
      <ToastContainer /> 
    </div>
  );
};

export default Footer;