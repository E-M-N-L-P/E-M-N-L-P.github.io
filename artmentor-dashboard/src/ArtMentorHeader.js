import React from 'react';
import './styles.css';

const ArtMentorHeader = () => {
  return (
      <>
          <section className="hero">
              <div className="hero-body">
                  <div className="container is-max-desktop">
                      <div className="columns is-centered">
                          <div className="column has-text-centered">
                              <h1 className="title is-1 publication-title">ArtMentor: AI-Assisted Evaluation of Artworks
                                  to Explore Multimodal Large Language Models Capabilities</h1>
                              <div className="is-size-5 publication-authors">
                  <span className="author-block">
                    <a href="FIRST AUTHOR PERSONAL LINK" target="_blank"
                       rel="noopener noreferrer">ANONYMOUS AUTHOR(S)</a><sup>*</sup>
                  </span>
                              </div>
                              <div className="is-size-5 publication-authors">
                                  <span className="author-block">Institution Name<br/>Conference name and year</span>
                                  <span
                                      className="eql-cntrb"><small><br/><sup>*</sup>Indicates Equal Contribution</small></span>
                              </div>
                              <div className="column has-text-centered">


                                  <div className="publication-links">

<span class="link-block">
  <a href="https://github.com/ArtMentor/ArtMentorApp" target="_blank"
     class="external-link button is-normal is-rounded is-dark">
    <span class="icon">
      <i class="fas fa-globe"></i>
    </span>
    <span>App Code</span>
  </a>
</span>
                                      &nbsp;&nbsp;&nbsp;&nbsp;
                                      <span class="link-block">
  <a href="https://github.com/ArtMentor/ArtMentorAnalysis" target="_blank"
     class="external-link button is-normal is-rounded is-dark">
    <span class="icon">
      <i class="fas fa-code"></i>
    </span>
    <span>Analysis Code</span>
  </a>
</span>
                                      &nbsp;&nbsp;&nbsp;&nbsp;
                                      <span class="link-block">
  <a href="https://github.com/ArtMentor/ArtMentorAnalysis/tree/main/Dataset" target="_blank"
     class="external-link button is-normal is-rounded is-dark">
    <span class="icon">
      <i class="fas fa-database"></i>
    </span>
    <span>Dataset</span>
  </a>
</span>
                                      &nbsp;&nbsp;&nbsp;&nbsp;
                                      <span class="link-block">
  <a href="https://artmentor.github.io/artmentor-dashboard/" target="_blank"
     class="external-link button is-normal is-rounded is-dark">
    <span class="icon">
      <i class="fas fa-chart-bar"></i>
    </span>
    <span>Data Analysis</span>
  </a>
</span>

                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="implications-box">
              <strong>Notice:</strong> This document and its contents are prepared for blind peer review for submission
              to CHI 2025.
          </div>
&nbsp;&nbsp;&nbsp;&nbsp;
          {/*<section className="hero teaser fade-in-section">*/}
          {/*    <div className="container is-max-desktop">*/}
          {/*        <div className="hero-body">*/}
          {/*            <video poster="" id="tree" autoPlay controls muted loop height="100%">*/}
          {/*                <source src="/videos/banner_video.mp4" type="video/mp4"/>*/}
          {/*            </video>*/}
          {/*            <h2 className="subtitle has-text-centered">*/}
          {/*                ArtMentor System Interface and Operation Process.*/}
          {/*            </h2>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</section>*/}
          &nbsp;&nbsp;&nbsp;&nbsp;
      </>
  );
};

export default ArtMentorHeader;