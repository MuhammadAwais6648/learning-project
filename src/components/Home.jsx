import React from 'react'
import "./HomepageStyling.css"

function Home() {
  return (
    <div>
      {/* // eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 className='my-home-page-header'>Home Page</h1>
      <a href='/header'>Header</a><br/>
      <a href='/dashboard'>Dashboard</a>

    </div>
  )
}

export default Home
