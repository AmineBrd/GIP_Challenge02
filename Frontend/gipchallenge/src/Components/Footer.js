import { Link } from 'react-router-dom';
import './FooterStyles.css';
import fb from '../assets/facebook.svg';
import insta from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';

const Footer = () => {
    return (
      <div className="footer">
        <div className="sb_footer section_padding">
          <div className="sb_footer-links">
            <div className="sb_footer-links-div">
              <Link to="/">
                <h3 id="logo-name">Swag Shop</h3>
              </Link>
            </div>
  
            <div className="sb_footer-links-div">
              <h3>BRAINY</h3>
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/Products">
                <p>Products</p>
              </Link>
              <Link to="/Cart">
                <p>Cart</p>
              </Link>
            </div>
            <div className="sb_footer-links-div">
              <h3>Socials</h3>
              <div className="socialmedia">
                <p>
                  <img src={fb} alt="" />
                </p>
                <p>
                  <img src={insta} alt="" />
                </p>
                <p>
                  <img src={twitter} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  export default Footer;