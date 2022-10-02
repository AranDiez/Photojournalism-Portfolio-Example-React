import '../styles/components/Gallery.scss';
import Header from './Header';
import Footer from './Footer';
import img1 from '../images/outcast/outcast_1.jpeg';
import img2 from '../images/outcast/outcast_2.jpeg';
import img3 from '../images/outcast/outcast_3.jpeg';
import img4 from '../images/outcast/outcast_4.jpeg';
import img5 from '../images/outcast/outcast_5.jpeg';
import img6 from '../images/outcast/outcast_6.jpeg';
import img7 from '../images/outcast/outcast_7.jpeg';
import img8 from '../images/outcast/outcast_8.jpeg';
import img9 from '../images/outcast/outcast_9.jpeg';
import img10 from '../images/outcast/outcast_10.jpeg';
import img11 from '../images/outcast/outcast_11.jpeg';
import img12 from '../images/outcast/outcast_12.jpeg';
import img13 from '../images/outcast/outcast_13.jpeg';
import img14 from '../images/outcast/outcast_14.jpeg';
import img15 from '../images/outcast/outcast_15.jpeg';
import img16 from '../images/outcast/outcast_16.jpeg';
import img17 from '../images/outcast/outcast_17.jpeg';
import img18 from '../images/outcast/outcast_18.jpeg';
import img19 from '../images/outcast/outcast_19.jpeg';
import img20 from '../images/outcast/outcast_20.jpeg';

const Gallery1 = (props) => {
  return (
    <>
      <Header />
      <section className="gallery">
        <h2 className="gallery__title">Outcast by choice</h2>
        <div className="gallery__project">
          <div className="gallery__text">
            <p>
              For most of us, society is not a choice. We are born into it and
              we grow up surrounded by laws, prohibitions, definitions and
              other's opinion. We don't even consider the possibility of not
              following these rules. Of course, we have choices but, in
              comparison to the things we assume, they are small ones. However,
              not everybody chooses to live by these limits. Not everyone puts
              their comfort ahead of their right to decide.
            </p>
            <p>
              For the last year, I have been documenting people living by their
              own definition. Places where you can redefine yourself and decide
              every aspect of your life. Some of them live in groups, some of
              them live alone and some of them live with and for animals,
              creating a home far from the suffering that society inflicts them.
              They are different from one another, but they all have one thing
              in common: they made themselves from scratch at the cost of
              depending on nature.
            </p>
          </div>
          <div class="grid-container">
            <div class="column">
              {/* <div className="gallery1__images"> */}
              <img src={img1} className="gallery__imgList--img" />
              <img src={img2} className="gallery__imgList--img" />
              <img src={img3} className="gallery__imgList--img" />
              <img src={img4} className="gallery__imgList--img" />
              <img src={img5} className="gallery__imgList--img" />
              <img src={img6} className="gallery__imgList--img" />
              <img src={img7} className="gallery__imgList--img" />
              <img src={img8} className="gallery__imgList--img" />
            </div>
            <div class="column">
              <img src={img9} className="gallery__imgList--img" />
              <img src={img10} className="gallery__imgList--img" />
              <img src={img11} className="gallery__imgList--img" />
              <img src={img12} className="gallery__imgList--img" />
              <img src={img13} className="gallery__imgList--img" />
              <img src={img14} className="gallery__imgList--img" />
              <img src={img15} className="gallery__imgList--img" />
              <img src={img5} className="gallery__imgList--img" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery1;
