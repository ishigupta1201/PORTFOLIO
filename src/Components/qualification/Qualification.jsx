import React, { useState } from 'react'
import './Qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">MY personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={
                        toggleState === 2 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
                <div 
                    className={
                        toggleState === 1 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"
                    } 
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelor of Technology</h3>
                            <span className="qualification__subtitle">Maharaja Agrasen Institue of Technology, Delhi</span>
                            <div className="qualification-calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022-Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">XII</h3>
                            <span className="qualification__subtitle">Bal Bharati Public School, Rohini</span>
                            <div className="qualification-calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">X</h3>
                            <span className="qualification__subtitle">Bal Bharati Public School, Rohini</span>
                            <div className="qualification-calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2020
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification-calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2017-2018
                            </div>
                        </div>
                    </div>                     */}
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Developer Intern</h3>
                            <span className="qualification__subtitle">Qidi</span>
                            <span className="qualification__subtitle__web">qidichairs.in</span>
                            <div className="qualification-calendar">
                                <i className="uil uil-calendar-alt"></i>
                                Aug - Oct 2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Web Developer</h3>
                            <span className="qualification__subtitle">Plasmid</span>
                            <div className="qualification-calendar">
                                <i className="uil uil-calendar-alt"></i>
                                June - July 2024
                            </div>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification-calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2018-2020
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}

                    {/* <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification-calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2017-2018
                            </div>
                        </div>
                    </div>                     */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification