import Section from 'components/Section';

import background from 'assets/footer-img.jpg';
import instagram from 'assets/instagram.svg';
import facebook from 'assets/facebook.svg';
import twitter from 'assets/twitter.svg';
import logo from 'assets/logo.svg';

const Footer = () => {
  return (
    <Section className="footer">
      <div className="footer__background">
        <img src={background} alt="background" />
      </div>
      <div className="section__content">
        <div className="footer__social-media">
          <a href="">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
        <p className="footer__text">Copyright © 2023 XIDE</p>
        <div className="footer__logo">
          <img src={logo} alt="logo" />
          <span>World of extraordinary flavors & unrivaled mixology expertise</span>
        </div>
        <p className="footer__text">Design by XIDE</p>
      </div>
    </Section>
  );
};

export default Footer;
