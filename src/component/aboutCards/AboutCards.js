import React from "react";

const AboutCards = () => {
  return (
    <>
      <section className="container section">
        <div class="row">
          <div class="col s12 m5">
            <div class="card-panel ">
              <h2 className="orange_site-text about_card_content-head">
                <img src="/imgs/New Hire.png" alt="" /> <span>Mission</span>
              </h2>

              <span class="">
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively. I am similar to what is called a panel in other
                frameworks.
              </span>
            </div>
          </div>
          <div class="col s12 m5 offset-m2">
            <div class="card-panel">
              <h3 className="orange_site-text about_card_content-head">
                <img src="/imgs/New Hire.png" alt="" /> <span>Vision</span>
              </h3>
              <span class="">
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively. I am similar to what is called a panel in other
                frameworks.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCards;
