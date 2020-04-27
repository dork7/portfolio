import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class landing_page extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" className="avatar-img" />
                        <div className="banner-text">
                            <h1> DEVELOPER </h1>
                            <hr />
                            <p> React | BootStrap | JavaScript</p>
                           
                            <div className="social-links">
                                
                                <a href="http://google.com" target="_blank"  rel="noopener no referrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                <a href="http://google.com" target="_blank"  rel="noopener no referrer">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                                <a href="http://google.com" target="_blank"  rel="noopener no referrer">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                                </a>

                                <a href="http://google.com" target="_blank"  rel="noopener no referrer">
                                    <i className="fa fa-youtube-square" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default landing_page
