import React, { useState } from 'react'
import './qualification.css'

export const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className='qualification section' id='qualification'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My Personal Journey</span>

        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(1)}>
                    <i className='uil uil-graduation-cap qualification__icon'></i> Education
                </div>

                {/* <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(2)}>
                    <i className='uil uil-briefcase-alt qualification__icon'></i> Experiance
                </div> */}
            </div>

                <div className='qualification__sections'>
                    <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>BE Computer Engineering</h3>
                                <span className='qualification__subtitle'>University of Mumbai - INDIA</span>
                                <div className='qualification__calender'>
                                    <i class="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>Diploma Computer Engineering</h3>
                                <span className='qualification__subtitle'>MSBTE - INDIA</span>
                                <div className='qualification__calender'>
                                    <i class="uil uil-calendar-alt"></i> 2019 - 2022
                                </div>
                            </div>
                        </div>

                        

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>10'th SCC</h3>
                                <span className='qualification__subtitle'>Pune - INDIA</span>
                                <div className='qualification__calender'>
                                    <i class="uil uil-calendar-alt"></i> 2018 - 2019
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                        
                    </div>

                    <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Product Designer</h3>
                                <span className='qualification__subtitle'>Microsoft - Spain</span>
                                <div className='qualification__calender'>
                                    <i class="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>UX Designer</h3>
                                <span className='qualification__subtitle'>Apple Inc - Spain</span>
                                <div className='qualification__calender'>
                                    <i class="uil uil-calendar-alt"></i> 2015 - 2018
                                </div>
                            </div>
                        </div>

                        

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Web Designer</h3>
                                <span className='qualification__subtitle'>Figma - Spain</span>
                                <div className='qualification__calender'>
                                    <i class="uil uil-calendar-alt"></i> 2018 - 2019
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>


                    </div>
                </div>
            
        </div>
    </section>
  )
}
