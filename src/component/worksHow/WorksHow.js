import React from "react";

const WorksHow = () => {
  return (
    <>
      <section className="section section_worksHow container">
        <h2 className="center heading_text">
          How it <span className="orange_site-text">Works</span>
        </h2>
        <div className="works_how-box">
          <div className="works_how-box-img">
            <img
              src="/imgs/referral-step-02-45a75b91858a8c0d6c9f21c491ed6537153fab99bb8764e428486b38745eda7c.png"
              alt=""
            />
          </div>
          <div className="works_how-box-content">
            <p className="flow-text">
              First <span className="orange_site-text">Contact us</span>
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              aut nemo sequi sapiente, vitae facere, unde provident quae natus
              modi ipsam ipsa optio tempora quis iure dolorem est maiores
              reprehenderit?
            </p>
          </div>
        </div>
        <div className="works_how-box">
          <div className="works_how-box-content">
            <p className="flow-text">
              Second <span className="orange_site-text">Book Coach</span>
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              aut nemo sequi sapiente, vitae facere, unde provident quae natus
              modi ipsam ipsa optio tempora quis iure dolorem est maiores
              reprehenderit?
            </p>
          </div>
          <div className="works_how-box-img">
            <img src="/imgs/OBJECTS.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksHow;
