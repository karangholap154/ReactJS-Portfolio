import React from 'react';
import './home.css';
import { Social } from './Social';
import { Data } from './Data';
import { ScrollDown } from './ScrollDown';

export const Home = () => {
  return (
    <section className='home sectionHome' id='home'>
        <div className='home__container container grid'>
            <div className='home__content grid'>
                <Social/>

                <div className='home__img'></div>

                <Data/>
            </div>
            <ScrollDown/>
        </div>
    </section>
  )
}
