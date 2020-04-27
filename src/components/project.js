import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText } from 'react-mdl'

class project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className = 'project-grid' col={12}>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '170px', background: 'url(https://cdn-media-1.freecodecamp.org/images/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg) center / cover' }}>
                            React Project 1
                   </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text.</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live maybe</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '170px', background: 'url(https://cdn-media-1.freecodecamp.org/images/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg) center / cover' }}>
                            React Project 1
                   </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text.</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live maybe</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '170px', background: 'url(https://cdn-media-1.freecodecamp.org/images/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg) center / cover' }}>
                            React Project 1
                   </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text.</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live maybe</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    
                    

                </div>

            )
        }
        else if (this.state.activeTab === 1) {
            return (<div>
                <h1>
                    Qt - C++/Python
                          </h1>
            </div>)
        }
        else if (this.state.activeTab === 2) {
            return (<div>
                <h1>
                    JavaScript
                </h1>
            </div>)
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab> React </Tab>
                    <Tab> Qt - C++/Python </Tab>
                    <Tab> JavaScript </Tab>
                </Tabs>
                {/* <section className="projects_grid"> */}
                    <Grid>
                        <Cell col={12}>
                            <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                {/* </section> */}
            </div>
        )
    }
}

export default project
