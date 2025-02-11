import React from 'react'

export const Others = () => {
  return (
    <div className='skills__content'>
        <h3 className='skills__title'>Other Skills</h3>

        <div className='skills__box'>

            <div className='skills__group'>

                <div className='skills__data'>
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Git</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>GitHub</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Visual Studio</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>

            </div>

            <div className='skills__group'>
                
                <div className='skills__data'>
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Vercel</h3>
                        <span className='skills__level'>Advanced</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Figma</h3>
                        <span className='skills__level'>Advanced</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>AWS</h3>
                        <span className='skills__level'>Basic</span>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}