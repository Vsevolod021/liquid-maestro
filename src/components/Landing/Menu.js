import Section from 'components/Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import deviceStore from 'store/deviceStore';
import { useEffect, useState } from 'react';
import slides from 'lib/swiperSlides';

import Navigation from 'components/Navigation';

import line from 'assets/menu-line.svg';

const Menu = () => {
  const initialSlidesNum = deviceStore.isMobile ? 1 : 2;

  const [slidesPerView, setSlidesPerView] = useState(initialSlidesNum);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [activeIndex, setActiveIndex] = useState(0);

  const updateWindowWidth = () => {
    deviceStore.checkDeviceState();
    const slidesPerView = deviceStore.isDesktopState() ? 2 : 1;
    setSlidesPerView(slidesPerView);

    setWindowWidth(window.innerWidth);
  };

  const calcSlidesOffset = () => {
    const slideContentWidth = deviceStore.isDesktopState() ? 544 : 277;

    return windowWidth / 2 - slideContentWidth / 2;
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  return (
    <Section className="menu">
      <div className="section__content">
        <h2 className="menu__title">
          Cocktails<span> Menu</span>
        </h2>
      </div>

      <img className="menu__img-line" src={line} />

      <Swiper
        className="menu__swiper"
        onActiveIndexChange={(data) => setActiveIndex(data.activeIndex)}
        initialSlide={activeIndex}
        touchReleaseOnEdges={true}
        slidesPerView={slidesPerView}
        spaceBetween={deviceStore.isDesktopState() ? 274 : 0}
        slidesOffsetBefore={calcSlidesOffset}
        slidesOffsetAfter={calcSlidesOffset}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="slide">
            <img src={slide.src} className="slide__img" />
            <div className="slide__text">
              <div className="slide__text-left">
                <p className="slide__text-pretitle">{slide.pretitle}</p>
                <h3 className="slide__text-title">
                  <b>{slide.title.bold}</b>
                  <span>{slide.title.normal}</span>
                </h3>
              </div>
              <div className="slide__text-right">
                <p className="slide__text-subtitle">
                  <b>{slide.subtitle.bold}</b>
                  <span>{slide.subtitle.normal}</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <Navigation current={activeIndex + 1} total={slides.length} />
      </Swiper>
    </Section>
  );
};

export default Menu;
