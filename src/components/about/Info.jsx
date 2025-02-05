import React from 'react'

export const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
            <i class='bx bx-award about__icon'></i>
            <h3 className='about__title'>Experience</h3>
            <span className='about__subtitle'>8 Years Working</span>
        </div>

        <div className='about__box'>
            <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className='about__title'>Projects</h3>
            <span className='about__subtitle'>+30 Completed</span>
        </div>
        <div className='about__box'>
            <i class='bx bx-support about__icon'></i>
            <h3 className='about__title'>Support</h3>
            <span className='about__subtitle'>24/7</span>
        </div>
    </div>
  )
}
