import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Navbar from './navbar';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="landing-grid">
                            <h1 class="d-none d-lg-block d-xl-block">3ylaa Illustration</h1>
                        </div>

                        <Navbar/>

                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            {/* Github */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* Freecodecamp */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp" aria-hidden="true" />
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;