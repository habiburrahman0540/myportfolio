import React from 'react'

const SideBarSection = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-header">
            <img src="img/profile.jpg" alt="Image"/>
        </div>
        <div className="sidebar-content">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a href="#" className="navbar-brand">Navigation</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#header">Home<i className="fa fa-home"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About<i className="fa fa-address-card"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Experience<i className="fa fa-star"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#service">Service<i className="fa fa-tasks"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio<i className="fa fa-file-archive"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact<i className="fa fa-envelope"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className="sidebar-footer">
            <a href="https://x.com/habib0054"><i className="fab fa-twitter"></i></a>
            <a href="https://web.facebook.com/habiburrahman7"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/habibur-rahman"><i className="fab fa-linkedin-in"></i></a>
        </div>
    </div>
  )
}

export default SideBarSection