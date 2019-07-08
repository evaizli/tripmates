import React from 'react'
import Header from '../splash/header/header'
import JeffPicture from '../../assets/images/profile_jeff_dam.jpg';
import EvaPicture from '../../assets/images/profile_eva_pan.jpg';
import AndrewPicture from '../../assets/images/profile_andrew_mac.jpg';


class About extends React.Component {
  render() {
    // const showSocial = 

    return (
      <div>
        <Header />
        <div className="about-container">
          <div className="about">
            <br/>
            <h2>About</h2>
            <br/>
            <div className="about-content">
              <h3>TripMates Mission</h3>
              <p>
                  TripMates was a callaborative project made by three skilled 
                developers with a shared love for traveling and seeing the world 
                with friends and family. It was built with a React/Redux frontend 
                and a Node.js, Express and MongoDB backend for speed to market 
                deployment. 
              </p>
              <p>
                  This web app that allows users to easily collaborate
                on planning trips with a group of people. Users can go to one
                place for all of their trip logistics, write notes and reviews
                while on a trip, and share their travel recommendations and
                moments afterwards.
              </p>
            </div>
          </div>
          <div className="team">
            <h2>The Team</h2>

            <section className="teammate">
              <div className="teammate-content">
                <h3>Jeff Dam</h3>
                <h4>Front-End Developer</h4>
                <h6>Former instructional designer, assistant manager of youth engagement and technology, digital learning specialist at the California Academy of Sciences. Jeff is a highly skilled informal science educator turned software developer, experienced in building dynamic single page web applications in JavaScript, Ruby on Rails, Node.js, React, and HTML/CSS.</h6>
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
                <img className="profile-pic" src={JeffPicture} alt=""/>
              </div>
            </section>

            <section id="eva" className="teammate">
              <div className="teammate-content">
                <h3>Eva Pan</h3>
                <h4>Full-Stack Developer</h4>
                <h6>Former supply chain manager who led her firm's expansion initiatives in Asia and certified manager who was in charge of identifying data relations and developed MySQL database that increased supply chain traceability and integrity by 60%. She has a strong desire to leverage her professional experience and technical skills to develop high quality software that drive sustainability and make a difference in people’s lives</h6>
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
                <img className="profile-pic" src={EvaPicture} alt=""/>
              </div>
            </section>

            <section id="andrew" className="teammate">
              <div className="teammate-content">
                <h3>Andrew Mac</h3>
                <h4>Back-End Develpoer</h4>
                <h6>Former construction project manager turned software developer seeking to employ his skills in JavaScript, React.js, Redux, jQuery, SQL, Mongo, HTML, CSS/SASS, Ruby, Rails to integrate and hit-the-ground-running to code in the exciting field of web development</h6>
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
                <img className="profile-pic" src={AndrewPicture} alt=""/>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
