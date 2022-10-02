import '../styles/components/Gallery.scss';
import Header from './Header';
import Footer from './Footer';
import img1 from '../images/saving_giants/saving_1.jpg';
import img2 from '../images/saving_giants/saving_2.jpg';
import img3 from '../images/saving_giants/saving_3.jpg';
import img4 from '../images/saving_giants/saving_4.jpg';
import img5 from '../images/saving_giants/saving_5.jpg';
import img6 from '../images/saving_giants/saving_6.jpg';
import img7 from '../images/saving_giants/saving_7.jpg';
import img8 from '../images/saving_giants/saving_8.jpg';
import img9 from '../images/saving_giants/saving_9.jpg';
import img10 from '../images/saving_giants/saving_10.jpg';
import img11 from '../images/saving_giants/saving_11.jpg';
import img12 from '../images/saving_giants/saving_12.jpg';
import img13 from '../images/saving_giants/saving_13.jpg';
import img14 from '../images/saving_giants/saving_14.jpg';
import img15 from '../images/saving_giants/saving_15.jpg';

const Gallery1 = (props) => {
  return (
    <>
      <Header />
      <section className="gallery">
        <h2 className="gallery__title">Saving giants</h2>
        <div className="gallery__project">
          <div className="gallery__text">
            <p>
              "It seems that the largest mammal on earth is invisible to men"
              Richard Lair
            </p>
            <p>
              Thailand and elephants are two words that usually go together.
              Perhaps it is because they are the national symbol of the country,
              or perhaps because they are the main attraction for tourism.
              However, these wonderful creatures seem to be invisible to us.
              They are a variable in a network of money, tourism, industry ... A
              variable whose well-being we have always been ignored. Used for
              centuries as a tool for work, in recent years they have suffered
              the effects of technological advances and the growth of tourism in
              the country.
            </p>
            <p>
              What could be seen as an opportunity for rest and well-being has
              meant a tremendous decrease in number getting them closer to the
              risk of extinction. Diseases, accidents and in general a lifestyle
              that not only has physical but also psychological consequences on
              these animals.
            </p>
            <p>
              However, in such a worrying situation there are places where they
              are not invisible. There are places where they can have peace,
              dignity and where they can live together as equals with the humans
              who have done them so much damage for centuries. One of those few
              places is the Elephant Hospital in the province of Chiang Mai,
              Thailand. Around 20 elephants reside here permanently. All with
              different backgrounds but with something in common: The effects of
              human practices on their bodies.
            </p>
            <p>
              It's 6 am and Palahdee is already awake. He eats something fast
              and walks the two meters that separate his house from Mosha's
              premises. Mosha is calling him, as she always does when Palahdee
              moves away from her sight. Palahdee approaches her, she calms
              down. He has been carer since she came to the hospital after
              losing a leg in a mine near the Burmese border. Cutting grass,
              cleaning the area, putting on her prosthesis ... Palahdee takes
              care of her, lives with her. Beside him, Mosha is no longer
              invisible. You could understand that it is his job, but their
              relationship goes far beyond that.
            </p>
            <p>
              Many things are said about elephants. They have been called
              murderers, they have been called resentful, unpredictable. They
              have been feared and domesticated for many centuries. However, you
              just need ten minutes with them to understand the relationship of
              symbiosis, respect, and affection they have created during all
              these years. It just takes opening your eyes to make them visible,
              to realize the great capacity of love and respect they can
              generate. Because everything that is "said" about elephants is no
              more than a reflection of us as a species. It is nothing more than
              the consequence of our acts based on our strength, in our attempts
              to control them, in our attempts to use them.
            </p>
            <p>
              It's lunchtime and Palahdee meets with the rest of the carers.
              Each of them cares for an elephant, always the same one. The bonds
              that are created between them and the risk of an elephants not
              trusting and respecting their carer are very important to break
              them. Everyone laughs, jokes, and eat as if they were a family.
              Because they really are one. All of them are the true heart of
              this place. It is thanks to their strength and their constant
              dedication that a place like this can exist. After lunch
              everything is calm. The elephants are silent. Paladhee is
              exhausted and smoking a cigarette waiting for Dr. Kayan to do the
              daily check on Mosha.
            </p>
            <p>
              And so the days pass. Each day is practically the same as the
              previous one. There are moments of stress, moments of calm,
              moments of laughter. But above all there is security. Here these
              elephants can finally feel safe. Here these elephants can finally
              be as they are, not something that we use to our benefit. A place
              where our control disappears and where we are the ones learning
              from them, the ones learning to be as good as we can be. And more
              important, where there is no more pain.
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
