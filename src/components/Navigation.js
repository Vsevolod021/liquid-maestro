import PropTypes from 'prop-types';
import { useSwiper } from 'swiper/react';

import arrow from 'assets/arrow.svg';

const Navigation = ({ current, total }) => {
  const swiper = useSwiper();

  const isBeginning = current === 1;
  const isEnd = current === total;

  return (
    <>
      {!isBeginning && (
        <button className="navigation button-prev" onClick={() => swiper.slidePrev()}>
          <img src={arrow} alt="arrow" />
        </button>
      )}
      {!isEnd && (
        <button className="navigation button-next" onClick={() => swiper.slideNext()}>
          <img src={arrow} alt="arrow" />
        </button>
      )}
    </>
  );
};

Navigation.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number
};

export default Navigation;
