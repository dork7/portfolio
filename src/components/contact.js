import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class contact extends Component {
    render() {
        return (

            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Hamza Mehmood </h2>
                        <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                            alt="avatar"
                            style={{ height: '250px' }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                        Result-oriented and dedicated software engineer, having extensive expertise of three years in not only 
                        developing applications for embedded systems but also in web development (Freelancing). 
                        Skilled at team collaboration while working independently in a remote environment. 
                        I have proven my ability to leverage full-stack knowledge to build interactive and 
                        user-centered website designs to scale.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{
                                        fontSize: '30px',
                                        fontFamily: 'Anton'
                                    }}>
                                        <i className="fa fa-phone-square" />92-345-5293564</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{
                                        fontSize: '30px',
                                        fontFamily: 'Anton'
                                    }}>
                                        <i className="fa fa-envelope" />hamzameh122@gmail.com</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{
                                        fontSize: '30px',
                                        fontFamily: 'Anton'
                                    }}>
                                        <i className="fa fa-linkedin" />@hamzameh</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{
                                        fontSize: '30px',
                                        fontFamily: 'Anton'
                                    }}>
                                        <i className="fa fa-github" />github.com/dork7</ListItemContent>
                                </ListItem>



                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default contact
