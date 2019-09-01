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
            <div className="about-content">
              <h2>TripMates Mission</h2>
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
                <h6>
                  Jeff is a software developer with seven years of experience in the education field as a science and technology educator. 
                  He's always had a passion for teaching and helping others but wanted to move beyond the whiteboard and apply his science 
                  knowledge and problem-solving skills to create tangible products used by millions. 
                  <br/><br/>
                  He's dedicated over 1000+ hours to learning CS fundamentals, implementing best-practices, and sharpening his skills in 
                  JavaScript, React, Ruby on Rails, Express, Node.js, SQL, and HTML/CSS. Jeff is experienced in building dynamic single-page 
                  applications, working on collaborative teams, and adapting to new roles and shifting priorities.
                </h6>
              </div>
              <div id="jeff" className="social">
                <img className="profile-pic" src={JeffPicture} alt=""/>
                <div className="social-links">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jeffdam/" title="Jeff's LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/jeffdam" title="Jeff's Github">
                    <i className="fab fa-github" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.jeffdam.com/" title="Jeff's Personal Site">
                    <i className="fas fa-user-circle" />
                  </a>
                </div>
              </div>
            </section>

            <section className="teammate">
              <div className="teammate-content">
                <h3>Eva Pan</h3>
                <h6>Former supply chain manager who led her firm's expansion initiatives in Asia and certified manager who was in charge of identifying data relations and developed MySQL database that increased supply chain traceability and integrity by 60%. She has a strong desire to leverage her professional experience and technical skills to develop high quality software that drive sustainability and make a difference in people’s lives</h6>
              </div>
              <div className="social">
                <img className="profile-pic" src={EvaPicture} alt=""/>
                <div className="social-links">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/evapan2000/" title="Eva's LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/evaizli" title="Eva's Github">
                    <i className="fab fa-github" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="http://evapan.com/" title="Eva's Personal Site">
                    <i className="fas fa-user-circle" />
                  </a>
                </div>
              </div>
            </section>

            <section className="teammate">
              <div className="teammate-content">
                <h3>Andrew Mac</h3>
                <h6>Former construction project manager turned software developer seeking to employ his skills in JavaScript, React.js, Redux, jQuery, SQL, Mongo, HTML, CSS/SASS, Ruby, Rails to integrate and hit-the-ground-running to code in the exciting field of web development</h6>
              </div>
              <div className="social">
                <img className="profile-pic" src={AndrewPicture} alt=""/>
                <div className="social-links">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/macandrew6/" title="Andrew's LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/macandrew6" title="Andrew's Github">
                    <i className="fab fa-github" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://andrew-mac.netlify.com/" title="Andrew's Personal Site">
                    <i className="fas fa-user-circle" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
