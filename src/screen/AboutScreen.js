import React from "react";

export const AboutScreen = () => {
  return (
    <>
      <div className="mid-banner login login-banner max-width">
        <h1 className="text-light banner-h1 text-center">
          This is our <br /> Story
        </h1>
      </div>
      <div className="row container max-width mt-5 mb-5">
        <div className="row mt-5">
          <div className="about-text col-12 col-md-7 col-lg-7">
            <h3>About us</h3>
            <hr />
            <p>
              Sushi bar fuses traditional Japanese food with inventive French
              inspired nouvelle cuisines topped with talented chefs with years
              of industry experience; making Sushi bar's dishes extremely
              exquisite to the taste buds; the cream of the crop.
            </p>
          </div>
          <div className="about-image col-12 col-md-5 col-lg-5 about-1"></div>
        </div>

        <div className="row mt-5">
          <div className="about-image  col-12 col-md-5 col-lg-5 about-2"></div>
          <div className="about-text col-12 col-md-7 col-lg-7">
            <h3>Cancellation policy </h3>
            <hr />
            <p>
              Cancellations and changes will only be accepted if requested up to
              48 hours prior to your reservation. After this period all sales
              are considered final and non refundable. • Please note that any
              special menu request and private dining will follow different
              cancellation policies.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="about-text col-12 col-md-7 col-lg-7">
            <h3>Allergies & dietary restrictions</h3>
            <hr />
            <p>
              Our menu is focused on serving raw fish and shellfish. <br /> Due
              to certain limitations we cannot accommodate certain requests.{" "}
              <br /> We reserve the right to decline any requests that will
              imply on a drastic change on the way we prepare our food. <br />{" "}
              Private dining (up to eight guests) is also available upon request
              and follow different booking procedures.
            </p>
          </div>
          <div className="about-image col-12 col-md-5 col-lg-5 about-3"></div>
        </div>
      </div>
    </>
  );
};
