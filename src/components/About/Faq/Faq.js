import React from "react";
import "./Faq.css";
const Faq = () => {
  /* Faq Section */
  return (
    <section className="faq section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title">
              <h2>Frequently asked queries</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div id="accordion">
              <div className="accordion-item">
                <div
                  className="accordion-header"
                  data-toggle="collapse"
                  data-target="#collapse-01"
                >
                  <h3>
                    How long does it usually take for me to build something and
                    get hired?
                  </h3>
                </div>
                <div
                  className="collapse show"
                  id="collapse-01"
                  data-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      Ultimately you’re the only one that can control that. Ok
                      fine... everyone learns at a different pace but students
                      who put in a couple hours each day to apply what they’ve
                      learned should be able to confidently build their own
                      projects, start interviewing and get hired in 3-6 months
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div
                  className="accordion-header collapsed"
                  data-toggle="collapse"
                  data-target="#collapse-02"
                >
                  <h3>Can I cancel my subscription?</h3>
                </div>
                <div
                  className="collapse"
                  id="collapse-02"
                  data-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      While we’d be sad to see you go, you can definitely, from
                      within your own account. If you cancel, your plan will
                      simply expire at the end of your current billing period
                      and you won't be charged again. No questions asked.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div
                  className="accordion-header collapsed"
                  data-toggle="collapse"
                  data-target="#collapse-03"
                >
                  <h3>Do you offer refunds?</h3>
                </div>
                <div
                  className="collapse"
                  id="collapse-03"
                  data-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      We have no doubt that you're going to love being part of
                      the Code Academy. However, if for some reason you're not
                      happy with your membership, please send an email to
                      support@codeacademy.io and let us know why within 30 days
                      of purchasing and we'll gladly provide you with a 100%
                      refund.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div
                  className="accordion-header collapsed"
                  data-toggle="collapse"
                  data-target="#collapse-04"
                >
                  <h3>Are the videos high quality?</h3>
                </div>
                <div
                  className="collapse"
                  id="collapse-04"
                  data-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      Yes! They are actually recorded in super mega definition…
                      ok we lied and made that up but they are in fact 1080p..
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div
                  className="accordion-header collapsed"
                  data-toggle="collapse"
                  data-target="#collapse-05"
                >
                  <h3>
                    What kind of skills or special equipment do I need to join?
                  </h3>
                </div>
                <div
                  className="collapse"
                  id="collapse-05"
                  data-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      If you have a computer, access to the internet and the
                      self motivation to learn, you’re all set. Code Academy
                      students come from every background, age, ethnicity and
                      experience you could imagine; everyone is welcome here. We
                      teach you everything from the absolute basics to advanced
                      technical topics as well as important non-technical skills
                      not taught in other coding bootcamps (communication, meta
                      learning, job prep, and more).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
