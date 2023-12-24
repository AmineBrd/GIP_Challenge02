import React from "react";
import './FooterStyles.css';
import fb from '../assets/facebook.svg';
import insta from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';

function Footer () {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">

                    <div className="sb_footer-links-div">
                        <a href="/">
                            <h3 id="logo-name">Swag Shop</h3>
                        </a>
                    </div>
                
                    <div className="sb_footer-links-div">
                        <h3>BRAINY</h3>
                        <a href="/">
                            <p>Home</p>
                        </a>
                        <a href="/Products">
                            <p>Products</p>
                        </a>
                        <a href="/Cart">
                            <p>Cart</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h3>Socials</h3>
                        <div className="socialmedia">
                            <p><img src={fb} alt="" /></p>
                            <p><img src={insta} alt="" /></p>
                            <p><img src={twitter} alt="" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;