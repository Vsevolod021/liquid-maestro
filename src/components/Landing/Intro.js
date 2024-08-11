import Section from 'components/Section';
import Button from 'components/Button';

import menuBurger from 'assets/menu-burger.svg';
import background from 'assets/intro-img.png';
import barSpoon from 'assets/bar-spoon.svg';
import line from 'assets/intro-line.svg';
import note from 'assets/note.svg';
import logo from 'assets/logo.svg';

const Intro = () => {
  return (
    <Section className="intro">
      <div className="intro__background">
        <img src={background} alt="background" />
      </div>

      <img src={note} alt="note" className="intro__img-note" />
      <img src={line} alt="line" className="intro__img-line" />

      <img src={barSpoon} alt="bar-spoon" className="intro__img-bar-spoon" />

      <div className="section__content">
        <header className="intro__header">
          <button className="intro__header-logo">
            <img src={logo} alt="logo" />
          </button>
          <button className="intro__header-menu-burger">
            <img src={menuBurger} alt="menu-burger" />
          </button>
        </header>

        <div className="intro__text">
          <p className="intro__text-pretitle">Indulge in</p>
          <h1 className="intro__text-title">
            Liquid
            <br /> Artistry
          </h1>
          <p className="intro__text-subtitle">
            Step into a world of extraordinary flavors and unrivaled mixology expertise
          </p>
        </div>

        <Button className="intro__button">EXPLORE</Button>
      </div>
    </Section>
  );
};

export default Intro;
