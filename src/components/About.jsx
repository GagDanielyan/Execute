import React from 'react'
import './About.css'
import john from '../components/images/john-doe.png'

const About = () => {
  return (
    <div className='about'>
      <div className="container">
        <img src={john} alt="" />
      </div>
    </div>
  )
}

export default About
