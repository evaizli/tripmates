import React from 'react'
import Header from '../splash/header/header'

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="about-container">
          <h2>About</h2>

          <h3>TripMates Mission</h3>

          <p>
            TripMates is a web app that allows users to easily collaborate
            on planning trips with a group of people. Users can go to one
            place for all of their trip logistics, write notes and reviews
            while on a trip, and share their travel recommendations and
            moments afterwards.
          </p>

          <h3>The Team</h3>

          <section className="teammate">
            <div className="content">
              <h4>Jeffrey Dam</h4>
              <h5>Front-End Developer</h5>
              <p>short description about jeff dam</p>
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/in/jeffdam/">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/jeffdam">
                <i className="fab fa-github" />
              </a>
              <a href="https://www.jeffdam.com/">
                <i className="fas fa-user-circle" /> - Personal Site
              </a>
            </div>
          </section>

          <section className="teammate">
            <div className="content">
              <h4>Eva Pan</h4>
              <h5>Full-Stack Developer</h5>
              <p>short description about eva pan</p>
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/in/evapan2000/">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/evaizli">
                <i className="fab fa-github" />
              </a>
              <a href="http://evapan.com/">
                <i className="fas fa-user-circle" /> - Personal Site
              </a>
            </div>
          </section>

          <section className="teammate">
            <div className="content">
              <h4>Andrew Mac</h4>
              <h5>Back-End Develpoer</h5>
              <p>short description about andrew mac</p>
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/in/macandrew6/">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/macandrew6">
                <i className="fab fa-github" />
              </a>
              <a href="https://github.com/macandrew6">
                <i className="fas fa-user-circle" /> - Personal Site
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
