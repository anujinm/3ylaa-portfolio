import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavLink extends Component {
    render() {
        return (
          <li className={"nav-item " + (this.props.isActive ? "active": "")}>
                <Link 
                      className="nav-link" 
                      to={this.props.path}
                      onClick={() => this.props.onClick()}
                    >
                    {this.props.text}
                </Link>
                {this.props.isLast == false &&
                    <div class="d-none d-lg-block d-xl-block" id="navbar-dot">
                        <span>&#8226;</span>
                    </div>   
                }
          </li>
        );
    }
  }

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {path: "/", text: "Portfolio", isActive: true, isLast: false},
                {path: "/flat", text: "Flat Illustration", isActive: false, isLast: false},
                {path: "/3d", text: "3D Illustration", isActive: false, isLast: false},
                {path: "/about", text: "About", isActive: false, isLast: false},
                {path: "/contact", text: "Contact", isActive: false, isLast: true},
            ]
        }
    }

    handleClick(i) {
        const links = this.state.links.slice();
        for (const j in links) {
            links[j].isActive = i == j;
        }
        this.setState({links: links});
    }

    render() {
        return(
            <div className="navbar">
                <div className="navbar-brand-name">
                    <h1 class="d-none d-lg-block d-xl-block">3ylaa Illustration</h1>
                </div>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div className="navbar-collapsed-brand-name">
                        <a class="navbar-brand d-block d-lg-none d-xl-none" href="#">3ylaa Illustration</a>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav mx-auto" id="navbarA">
                            <ul className="navbar-nav">
                                {this.state.links.map((link, i) =>
                                <NavLink 
                                    path={link.path} 
                                    text={link.text}
                                    isActive={link.isActive} 
                                    isLast={link.isLast}
                                    onClick={() => this.handleClick(i)}
                                    />
                                )}
                                <div class="d-block d-lg-none d-xl-none">
                                    <div className="navbar-social-links">
                                        <a href="https://www.instagram.com/3ylaa_illustration/" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                                        </a>
                                        <a href="https://www.facebook.com/3ylaa" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-facebook-square fa-lg" aria-hidden="true"></i>
                                        </a>
                                        <a href="https://dribbble.com/3ylaa" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-dribbble fa-lg" aria-hidden="true" />
                                        </a>
                                        <a href="https://www.behance.net/3ylaa?fbclid=IwAR2vTlgzy7dl0q8N3l9-XbEiwDW6rt3vN8TX8TB5UjpekziRao8ZzQAJOPw" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-behance-square fa-lg" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                 </nav>
                 <div className="navbar-social-links navbar-social-links-bar">
                    <div class="d-none d-lg-block d-xl-block">
                        <a href="https://www.instagram.com/3ylaa_illustration/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.facebook.com/3ylaa" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook-square fa-lg" aria-hidden="true"></i>
                        </a>
                        <a href="https://dribbble.com/3ylaa" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-dribbble fa-lg" aria-hidden="true" />
                        </a>
                        <a href="https://www.behance.net/3ylaa?fbclid=IwAR2vTlgzy7dl0q8N3l9-XbEiwDW6rt3vN8TX8TB5UjpekziRao8ZzQAJOPw" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-behance-square fa-lg" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;
