import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
const AboutHeader = () => {
  useEffect(() => {
    var parallax = document.querySelectorAll(".parallax");
    var instances = M.Parallax.init(parallax, {});
  }, []);
  return (
    <>
      <div class="parallax-container">
        <div class="parallax">
          <img src="/imgs/Group 1.jpg" />
          <div className="parallax-text center">
            <h3 className="orange_site-text ">About Us</h3>
            <h5 className="grey-text ">Feeling lost, helpless or disturbed?</h5>
            <p className="grey-text text-lighten-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              officiis iusto, corrupti quod numquam enim exercitationem ea magni
              dolorem nam error, <br /> vero expedita nemo, mollitia ducimus
              minima porro voluptates. Voluptate. <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              asperiores amet, dicta vel beatae aut!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
