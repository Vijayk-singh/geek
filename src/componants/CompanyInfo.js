import React from 'react'
import Header from './Header'

const CompanyInfo = () => {
  return (
    <div><Header/>
  <div className="card position-absolute top-50 start-50 translate-middle" style={{'width': '22rem'}}>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><b>Company:</b>Geeksynergy Technologies Pvt Ltd</li>
    <li className="list-group-item"><b>Address:</b>Sanjayanagar, Bengaluru-56</li>
    <li className="list-group-item"><b>Phone:</b>XXXXXXXX09</li>
    <li className="list-group-item"><b>Email:</b>XXXXXX@gmail.com</li>
  </ul>
  <div className="card-footer fs-9 ">
    <a className='fw-lighter' href="https://www.geeksynergy.com/about-us.html">https://www.geeksynergy.com/about-us.html</a>
  
  </div>
</div>
        </div>
  )
}

export default CompanyInfo