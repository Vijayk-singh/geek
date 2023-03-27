import { Outlet, Link } from "react-router-dom";
<Link to="/">Home</Link>
const Header = () => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-info">
    <div className="container-fluid">
      <a className="navbar-brand" >GEEKSYNERGY</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
          <li className="nav-item">
          <Link to="/" className="btn btn-warning m-2">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/Companyinfo" className="btn btn-warning m-2">CompanyInfo</Link>
          </li>
         
        </ul>
       
      </div>
    </div>
  </nav><Outlet/>
  </div>
  )
}

export default Header