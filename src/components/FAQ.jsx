import "../styles/faq.css";

function FAQ() {
  return(
    <section className="faq">
      <h2>Frequently Asked <br/><span>Questions</span></h2>

      <p className="faq-text">
        A realm where advanced technology meets dystopian reality.
        Our website is your gateway to a universe of neon lights,
        gritty streets, and cybernetic enhancements.
      </p>

      <div className="faq-container">
        <div className="faq-card faq-card-left">

          <div className="faq-heading">
            <span>01.</span>
            <h3>
              How do i stay updated on new content and events?
            </h3>
          </div>

          <p>
            A realm where advanced technology meets dystopian reality.
            Our website is your gateway.....
          </p>
        </div>


        <div className="faq-card">

          <div className="faq-heading">
          <span>02.</span>
          <h3>
            How can i contact customer cyberpunk support?
          </h3>
          </div>

          <p>
            A realm where advanced technology meets dystopian reality.
            Our website is your gateway.....
          </p>
        </div>


        <div className="faq-card faq-card-left">

          <div className="faq-heading">
            <span>03.</span>
            <h3>
              Can i purchase cyberpunk-themed merchandise?
            </h3>
          </div>

          <p>
            A realm where advanced technology meets dystopian reality.
            Our website is your gateway.....
          </p>
        </div>


        <div className="faq-card">
          
          <div className="faq-heading">
            <span>04.</span>
            <h3>
              Are there any rules or guidelines for participating in the community?
            </h3>
          </div>

          <p>
            A realm where advanced technology meets dystopian reality.
            Our website is your gateway.....
          </p>
        </div>

      </div>

    </section>

  );
}
export default FAQ;