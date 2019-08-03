import React from "react";

const AboutTeam = () => {
  return (
    <section className="section section-aboutTeam grey lighten-3">
      <h2 className="center  heading_text">
        Our <span className="orange_site-text">Team</span>
      </h2>
      <div className="container team_member-container">
        <div className="team_member white z-depth-1">
          <div className="team_member-img">
            <img src="/imgs/black-and-white-face-fashion-2530337.jpg" alt="" />
          </div>
          <div className="team_member-about">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, tempora.
            </p>
            <div className="orange_site-text">
              <p className="flow-text">John Doe</p>
              <p>C.E.O</p>
            </div>
          </div>
        </div>
        <div className="team_member white z-depth-1">
          <div className="team_member-img">
            <img src="/imgs/black-and-white-face-fashion-2530337.jpg" alt="" />
          </div>
          <div className="team_member-about">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, tempora.
            </p>
            <div className="orange_site-text">
              <p className="flow-text">John Doe</p>
              <p>C.E.O</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
