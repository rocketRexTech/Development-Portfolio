import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skill">
            <Container>
                <Row>
                    <Col>
                      <TrackVisibility>
                      {({ isVisible }) => 
                        <div className="skill-box">
                          <div className={isVisible ? "animate__animated animate__fadeInUp " : ""}>
                            <h2>
                              Skills
                            </h2>

                            <p>
                              Et minim commodo sunt do. Ad ullamco in cillum magna aute aliquip culpa quis veniam laboris pariatur occaecat laboris. 
                              Aliquip labore magna magna reprehenderit deserunt aliqua ullamco reprehenderit reprehenderit qui excepteur qui. 
                            </p>
                          </div>
                  
                          <Carousel responsive={responsive} infinite={true} className="skill-slider">
                              <div  className="item">
                                  <img src={meter1} alt="Image" />
                                  <h5>Solidity</h5>
                              </div>
                              <div  className="item">
                                  <img src={meter2} alt="Image" />
                                  <h5>React.js</h5>
                              </div>
                              <div  className="item">
                                  <img src={meter3} alt="Image" />
                                  <h5>MySQL</h5>
                              </div>
                              <div  className="item">
                                  <img src={meter1} alt="Image" />
                                  <h5>AWS</h5>
                              </div>
                          </Carousel>
                        </div>
                      }
                      </TrackVisibility>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-left" src={colorSharp} />
        </section>
      );
}















export default Skills;