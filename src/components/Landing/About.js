import Section from 'components/Section';

import cocktail from 'assets/about-cocktail.png';
import letter from 'assets/A-letter.svg';

const About = () => {
  return (
    <Section className="about">
      <img className="about__img-letter" src={letter} alt="letter" />

      <div className="section__content">
        <img className="about__img-cocktail" src={cocktail} alt="cocktail" />
        <div className="about__text">
          <p className="about__text-main">
            Liquid Maestro, the newest hotspot in downtown <u>Los Angeles</u>. Our skilled
            mixologists are passionate about crafting exceptional cocktails that will delight your
            senses.
          </p>
          <p className="about__text-additional">
            With an ambiance that exudes elegance and a commitment to delivering unforgettable
            experiences, Liquid Maestro is the ultimate destination for cocktail enthusiasts. Join
            us for an exquisite journey into the world of liquid artistry.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
