import './About.css';
import dataAbout from './../../datas/about.json';
import Accordion from '../../components/accordion/Accordion';

function About() {
  return (
    <>
      <section className="bannerAbout"></section>
      <section className="accordionAbout">
        {dataAbout.map((item) => (
          <Accordion key={item.id} title={item.title} content={item.content} />
        ))}
      </section>
    </>
  );
}

export default About;
