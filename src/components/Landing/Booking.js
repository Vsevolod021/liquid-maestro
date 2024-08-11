import Section from 'components/Section';
import Form from 'components/Form';

import letter from 'assets/B-letter.png';

const Booking = () => {
  return (
    <Section className="booking">
      <img className="booking__img-letter" src={letter} alt="letter" />

      <div className="section__content">
        <h2 className="booking__title">
          Bookings &<span> Contact</span>
        </h2>

        <Form />

        <div className="booking__contacts">
          <h3 className="booking__contacts-title">Contact info</h3>
          <div className="booking__contacts-text">
            <h4>Phone</h4>
            <p>(555) 123-4567</p>
            <h4>Email</h4>
            <p>info@liquidmaestro.com</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Booking;
