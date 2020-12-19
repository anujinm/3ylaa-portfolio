import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                {/* <div className="navbar-pages">
                    <a>Portfolio</a>
                    <span>&#8226;</span>
                    <a>Flat Illustration</a>
                    <span>&#8226;</span>
                    <a>3D Illustration</a>
                </div> */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand d-block d-lg-none d-xl-none" href="#">3ylaa Illustration</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav mx-auto">
                            <a class="nav-item nav-link active" href="#">Portfolio <span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="#">Flat Illustration</a>
                            <a class="nav-item nav-link" href="#">3D Illustration</a>
                            <a class="nav-item nav-link" href="#">About</a>
                            <a class="nav-item nav-link" href="#">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
