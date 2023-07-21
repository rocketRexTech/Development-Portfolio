
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';




export const Projects = () => {
    const project1 = [
        {
        title: "Rocket Realty ",
        description: "Design & Development",
        imgUrl: projImg1,
        }
    ];
    const project2 = [
        {
        title: "Rocket Realty ",
        description: "Design & Development",
        imgUrl: projImg2,
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
                            Et minim commodo sunt do. Ad ullamco in cillum magna aute aliquip culpa quis veniam laboris pariatur occaecat laboris. 
                            Aliquip labore magna magna reprehenderit deserunt aliqua ullamco reprehenderit reprehenderit qui excepteur qui. 
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
                                        <Tab.Pane eventKey="first">
                                            <Row className="tab-pane">
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
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Row>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="second">
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

                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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