import { Container, Row, Col, } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';



export const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-content">
                <Row className="justify-content-center">
                    {/* <MailchimpForm /> */}

                    <Col sm={6} className="text-center">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} atl="" /></a>
                            <a href="#"><img src={navIcon2} atl="" /></a>
                            <a href="#"><img src={navIcon3} atl="" /></a>
                        </div>

                        <p>CopyRight 2023. All Rights Reserved by Jordan Petty</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer;