import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import './footer.css';

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer-content">
        {/* Copyright text */}
        <Typography component="p" className="footer-text">
          Copyright ©2023 All rights reserved | Developed by{' '}
          <Link href="https://github.com/codx-paradise" target="_blank" rel="noopener noreferrer" className="footer-link">
            Ak Moorthi
          </Link>
        </Typography>

        {/* Social Media Icons */}
        <Box className="footer-icons">
          <IconButton 
            color="primary" 
            href="https://github.com/codx-paradise" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
          >
            <GitHub />
          </IconButton>
          <IconButton 
            color="primary" 
            href="https://www.linkedin.com/in/ak-moorthi" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
          >
            <LinkedIn />
          </IconButton>
          <IconButton 
            color="primary" 
            href="https://twitter.com/ak_moorthi" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Twitter"
          >
            <Twitter />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
