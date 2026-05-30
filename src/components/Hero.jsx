import "../styles/hero.css";
import heroImage from "../assets/hero_image.png";


function Hero () {

    return(
        <section className="hero">
            <div className="hero-image">
                <img src={heroImage} alt="Cyberpunk"/>
            </div>

            <div className="hero-content">
                <h1>Your <span>Portal to a Gritty,</span>Tech-Driven Future</h1>
                <p>
                    A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights,gritty streets, and cybernetic enhancements.
                </p>
                 <div className="hero-buttons">
                <button className="btn hvr-sweep-to-right btn1">Read More</button>
                <button className="btn btn2">Learn More</button>
            </div>
            </div>

        </section>
    );
}

export default Hero;

