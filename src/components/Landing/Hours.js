import Section from 'components/Section';

import bartender from 'assets/hours-images-bartender.png';
import cocktail from 'assets/hours-images-cocktail.png';
import letter from 'assets/O-letter.svg';

const Hours = () => {
  return (
    <Section className="hours">
      <div className="hours__photos">
        <img src={cocktail} alt="cocktail" />
        <img src={bartender} alt="bartender" />
      </div>

      <img className="hours__img-letter" src={letter} alt="letter" />

      <div className="section__content">
        <h2 className="hours__title">
          Opening <span>Hours</span>
        </h2>
        <div className="hours__info">
          <p className="hours__info-item">
            Mon - Thu: <span>5 PM - 12 AM</span>
          </p>
          <p className="hours__info-item">
            Fri - Sat: <span>5 PM - 2 AM</span>
          </p>
          <p className="hours__info-item">Sun: Closed</p>
        </div>
      </div>
    </Section>
  );
};

export default Hours;
