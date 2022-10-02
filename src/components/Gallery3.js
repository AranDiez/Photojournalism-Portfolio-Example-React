import '../styles/components/Gallery.scss';
import Header from './Header';
import Footer from './Footer';
import img1 from '../images/uncertainty/uncertainty_1.jpeg';
import img2 from '../images/uncertainty/uncertainty_2.jpeg';
import img3 from '../images/uncertainty/uncertainty_3.jpeg';
import img4 from '../images/uncertainty/uncertainty_4.jpeg';
import img5 from '../images/uncertainty/uncertainty_5.jpeg';
import img6 from '../images/uncertainty/uncertainty_6.jpeg';
import img7 from '../images/uncertainty/uncertainty_7.jpeg';
import img8 from '../images/uncertainty/uncertainty_8.jpeg';
import img9 from '../images/uncertainty/uncertainty_9.jpeg';
import img10 from '../images/uncertainty/uncertainty_10.jpeg';
import img11 from '../images/uncertainty/uncertainty_11.jpeg';
import img12 from '../images/uncertainty/uncertainty_12.jpeg';
import img13 from '../images/uncertainty/uncertainty_13.jpeg';
import img14 from '../images/uncertainty/uncertainty_14.jpeg';
import img15 from '../images/uncertainty/uncertainty_15.jpeg';

const Gallery3 = (props) => {
  return (
    <>
      <Header />
      <section className="gallery">
        <h2 className="gallery__title">Uncertainty</h2>
        <div className="gallery__project">
          <div className="gallery__text">
            <p>
              A dent stair, a shelf full of shoes and books for common use, two
              rooms full of bunk beds and uncertainty. I am inside of one of the
              many orphanages in Kathmandu and that word is stuck in my mind. I
              see them coming from school and all I can think of is, What life
              will these kids have? What future is in front of them?
            </p>
            <p>
              In Nepal, 41% of infants suffer from chronic hunger. Almost the
              majority of them only eat once a day and, living in an orphanage,
              these kids belong to that majority. Being the age of mandatory
              school 11 years old, most of them will drop school before that.
              Only 1 out of 5 will finish the secondary education. Will they? Or
              will they end up living and begging on the streets? It is really
              hard for me to write a sentence like this but everyone who has
              ever been in Kathmandu is aware or the tremendous amount of
              underage toxic dependents living in the streets.
            </p>
            <p>
              The Child Welfare Society organization estimates that 11.000
              infants live in these streets and, in a country where marijuana
              and glue are sometimes cheaper than food you end up with a tough
              reality. They organize themselves into groups with very specific
              tasks. Begging, stealing, trying to live in front of the passivity
              of tourists and all the adults passing by.
            </p>
            <p>
              Will these kids end up that way? If they don't, Will they drop
              school to work? In spite of child labor being illegal in this
              country, according to the Child Labour Report of 2008, they are
              1,6 millions of infants forced to work instead of going to school.
              Nepal is no stranger to this concern: electrician, mechanics,
              agricultures… The majority of them are younger than 14 years old
              and the majority are girls. Why girls? The answer is as logic as
              terrifying: because they don't need to learn. 7 out of 10 Nepali
              women have never been schooled. These girls most certainly will
              have to get used to a life where they are not listened to.
            </p>
            <p>
              They will be slaves to their husbands, to their family, to their
              traditions. If they work they will earn less than the man beside
              them and if they marry, their husband will be able to injure them
              with all impunity, and all the weight of the household will go on
              to them. The gender distinction is so harsh that even their life
              expectancy is extremely lower.
            </p>
            <p>
              So here I am, doing silly faces while they laugh. Besides the
              differences and beside having just met them they don't treat me
              like a stranger. They are used to it, they are used to see
              westerners come and go all the time in short “volunteering”
              programs sold like holiday packages. Do they have a real effect in
              their lives? Do they change the uncertainty of this child's life?
              Do I?
            </p>
            <p>
              They are all laughing, playing, helping each other with their
              homework, fighting for the best pencil...meanwhile I, as an adult,
              can only see their uncertainty. That uncertainty that it is
              invisible to a child because for them everything is a game and the
              world is a playground. Or at least that is how it should be
              because, among all the questions I have, there is only one thing
              that I am truly certain of right now, that some kids stop being
              kids before than others.
            </p>
          </div>
          <div class="grid-container">
            <div class="column">
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

export default Gallery3;
