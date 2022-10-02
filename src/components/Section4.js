import '../styles/components/Section4.scss';
import { Link } from 'react-router-dom';
import savings from '../images/saving_portada.jpg';
import harvest from '../images/harversters_portada.jpg';
import uncertainty from '../images/uncertainty_portada.jpg';
import outcasts from '../images/outcasts_portada.jpg';

const Section4 = (props) => {
  return (
    <section className="section4">
      <div>
        <h2 className="section4__title">My Projects</h2>
      </div>
      <div className="section4__galleries">
        <div className="section4__galleryBox">
          <Link to={`/gallery1/`}>
            <div>
              <h2 className="section3__galleries--title">Saving giants</h2>
              <img alt="m" src={savings} className="section3__galleries--img" />
            </div>
          </Link>
        </div>

        <Link to={`/gallery2/`}>
          <div>
            <h2 className="section3__galleries--title">The new harversters</h2>
            <img src={harvest} className="section3__galleries--img" />
          </div>
        </Link>

        <Link to={`/gallery3/`}>
          <div>
            <h2 className="section3__galleries--title">Uncertainty</h2>
            <img src={uncertainty} className="section3__galleries--img" />
          </div>
        </Link>

        <Link to={`/gallery4/`}>
          <div>
            <h2 className="section3__galleries--title">Outcast by choice</h2>
            <img src={outcasts} className="section3__galleries--img" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Section4;
