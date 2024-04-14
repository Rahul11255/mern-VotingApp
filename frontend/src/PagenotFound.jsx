import React from 'react'
import pagenotfound from "./components/images/pagenotfound-404.png"

const PagenotFound = () => {
  return (
    <div className='pagenotfound'>
    <img src={pagenotfound} alt="page-not-found-404" />
    </div>
  )
}

export default PagenotFound