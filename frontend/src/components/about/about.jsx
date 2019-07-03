import React from 'react'
import Header from '../splash/header/header'
import JeffPicture from '../../assets/images/profile_jeff_dam.jpg';


class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="about-container">
          <div className="about">
          <h2>About</h2>
            <div className="about-content">

              <h3>TripMates Mission</h3>

              <p>
                TripMates is a web app that allows users to easily collaborate
                on planning trips with a group of people. Users can go to one
                place for all of their trip logistics, write notes and reviews
                while on a trip, and share their travel recommendations and
                moments afterwards.
              </p>

            </div>
          </div>
          <br/>
          <div className="team">
            <h2>The Team</h2>

            <section className="teammate">
              <div className="teammate-content">
                <h3>Jeffrey Dam</h3>
                <h5>Front-End Developer</h5>
                <h6>short description about jeff dam</h6>
              </div>
              <div id="jeff" className="social">
                <a href="https://www.linkedin.com/in/jeffdam/" title="Jeff's LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://github.com/jeffdam" title="Jeff's Github">
                  <i className="fab fa-github" />
                </a>
                <a href="https://www.jeffdam.com/" title="Jeff's Personal Site">
                  <i className="fas fa-user-circle" />
                </a>
                <img src={JeffPicture} alt=""/>
              </div>
            </section>

            <section id="eva" className="teammate">
              <div className="teammate-content">
                <h3>Eva Pan</h3>
                <h5>Full-Stack Developer</h5>
                <h6>short description about eva pan</h6>
              </div>
              <div className="social">
                <a href="https://www.linkedin.com/in/evapan2000/" title="Eva's LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://github.com/evaizli" title="Eva's Github">
                  <i className="fab fa-github" />
                </a>
                <a href="http://evapan.com/" title="Eva's Personal Site">
                  <i className="fas fa-user-circle" />
                </a>
              </div>
            </section>

            <section id="andrew" className="teammate">
              <div className="teammate-content">
                <h3>Andrew Mac</h3>
                <h5>Back-End Develpoer</h5>
                <h6>short description about andrew mac</h6>
              </div>
              <div className="social">
                <a href="https://www.linkedin.com/in/macandrew6/" title="Andrew's LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://github.com/macandrew6" title="Andrew's Github">
                  <i className="fab fa-github" />
                </a>
                <a href="https://github.com/macandrew6" title="Andrew's Personal Site">
                  <i className="fas fa-user-circle" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
