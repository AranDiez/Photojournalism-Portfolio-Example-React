import '../styles/components/Section3.scss';
import img1 from '../images/slide1.jpg';
import img2 from '../images/slide2.jpg';
import img3 from '../images/slide3.jpg';
import img4 from '../images/slide4.jpg';

const Section3 = (props) => {
  return (
    <section className="section3">
      <div className="slideshow">
        <div className="slide-wrapper">
          <div className="slide">
            <img src={img2} className="section3__imgList--img" />
          </div>
          <div className="slide">
            <img src={img1} className="section3__imgList--img" />
          </div>
          <div className="slide">
            <img src={img3} className="section3__imgList--img" />
          </div>
          <div className="slide">
            <img src={img4} className="section3__imgList--img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
