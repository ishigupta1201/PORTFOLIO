import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="services section" id='projects'>
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">What I have done</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="bx bx-conversation services__icon"></i>
                    <h3 className="services__title">Chat <br/> Application</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i> 
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Chat Application</h3>
                        <p className="services__modal-description">Developed a real-time chat application using the MERN stack, integrating Socket.IO for instant messaging and Cloudinary for multimedia sharing, ensuring seamless and low-latency communication.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Real-Time Communication -</strong> Implemented instant messaging using <strong>Socket.IO</strong>, enabling seamless live interactions.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Secure Authentication – </strong>Integrated <strong>JWT-based authentication</strong> and <strong>role-based access control</strong> for enhanced data security.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Multimedia Sharing – </strong>Enabled image and file uploads via <strong>Cloudinary</strong>, improving user experience.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Customizable UI –</strong> Designed an interactive <strong>React-based</strong> interface with <strong>32+ DaisyUI themes</strong> for personalization.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Optimized Performance –</strong> Deployed on <strong>Render</strong>, tested APIs with <strong>Postman</strong>, ensuring low-latency messaging.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Scalability & Uptime –</strong> Engineered a scalable architecture, maintaining <strong>99% uptime</strong> for uninterrupted chats.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="services__content">
                <div>
                    <i className="bx bx-chair services__icon"></i>
                    <h3 className="services__title">E-Commerce <br/> Website</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i> 
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">E-Commerce Website</h3>
                        <p className="services__modal-description">Built a feature-rich e-commerce platform using the MERN stack, optimizing performance, security, and user engagement with seamless navigation and efficient backend operations.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Secure Transactions -</strong> Implemented <strong>JWT authentication</strong> to ensure secure user logins and data protection.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Optimized Performance -</strong> Developed a <strong>Vite-powered frontend</strong>, reducing page load times by 35% for a smoother shopping experience.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Dynamic Cart & Checkout -</strong> Designed an <strong>interactive cart</strong> system with an optimized checkout flow, reducing abandonment rates.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Efficient Media Management -</strong> Integrated <strong>Cloudinary</strong> for high-performance media storage, enhancing product visuals.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Admin Dashboard -</strong> Built a <strong>robust inventory & order management system</strong>, streamlining business operations.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Seamless Deployment -</strong> Deployed via <strong>Vercel (frontend)</strong> and <strong>Render (backend)</strong> with <strong>GitHub version control</strong>, ensuring <strong>90% uptime</strong>.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="services__content">
                <div>
                    <i className="bx bx-wallet services__icon"></i>
                    <h3 className="services__title">Finance <br/>Budgeting Application </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i> 
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Finance Budgeting App</h3>
                        <p className="services__modal-description">Developed a full-stack budgeting application using the MERN stack, integrating AI-driven automation and real-time analytics to simplify financial management.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>AI-Driven Expense Categorization - </strong> Automated financial tracking, reducing manual effort by <strong>60%</strong>.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Optimized User Experience -</strong> Designed a <strong>React-based UI</strong> with <strong>Tailwind CSS</strong>, improving accessibility and engagement.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Real-Time Insights - </strong>Integrated <strong>interactive charts</strong> and <strong>MongoDB aggregation</strong>, enabling instant financial analysis.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Secure Authentication -</strong> Implemented <strong>JWT-based authentication</strong>, ensuring data privacy and secure user sessions.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Scalable Backend -</strong> Built <strong>RESTfu </strong> <strong>APIs</strong> for seamless transaction management and performance optimization.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><strong>Reliable Deployment -</strong> Hosted on <strong>Vercel</strong>, ensuring high availability and smooth performance.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Projects