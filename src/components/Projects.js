
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import realtThumb from '../assets/img/realty-thumb.png'
import nftThumb from '../assets/img/nft-thumb.png'




export const Projects = () => {
    const project1 = [
        {
        title: "Rocket Realty ",
        description: "Design & Development",
        imgUrl: realtThumb,
        }
    ];
    const project2 = [
        {
        title: "NFT Marketplace ",
        description: "Design & Development",
        imgUrl: nftThumb,
        }
    ];
    // const project3 = [
    //     {
    //     title: "Rocket Realty ",
    //     description: "Design & Development",
    //     imgUrl: projImg3,
    //     }
    // ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>

                        <p>
                            Projects that aim to create a dynamic and user-friendly application using React.js, JavaScript, and Blockchain frameworks. 
                        </p>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                        <Nav.Link eventKey="first">Real Estate</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="second">DeFi</Nav.Link>
                                        </Nav.Item>
                                        {/* <Nav.Item>
                                        <Nav.Link eventKey="third">Gaming</Nav.Link>
                                        </Nav.Item> */}
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__bounce " : ""}>
                                        <Tab.Pane eventKey="first" >
                                            <a href='https://realty-app-weblink.vercel.app/' target='_blank'>
                                                <Row className="tab-pane" >
                                                    {
                                                    project1.map((project1, index) => {
                                                        return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project1}
                                                            />
                                                        )
                                                    })
                                                    }
                                                
                                                </Row>
                                                <Row>
                                                    <p>Decentralized Real Estate application designed to create a seamless property transaction, utilizing NFT technology.</p>
                                                </Row>
                                            </a>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="second">
                                        <a href='https://nft-marketplace-rosy-nine.vercel.app/home' target='_blank'>
                                            <Row className="tab-pane">
                                                {
                                                project2.map((project2, index) => {
                                                    return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project2}
                                                        />
                                                    )
                                                })
                                                }
                                            </Row>
                                            <Row>
                                            <p>Create, buy, and sell Nfts in this one-stop-shop marketplace.</p>
                                            </Row>
                                        </a>
                                        </Tab.Pane>

                                        {/* <Tab.Pane eventKey="third">
                                            <Row className="tab-pane">
                                                {
                                                project3.map((project3, index) => {
                                                    return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project3}
                                                        />
                                                    )
                                                })
                                                }
                                            </Row>

                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                        </Tab.Pane> */}
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-right" src={colorSharp2} />
        </section>
    );
}






export default Projects;