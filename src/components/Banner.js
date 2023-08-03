import { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "DApps Developer", "Smart Contract Engineer" ];
  const period = 2000;
  const [activeLink, setActiveLink] = useState('contact');

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}

    return (

      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to My Portfolio</span>

                  <h1>{`Hi I'm Jordan Petty`} <span className="txt-rotate" 
                    dataPeriod="1000" 
                    >
                    <span className="wrap">
                      {text}
                    </span>
                    </span>
                    </h1>

                    <p>
                    My previous work experience has allowed me to develop a deep understanding of JavaScript, React.js, Solidity, and MySql, 
                    empowering me to craft efficient and seamless solutions for complex projects. With a keen eye for detail and 
                    an unwavering commitment to meeting deadlines, I consistently deliver high-quality results that exceed expectations. 
                    </p>

                    <Link to="contact"
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500} 
                      className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} 
                      onClick={() => onUpdateActiveLink('contact')}>
                        <button >Let’s Connect <ArrowRightCircle size={25} /></button>
                    </Link>
                    
                </div>}
              </TrackVisibility>
            </Col>
            
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
    </section>
    );
}









export default Banner;