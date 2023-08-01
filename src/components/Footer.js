import { Container, Row, Col, } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import githubIcon from '../assets/img/githubIcon.png';
import linkedInIcon from '../assets/img/linkedin-icon.png';
import codePenIcon from '../assets/img/codepen-icon.png';



export const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-content">
                <Row className="justify-content-center">
                    {/* <MailchimpForm /> */}

                    <Col sm={6} className="text-center">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/jordan-petty-a66042286/" target="_blank"><img src={linkedInIcon} atl="" /></a>
                            <a href="https://github.com/rocketRexTech?tab=repositories" target="_blank"><img src={githubIcon} atl="" /></a>
                            <a href="https://codepen.io/your-work" target="_blank"><img src={codePenIcon} atl="" /></a>
                        </div>

                        <p>CopyRight 2023. All Rights Reserved by Jordan Petty</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer;