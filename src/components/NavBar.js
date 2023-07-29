import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-scroll';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import githubIcon from '../assets/img/githubIcon.png';


export const NavBar = () => {
    // top navigation ui

    // -> manage selected nav.link
    const [activeLink, setActiveLink] = useState('home');
    // -> scrolling
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          }  else {
            setScrolled(false);
          }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand className="logo__text" href="home">
                    <Link to="home"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500} 
                        className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink('home')}
                        style={{textDecoration: 'none'}}>
                             <h2>Jordan Petty</h2>
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav__links">
                        <Nav.Link>
                            <Link to="home"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500} 
                                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                                onClick={() => onUpdateActiveLink('home')}>
                                    Home
                            </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="skill"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}  
                                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                                onClick={() => onUpdateActiveLink('skills')}>
                                    Skills
                            </Link>
                            
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="project"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={100}  
                                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                                onClick={() => onUpdateActiveLink('projects')}>
                                    Projects
                            </Link>
                        </Nav.Link>  
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a className="git" href="#"><img src={githubIcon} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>
                        
                        <Link to="contact"
                        spy={true}
                        smooth={true}
                        offset={10}
                        duration={100}  
                        className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink('contact')}>
                            <button className="vvd" onClick={() => console.log('connect')}>
                                <span>Let's Connect</span>
                            </button>
                        </Link>
                        
                    </span>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
}

export default NavBar;