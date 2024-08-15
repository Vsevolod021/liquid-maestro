import { observer } from 'mobx-react';

import Booking from 'components/Landing/Booking';
import Footer from 'components/Landing/Footer';
import Intro from 'components/Landing/Intro';
import About from 'components/Landing/About';
import Hours from 'components/Landing/Hours';
import Menu from 'components/Landing/Menu';

const Page = observer(() => {
  return (
    <div className="home-page">
      <Intro />
      <About />
      <Hours />
      <Menu />
      <Booking />
      <Footer />
    </div>
  );
});

export default Page;
