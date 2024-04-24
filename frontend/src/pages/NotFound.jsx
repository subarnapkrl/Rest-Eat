import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <section className="notFound">
      <div className="container">
        <img src="./notFound.svg" alt="" />
        <h1>AVAILABLE SOON</h1>
        <p>The Page You are Looking for is still in development.</p>
        <Link to={'/'}>
          Back to Home {" "}
          <span>
            <HiOutlineArrowNarrowRight/>
          </span>
        </Link>
      </div>
    </section>
    </>
  )
}

export default NotFound