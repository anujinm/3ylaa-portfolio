import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Navbar from './navbar';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <br/><br/>
                        <h1>Landing page - Portfolio</h1>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;