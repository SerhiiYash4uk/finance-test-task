import React from 'react';

import './Footer.css';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div>All rights reserved</div>
      <div>
        Developed by
        <a
          className='footer-linkedin-link'
          title='LinkedIn profile'
          href='https://www.linkedin.com/in/serhii-yashchuk-60743b22b/'
          rel='noreferrer'
          target='_blank'>
          Serhii Yashchuk
        </a>
      </div>
    </footer>
  );
};
