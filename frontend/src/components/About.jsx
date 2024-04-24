import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">About Us</h1>
                    <p>The only thing we are serious about is food.</p>
                </div>
                <p className="mid">
                     Indulge in a culinary journey like no other at our restaurant. With a passion for flavor and a dedication to quality, we invite you to savor each bite and experience the joy of dining in a truly extraordinary atmosphere.

                </p>
                <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight/></span></Link>
            </div>

            <div className="banner">
                <img src="./about.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default About