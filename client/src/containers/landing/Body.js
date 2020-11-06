import React, { Component } from "react";
import { Link } from "react-router-dom";

class Body extends Component {
  render() {
    return (
      <div>
        <section id="intro" className="clearfix">
          {/*<h1 className="text-center text-white font-weight-bold p-2">
            Department Of Computer Science & Engineering
          </h1>*/}
          <div className="container">
            <div className="intro-img">
              <img
                src={
                  "https://sjce.ac.in/wp-content/uploads/2015/08/IMG_5045-900x600.jpg"
                }
                alt=""
                className="img-fluid front-image"
              />
            </div>

            <div className="intro-info pr-3">
              <h1 className="text-capitalize">
                Department Of Computer Science & Engineering
              </h1>
              <h4>JSSSTU (Formerly known as SJCE)</h4>
            </div>
          </div>
        </section>
        {/* <!-- #intro --> */}

        <main id="main">
          {/* <!--==========================
      About Us Section
    ============================--> */}
          <section id="about">
            <div className="container">
              <header className="section-header py-5">
                <h3>ABOUT US</h3>
                <p>
                  The inception of Department of Computer Science and
                  Engineering (CS&E) was one among the first to be established
                  in the State of Karnataka in the year 1982.
                  <br />
                  Our mission is to create ideas that deepen and advance our
                  understanding of the realm of Computer Science and Engineering
                  and with those ideas to develop innovative, principled, and
                  insightful leaders who change the world.
                  <br />
                  Classes are conducted on a full-time and on part time basis in
                  an intimate-scale environment, and take full advantage of the
                  assets provided by JSS Science and Technology and its
                  surrounding communities.
                  <br />
                  <br />
                  The department is actively involved in International
                  collaborative research and also in sponsored research projects
                  through various funding agencies:
                  <br />
                </p>
                <ol typeof="I" className="mb-4">
                  <li>Science and Engineering Research Board (SERB)</li>
                  <li>Ministry of Human Resource Development (MHRD)</li>
                  <li>University Grant Commission (UGC)</li>
                  <li>Department of Science and Technology (DST)</li>
                </ol>
              </header>

              <div className="row mt-2 p-2 about-container">
                <div className="col-md-6">
                  <div className="icon-box wow fadeInUp">
                    <div className="icon">
                      <i className="fa fa-shopping-bag"></i>
                    </div>
                    <h4 className="title">
                      <a href="#1">Vision</a>
                    </h4>
                    <p className="description">
                      Advancing JSS S&T University as a leader in education,
                      research and technology on the international arena. To
                      provide the students a universal platform to launch their
                      careers, vesting the industry and research community with
                      skilled and professional workforce. Accomplishing JSS S&T
                      University as an epicentre for innovation, centre of
                      excellence for research with state of the art lab
                      facilities. Fostering an erudite, professional forum for
                      researchers and industrialist to coexist and to work
                      cohesively for the growth and development of science and
                      technology for betterment of society
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon">
                      <i className="fa fa-photo"></i>
                    </div>
                    <h4 className="title">
                      <a href="#1">Mission </a>
                    </h4>

                    <p className="description">
                      Education, research and social outreach are the core
                      doctrines of JSS S&T University that are responsible for
                      accomplishment of in-depth knowledge base, professional
                      skill and innovative technologies required to improve the
                      socio economic conditions of the country. Our mission is
                      to develop JSS S&T University as a global destination for
                      cohesive learning of engineering, science and management
                      which are strongly supported with interdisciplinary
                      research and academia.
                    </p>
                  </div>
                </div>

                {/* <div
                      className="icon-box wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon">
                        <i className="fa fa-bar-chart"></i>
                      </div>
                      <h4 className="title">
                        <a href="#1">Motto</a>
                      </h4>
                      <p className="description">
                        True to JSS legacy and dedication to the service of
                        mankind the JSS Science & Technological University
                        adopted
                      </p>
                    </div> */}
              </div>

              <div className="row about-extra">
                <div className="col-md-4 wow fadeInUp">
                  <img
                    src={
                      "https://jssstuniv.in/wp-content/uploads/2018/11/MPP-Picture-500x500.jpg"
                    }
                    className="img-fluid w-80 img-hod"
                    alt=""
                  />
                </div>
                <div className="col-md-8 wow fadeInUp pt-5 pt-md-0">
                  <h4>Our Beloved HOD</h4>
                  <p>
                    Dr. M P Pushpalatha, HOD pf department of Computer Science
                    and Engineering, graduated from Visvesvaraya Technological University (VTU), Belagavi.
                  </p>
                  <p>
                    Professor in the department of Computer Science and
                    Engineering, with nearly three decades of teaching
                    experience. Passionate and committed to inspire students to
                    pursue academic and personal excellence. Driven by the
                    motto, “Anything worth doing is worth doing well,” to create
                    a challenging and engaging learning environment for students
                    and self. My research focuses mainly on Machine Learning and
                    Healthcare Informatics with a particular emphasis on the
                    applications of healthcare technology to socially relevant
                    issues. Currently guiding four (4) Ph.d Research scholars.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="p-md-4">
            <div className="background order-lg-2 order-1 wow fadeInUp">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2018/11/CSE-1800x870.jpg"
                className="img-fluid img-branch"
                alt=""
              />
            </div>
          </div>

          {/*FACULTY
          <section id="faculty" className="wow fadeIn">
            <div className="container">
              <header className="section-header">
                <h3>FACULTY</h3>
                <p>

                </p>
              </header>

              <div className="row">
              <div class="card mx-auto col-md-12 wow fadeInUp">
                <div class="card-body text-left">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Designation</th>
                      <th scope="col">Research Interests</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Dr. Vijayalakshmi H C</td>
                      <td>Head of Department</td>
                      <td>Image Processing, Machine Learning and Pattern Recognition</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Dr. M P Pushpalatha</td>
                      <td>Professor</td>
                      <td>Machine Learning, Health Information</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Dr. Srinath S</td>
                      <td>Associate Professor</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Dr. Anil Kumar K M</td>
                      <td>Associate Professor</td>
                      <td>Web Mining</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Dr Anusuya M A</td>
                      <td>Associate Professor</td>
                      <td>Speech Processing</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Dr Prasanna B T</td>
                      <td>Associate Professor</td>
                      <td>Computer Network and Security</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Chandrashekar A M</td>
                      <td>Assistant Professor</td>
                      <td>Data Mining, Network Security</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Dr. Manimala S</td>
                      <td>Assistant Professor</td>
                      <td>Image Processing, Machine Learning</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Shivamurthy P M</td>
                      <td>Assistant Professor</td>
                      <td>Medical Imaging, Machine Learning and Artificial Intelligence</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Dr Trisiladevi C. Nagavi</td>
                      <td>Assistant Professor</td>
                      <td>Machine Learning, Speech and Audio Processing</td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>Dr Mahesha P</td>
                      <td>Assistant Professor</td>
                      <td>Clinical Speech Processing, Machine Learning</td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td>Sheela N.</td>
                      <td>Assistant Professor</td>
                      <td>Image Processing, Machine Learning</td>
                    </tr>
                    <tr>
                      <th scope="row">13</th>
                      <td>Vani Ashok</td>
                      <td>Assistant Professor</td>
                      <td>Machine Learning</td>
                    </tr>
                    <tr>
                      <th scope="row">14</th>
                      <td>Madhusudan G</td>
                      <td>Assistant Professor</td>
                      <td>Wireless Networks</td>
                    </tr>
                    <tr>
                      <th scope="row">15</th>
                      <td>Brunda S</td>
                      <td>Assistant Professor</td>
                      <td>Image Processing</td>
                    </tr>
                    <tr>
                      <th scope="row">16</th>
                      <td>Manjula S</td>
                      <td>Assistant Professor</td>
                      <td>Computer Networks</td>
                    </tr>
                    <tr>
                      <th scope="row">17</th>
                      <td>Divakara N</td>
                      <td>Assistant Professor</td>
                      <td>Natural Language Processing</td>
                    </tr>
                    <tr>
                      <th scope="row">18</th>
                      <td>R Guru</td>
                      <td>Assistant Professor</td>
                      <td>Wireless Sensor Network</td>
                    </tr>
                    <tr>
                      <th scope="row">19</th>
                      <td>Vijay M B</td>
                      <td>Assistant Professor</td>
                      <td>Computer Network</td>
                    </tr>
                    <tr>
                      <th scope="row">20</th>
                      <td>Mahesh K S</td>
                      <td>Assistant Professor</td>
                      <td>Data Mining</td>
                    </tr>
                    <tr>
                      <th scope="row">21</th>
                      <td>Sreenivasa T</td>
                      <td>Assistant Professor</td>
                      <td>Cloud Computing, Image Processing</td>
                    </tr>
                    <tr>
                      <th scope="row">22</th>
                      <td>Bindiya A R</td>
                      <td>Assistant Professor</td>
                      <td>Machine Learning, Data Mining</td>
                    </tr>
                    <tr>
                      <th scope="row">23</th>
                      <td>Ashritha R Murthy</td>
                      <td>Assistant Professor</td>
                      <td>Data Mining, Web Mining</td>
                    </tr>
                    <tr>
                      <th scope="row">24</th>
                      <td>Varsha V</td>
                      <td>Assistant Professor</td>
                      <td>Wireless, 5G and IOT Networks</td>
                    </tr>
                    <tr>
                      <th scope="row">25</th>
                      <td>Shruthi N M</td>
                      <td>Assistant Professor</td>
                      <td>Image Processing</td>
                    </tr>
                    <tr>
                      <th scope="row">26</th>
                      <td>Shalini K C</td>
                      <td>Assistant Professor</td>
                      <td>Machine Learning, Internet of Things</td>
                    </tr>
                  </tbody>
                  </table>
                </div>
              </div>
              </div>
            </div>
          </section> */}


          {/* SERVICES ABOUT SECTION */}

          <section id="services" className="section-bg">
            <div className="container">
              <header className="section-header">
                <h3>Services</h3>
                <p>
                  {/*Laudem latine persequeris id sed, ex fabulas delectus quo. No
                  vel partiendo abhorreant vituperatoribus.*/}
                </p>
              </header>

              <div className="row">
                <div
                  className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <div className="icon">
                      <i
                        className="ion-ios-analytics-outline"
                        style={{ color: "#ff689b" }}
                      ></i>
                    </div>
                    <h4 className="title">
                      <a href="http://jssstuniv.in/academics-calendar-of-events/">
                        Resources
                      </a>
                    </h4>
                    <p className="description">

                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-5 wow bounceInUp"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <div className="icon">
                      <i
                        className="ion-ios-bookmarks-outline"
                        style={{ color: "#e9bf06" }}
                      ></i>
                    </div>
                    <h4 className="title">
                      <a href="/faculty">Faculties</a>
                    </h4>
                    <p className="description">

                    </p>
                  </div>
                </div>

                <div
                  className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <div className="icon">
                      <i
                        className="ion-ios-paper-outline"
                        style={{ color: "#3fcdc7" }}
                      ></i>
                    </div>
                    <h4 className="title">
                      <a href="#1">Past Events</a>
                    </h4>
                    <p className="description">

                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-5 wow bounceInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <div className="icon">
                      <i
                        className="ion-ios-speedometer-outline"
                        style={{ color: "#41cf2e" }}
                      ></i>
                    </div>
                    <h4 className="title">
                      <a href="#1">Upcoming Events</a>
                    </h4>
                    <p className="description">

                    </p>
                  </div>
                </div>

                <div
                  className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <div className="icon">
                      <i
                        className="ion-ios-world-outline"
                        style={{ color: " #d6ff22" }}
                      ></i>
                    </div>
                    <h4 className="title">
                      <a href="https://jssstuniv.in/departments-cs/#tab-5c1ba017eed61">
                        Department Acheivements
                      </a>
                    </h4>
                    <p className="description">

                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-5 wow bounceInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <div className="icon">
                      <i
                        className="ion-ios-clock-outline"
                        style={{ color: " #4680ff" }}
                      ></i>
                    </div>
                    <h4 className="title">
                      <a href="#1">Workshops/Conference</a>
                    </h4>
                    <p className="description">

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- #services -->

    <!--==========================
      Why Us Section
    ============================--> */}
          {/*<!--<section id="why-us" className="wow fadeIn">
            <div className="container">
              <header className="section-header">
                <h3>Department Stats</h3>
                <p>

                </p>
              </header>

              <div className="row counters">
                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">181</span>
                  <p>Research Publications</p>
                </div>

                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">135</span>
                  <p>Workshops Conducted</p>
                </div>

                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">49</span>
                  <p>PHD Scholars</p>
                </div>

                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">20</span>
                  <p>Teacher To Student ratio</p>
                </div>
              </div>
            </div>
          </section>-->*/}

          {/* <!--==========================
      Clients Section
    ============================--> */}
    {/*<!--
          <section id="testimonials" className="section-bg">
            <div className="container">
              <header className="section-header">
                <h3>Student Achievers</h3>
              </header>

              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="owl-carousel testimonials-carousel wow fadeInUp">
                    <div className="testimonial-item">
                      <img
                        src={require("../../views/img/akhilesh.jpg")}
                        className="testimonial-img img-fluid rounded-circle"
                        alt=""
                        width="200"
                      />
                      <h3>Akhilesh Yadav</h3>
                      <h4>Indian Politician</h4>
                      <p>
                        "Akhilesh Yadav, born on 1 July 1973, is the current and
                        the 20th Chief Minister of the Indian state of Uttar
                        Pradesh. He is the youngest person to have held this
                        office. His first significant success in politics was
                        his election as a member of the Lok Sabha for the
                        constituency of Kannauj in 2000.He was born to Mulayam
                        Singh Yadav, later a Chief Minister of Uttar Pradesh,
                        and Malti Devi. He was schooled at the Dholpur Military
                        School in Rajasthan, then obtained his Bachelor's and
                        master's degrees in Civil Environmental Engineering from
                        Sri Jayachamarajendra College of Engineering (SJCE),
                        Mysuru. He also has a master's degree in environmental
                        engineering from the University of Sydney, Australia."
                      </p>
                      <p>
                        For more information:
                        <a href="https://en.wikipedia.org/wiki/Akhilesh_Yadav">
                          "https://en.wikipedia.org/wiki/Akhilesh_Yadav"
                        </a>
                      </p>
                    </div>

                    <div className="testimonial-item">
                      <img
                        src={
                          "http://www.sjcealumni.org/assets/content_files/151337948//files/shanmugam.jpg"
                        }
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Shanmugam Manjunath</h3>
                      <h4>Indian Oil Corporation Officer(Grade A)</h4>
                      <p>
                        "Shanmugam Manjunath (23 February 1978 – 19 November
                        2005) was a manager (grade A officer) for the Indian Oil
                        Corporation (IOC) who was murdered for sealing a corrupt
                        petrol station in Lakhimpur Kheri, UP. This incident
                        inspired several students at IIM, IIT and other
                        institutes culminating with the IIM students setting up
                        the "The Manjunath Shanmugam Trust". Manjunath did his
                        initial schooling from Kendriya Vidyalaya, BEML Nagar,
                        Kolar Gold Fields, Karnataka. He finished his 10th in
                        1993 and 12th std in science stream in 1995 from the
                        same school. Later on he did his Computer Science
                        Engineering degree from Sri Jayachamarajendra College of
                        Engineering, Mysore, and an MBA from Indian Institute of
                        Management Lucknow."
                      </p>
                    </div>

                    <div className="testimonial-item">
                      <img
                        src={
                          "http://www.sjcealumni.org/assets/content_files/151337948//files/Nidhi-Subbaiah.jpg"
                        }
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Nidhi Subbaiah</h3>
                      <h4>Indian Actress</h4>
                      <p>
                        "Nidhi Subbaiah (born 16 February 1987) is an Indian
                        film actress and model, who has appeared in various
                        television advertisements and in South Indian Films, she
                        rose to fame by acting in few successful Kannada movies
                        such as Pancharangi (2010) and Krishnan Marriage Story
                        (2011). Both these films brought her nominations for
                        South Filmfare Awardsand the latter film won her SIIMA
                        Special Appreciation Award-Kannada. Nidhi was born on 16
                        February 1987 in the Kodagu district of Karnataka as the
                        only child to Bollachanda Subhash Subbaiah and Jhansi
                        Subbaiah. Soon afterwards, her family later moved to
                        Gokulam in the historic city of Mysore, where she spent
                        most of her childhood and pursued her education. An
                        alumnus of St. Joseph's Central, Mysore, she went on to
                        study civil Engineering from Sri Jayachamarajendra
                        College of Engineering (SJCE), Mysore."
                      </p>
                    </div>

                    <div className="testimonial-item">
                      <img
                        src={
                          "http://www.sjcealumni.org/assets/content_files/151337948//files/Adarsh_Founder.jpg"
                        }
                        alt=""
                        className="testimonial-img"
                      />
                      <h3>B M Jayeshankar</h3>
                      <h4>Builder/Real Estate</h4>
                      <p>
                        "Coming from a modest background, Mr. B M Jayeshankar
                        always had an urge to be different. After completing his
                        Civil Engineering from Sri. Jaychamarajendra College of
                        Engineering, Mysore he decided to take a plunge in the
                        real estate sector. With a clear focus on good quality
                        and construction, Mr. Jayeshankar formed Adarsh Group in
                        1988. Combining his innovative ideas with devote
                        attitude towards accommodating customer needs along with
                        an uncompromising outlook towards quality, Adarsh has
                        been able to achieve greater heights in the past 21
                        years. Today with around 5 million sq.ft of constructed
                        space, Adarsh commands the repute of being an exclusive
                        builder delivering unprecedented superior lifestyles
                        under his command."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>-->*/}
          {/* <!-- #testimonials -->

    <!--==========================
      Team Section
    ============================--> */}
        {/* <!-- <section id="team">
            <div className="container">
              <div className="section-header">
                <h3>CLUBS</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque
                </p>
              </div>

              <div className="row no-gutters owl-carousel clubs-carousel wow fadeInUp">
                <div className="member">
                  <img
                    src={
                      "https://cdn-images-1.medium.com/max/344/1*GUnXaV_rVzuce67X__7G6w@2x.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>DSC JSSSTU</h4>
                      <span>Chief Executive Officer</span>
                      <div className="social">
                        <a href="#1">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member">
                  <img
                    src={
                      "http://www.innovatekarnataka.com/wp-content/uploads/2015/04/02-K-tech_logo_1791x481-04.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>K-Tech</h4>
                      <span>Product Manager</span>
                      <div className="social">
                        <a href="#1">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member text-center">
                  <img
                    src={
                      "https://samfoss15.azurewebsites.net/images/lcclogo.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>LCC SJCE</h4>
                      <span>CTO</span>
                      <div className="social">
                        <a href="#1">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member">
                  <img
                    src={
                      "https://scontent.fblr4-2.fna.fbcdn.net/v/t1.0-9/22815067_1974239449455990_8227355219962562949_n.jpg?_nc_cat=111&_nc_oc=AQnccq1h9VYZj2QLsRLHqbdFCp76mf3xPDvnTyzPScfzgSA0ppgNnq13Kx6GnJ91yTY&_nc_ht=scontent.fblr4-2.fna&oh=0298000eb5d52a92f3fb3e2beff7b6c8&oe=5E2DF24E"
                    }
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Sparsh Talks</h4>
                      <span>Accountant</span>
                      <div className="social">
                        <a href="#1">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>-->*/}
          {/* <!-- #team -->

    <!--==========================
      Clients Section
    ============================--> */}
          {/*<!--<section id="clients" className="section-bg">
            <div className="container">
              <div className="section-header">
                <h3>Our Recruiters</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque dere santome nida.
                </p>
              </div>

              <div className="row no-gutters clients-wrap clearfix wow fadeInUp owl-carousel company-carousel">
                <div className="client-logo">
                  <img
                    src={
                      "http://jssstuniv.in/wp-content/uploads/2017/08/placement_2.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "http://jssstuniv.in/wp-content/uploads/2017/08/placement_3.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "https://yt3.ggpht.com/a/AGF-l7-AXHAlBMHkxZZN2521nZp3YQ995sCWnQ0IIw=s900-c-k-c0xffffffff-no-rj-mo"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "http://jssstuniv.in/wp-content/uploads/2017/08/placement_5.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "http://jssstuniv.in/wp-content/uploads/2017/08/placement_6.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "https://sandiegoisbetter.com/wp-content/uploads/2016/10/Tacos-and-Tech-UltimateLifeHack-Event-Intuit-Logo-Icon-1.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "https://yt3.ggpht.com/a/AGF-l7-BBIcC888A2qYc3rB44rST01IEYDG3uzbU_A=s900-c-k-c0xffffffff-no-rj-mo"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "http://jssstuniv.in/wp-content/uploads/2017/08/placement_9.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_CK5Brz0nkScXcr-blUCRbjhsngiLHAsiVCk4SjtGMozYIyw"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>-->*/}

          {/* <!--==========================
      Contact Section
    ============================--> */}
          <section id="contact">
            <div className="container-fluid">
              <div className="section-header">
                <h3>Contact Us</h3>
              </div>

              <div className="row wow fadeInUp">
                <div className="col-lg-6">
                  <div className="map mb-4 mb-lg-0">
                    <iframe
                      src={
                        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15592.149409781525!2d76.6134265!3d12.3132715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ad797cbfc78d07a!2sJSS%20Science%20and%20Technology%20University%2C%20Mysuru.!5e0!3m2!1sen!2sin!4v1571046705180!5m2!1sen!2sin"
                      }
                      title="map"
                      frameBorder="0"
                      style={{ border: "0", width: "100%", height: "312px" }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row">
                    <div className="offset-md-2 col-md-10 info">
                      <i className="ion-ios-location-outline"></i>
                      <p>
                        JSS Science and Technology University (Formerly SJCE)
                      </p>
                    </div>
                    <div className="offset-md-2 col-md-10 info">
                      <i className="ion-ios-email-outline"></i>
                      <p>office@jssstuniv.in</p>
                    </div>
                    <div className="offset-md-2 col-md-10 info">
                      <i className="ion-ios-telephone-outline"></i>
                      <p>0821-2548285,86,87</p>
                    </div>
                  </div>

                  <div className="form">
                    <div id="sendmessage">
                      Your message has been sent. Thank you!
                    </div>
                    <div id="errormessage"></div>
                    <form action="" method="post" className="contactForm">

                        <div className="form-group ">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            data-rule="minlen:4"
                            data-msg="Please enter at least 4 chars"
                          />
                          <div className="validation"></div>
                        </div>
                        <div className="form-group ">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            data-rule="email"
                            data-msg="Please enter a valid email"
                          />
                          <div className="validation"></div>

                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 8 chars of subject"
                        />
                        <div className="validation"></div>
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows="5"
                          data-rule="required"
                          data-msg="Please write something for us"
                          placeholder="Message"
                        ></textarea>
                        <div className="validation"></div>
                      </div>
                      <div className="text-center">
                        <button type="submit" title="Send Message">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- #contact --> */}
        </main>

        <Link to="/" className="back-to-top">
          <i className="fa fa-chevron-up"></i>
        </Link>
      </div>
    );
  }
}

export default Body;
