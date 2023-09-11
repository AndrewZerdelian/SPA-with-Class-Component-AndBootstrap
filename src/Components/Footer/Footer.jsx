import React, { Component } from 'react'
import "./Footer.css"
export default class Footer extends Component {
  render() {
    //fixed-bottom
    return (
      <main className='text-white '>
      
      <div className='background text-center row p-3'>

          <div className="col">
          <h1>LOCATION</h1>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
          </div>


          <div className="col">
          <h1>AROUND THE WEB</h1>

          </div>


          <div className="col">

          <h1>ABOUT FREELANCER</h1>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>



      </div>
      <div className='CopyWright text-center p-2'>
      <p>Copyright © Your Website 2021</p>
      </div>

      
      </main>
    )
  }
}
