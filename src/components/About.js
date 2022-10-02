import Header from './Header';
import Footer from './Footer';
import me from '../images/me.jpeg';

const About = (props) => {
  return (
    <>
      <Header />

      <h2 className="about__title">About</h2>
      <div className="about__section">
        <p>
          Photography became my passion as an opportunity to meet people, to
          learn about other ways of living and to experience other cultures.
          Through the years It has evolved from a passport into other people's
          lives to a tool. A powerful tool to create awareness and understanding
          between cultures and between species. A way to give some sense to our
          similarities and to remind us of the need for change, for empathy, to
          become the best version of ourselves: between one another and towards
          the rest of the species.
        </p>
        <p>
          Graduated in journalism and Master's Degree in Documentary Photography
          and Photojournalism from the London College of Communication, over the
          years I have had the opportunity to see my work exhibited and
          published in countries like the Uk, Spain, and Portugal.
        </p>
        <img alt="m" src={me} className="about__me" />
      </div>
      <Footer />
    </>
  );
};

export default About;
