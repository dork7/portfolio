import React, { Component } from 'react'
import { Grid, Cell , ProgressBar } from 'react-mdl'

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{ display: 'flex' }}>
                       <p  style={{width:'50px'}}> {this.props.skills} </p>
                        <ProgressBar style={{margin :'auto' , width: '75%'}} progress={this.props.progress} />
                    </div>
                </Cell>

            </Grid>
        )
    }
}

export default Skills
