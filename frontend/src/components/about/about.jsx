import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>

        <h3>Trip Mates Mission</h3>

        <p>Some words about our project, it's purpose and design goals</p>

        <h3>The Team</h3>

        <section className="teammate-1">
          <h4>Jeffrey Dam</h4>
          <h5>Front-End Developer</h5>
          <p>short description about jeff dam</p>
          <div class="section-inner">
            <a href="#">LinkedIn <i class="fab fa-linkedin-in"></i></a>
            <a href="#">GitHub <i class="fab fa-github"></i></a>
            <a href="#">Personal Site<i class="fa fa-soundcloud"></i></a>
          </div>
        </section>

        <section className="teammate-2">
          <h4>Evangaline Pan</h4>
          <h5>Full-Stack Developer</h5>
          <p>short description about eva pan</p>
          <div class="section-inner">
            <a href="#">LinkedIn <i class="fa fa-facebook"></i></a>
            <a href="#">GitHub <i class="fa fa-twitter"></i></a>
            <a href="#">Personal Site<i class="fa fa-soundcloud"></i></a>
          </div>
        </section>

        <section className="teammate-3">
          <h4>Andrew Mac</h4>
          <h5>Back-End Develpoer</h5>
          <p>short description about andrew mac</p>
          <div class="section-inner">
            <a href="#">LinkedIn <i class="fa fa-facebook"></i></a>
            <a href="#">GitHub <i class="fa fa-twitter"></i></a>
            <a href="#">Personal Site<i class="fa fa-soundcloud"></i></a>
          </div>
        </section>
      </div>
    )
  }
}

export default About;
