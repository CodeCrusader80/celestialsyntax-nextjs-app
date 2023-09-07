import {Footer, Navbar} from '../components';
import {About, Explore, Feedback, GetStarted, Hero, Insight, WhatsNew, World} from '../sections';

const Page = () => (
    <div className={"bg-primary-black overflow-hidden"}>
      <Navbar/>
      <Hero/>
      <About/>
      <Explore/>
      <GetStarted/>
      <WhatsNew/>
      <World/>
      <Insight/>
      <Feedback/>
      <Footer/>
    </div>
);

export default Page;
