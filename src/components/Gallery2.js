import '../styles/components/Gallery.scss';
import Header from './Header';
import Footer from './Footer';
import img1 from '../images/harversters/harvest_1.jpeg';
import img2 from '../images/harversters/harvest_2.jpeg';
import img3 from '../images/harversters/harvest_3.jpeg';
import img4 from '../images/harversters/harvest_4.jpeg';
// import img5 from '../images/harversters/harvest_5.jpg';
import img6 from '../images/harversters/harvest_6.jpeg';
import img7 from '../images/harversters/harvest_7.jpeg';
import img8 from '../images/harversters/harvest_8.jpeg';
import img9 from '../images/harversters/harvest_9.jpeg';
import img10 from '../images/harversters/harvest_10.jpeg';
import img11 from '../images/harversters/harvest_11.jpeg';
import img12 from '../images/harversters/harvest_12.jpeg';
import img13 from '../images/harversters/harvest_13.jpeg';
import img14 from '../images/harversters/harvest_14.jpeg';
import img15 from '../images/harversters/harvest_15.jpeg';

const Gallery1 = (props) => {
  return (
    <>
      <Header />
      <section className="gallery">
        <h2 className="gallery__title">The new harvesters of southern Spain</h2>
        <div className="gallery__project">
          <div className="gallery__text">
            <p>
              In the province of Huelva, Spain, it is estimated that there are
              more than 30 settlements where almost 2500 people live on a
              semi-permanent basis. With no water, no electricity and in very
              poor sanitary conditions, they wait to harvest the crops. What
              used to be temporary settlements for the workers have become small
              villages. It is a place of which it is said that you know when you
              get in but you never know when you’ll get out.
            </p>
            <p>
              Paco came to Spain in 1984. Two years ago he had to leave his
              shared flat and move into one of these settlements. With his
              perfect Spanish, he lists all the cities he has lived in so far.
              “I have not been doing anything in particular, merely surviving”.
              Surviving. Every morning, among other workers, he waits at the
              closest roundabout to his settlement. They are waiting for a van
              to appear which will take all of them to the harvest fields.
            </p>
            <p>
              For one day of work, they will receive between 15 or 20 euros.
              These jobs are sporadic and, in most cases, under the table. “We
              earn enough to buy some food but it is impossible for us to save
              any money to get out of here”, says Sayid while he offers me a
              coffee. “I came here 8 years ago, I was not expecting to stay this
              long. At least now we have access to drinkable water. Before we
              only had the well and there were a lot of illnesses around here”,
              he says while drinking from a hose, which is the only source of
              drinkable water for a settlement where nearly 800 people live.
            </p>
            <p>
              Behind him, a group of men is building a new house. Most of the
              houses are built with a wood structure and plastics to keep out
              the rain. They use the materials they find at the landfills of the
              area. In April of 2017, a fire destroyed over 300 hundred of these
              houses. Because of the materials used and the proximity of the
              houses, fires are a constant risk. “There is a social dining room
              in which they can at least get a meal a day, in between the
              harvesting crop times. I don't think they eat more than that”,
              says Domingo, a Caritas volunteer. “They normally don't tell their
              families where they are living. They lied to them saying they live
              in flats and have proper jobs and they send them all the money
              they can”.
            </p>
            <p>
              Caritas has been raising the situation of these settlements with
              the politicians of the area for years. Their goal is to raise
              awareness as well as encouraging solutions to the issue. Now I am
              talking to Luna, one of the few women living in the settlement,
              “They prefer women for the strawberry harvest but there are not
              many of them in here. We don't feel safe at all”. Luna came a year
              ago and sleeps on a mattress on the floor with other two other
              people.
            </p>
            <p>
              It is Friday night and little by little all the workers are coming
              back from the fields. There is music coming from the nearest
              village. It is Christmas day and they are celebrating. “I am going
              to change my clothes and head to the party”, says Sayid while he
              walks the 20 meters that separate the settlement from the village,
              “in here you need to do normal things every once in a while”
            </p>
          </div>
          <div class="grid-container">
            <div class="column">
              {/* <div className="gallery1__images"> */}
              <img src={img1} className="gallery__imgList--img" />
              <img src={img2} className="gallery__imgList--img" />
              <img src={img3} className="gallery__imgList--img" />
              <img src={img4} className="gallery__imgList--img" />

              {/* <img src={img5} className="gallery__imgList--img" /> */}
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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery1;
