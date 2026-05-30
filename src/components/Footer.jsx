import "../styles/footer.css";

function Footer() {

    return(
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <h2>Cyber.AI - Cyber Punk Website</h2>
                    <p>
                        Explore the high-tech,low life world where the lines between humanity
                    </p>
                </div>



                <div class="footer-links">
                    <h3>Information</h3>
                    <a href="#">Press center</a>
                    <a href="#">Our Blog</a>
                    <a href="#">Terms and Condition</a>
                </div>



                <div class="footer-links">
                    <h3>Menu</h3>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Blog</a>
                </div>


                <div class="footer-links">
                    <h3>Contact</h3>
                    <a href="#">Phone : +123 456 789</a>
                    <a href="#">Email: @example.com</a>
                    <a href="#">Address Line 01</a>
                </div>
            </div>


            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>&#169; Cyber.Game-Ketan Mulani 2026.All rights reserved</p>
                </div>
                <div className="footer-policy">
                    <a href="#" className="policy-1">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Cookies</a>
                </div>
                
                
                <div className="footer-social">
                    <div className="social-circle1">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className="social-circle2">
                        <i class="fa-brands fa-instagram"></i>
                    </div>

                    <div className="social-circle3">
                        <i class="fa-brands fa-x-twitter"></i>
                    </div>
                </div>

            </div>

        </footer>
    );
}

export default Footer;