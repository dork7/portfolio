import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'
import profileImg from '../assests/img.jpg'

class resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={profileImg}
                                alt="avatar"
                                style={{ height: '250px' , borderRadius: '10px'}} />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Hamza Mehmood</h2>
                        <h4 style={{ color: 'grey' }}> Software Developer</h4>
                        <hr style={{ borderTop: '3px #833fb2 solid', width: '50%' }} />
                        <p>Result-oriented and dedicated software engineer, having extensive expertise of three years in not only 
                        developing applications for embedded systems but also in web development (Freelancing). 
                        Skilled at team collaboration while working independently in a remote environment. 
                        I have proven my ability to leverage full-stack knowledge to build interactive and 
                        user-centered website designs to scale.</p>
                        <hr style={{ borderTop: '3px #833fb2 solid', width: '50%' }} />
                        <h4 style={{ color: 'grey' }}> Address</h4>
                        <p> House #66, m]Model Town, Islamabad, Pakistan</p>
                        <p> 92-345-5293564</p>
                        <h5>Email</h5>
                        <p>hamzameh122@gmail.com</p>
                        <hr style={{ borderTop: '3px #833fb2 solid', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-side" col={8}>
                        <h2>Education</h2>
                        <Education startYear='2014'
                            endYear='2018'
                            schoolName='National Unversity of Modern Languages'
                            schoolDescription="BS Software Engineering  " />
                            {/* 
                        <Education startYear='2012'
                            endYear='2014 '
                            schoolName='My 2nd University'
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries." /> */}

                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Experience</h2>

                        <Experience
                            startYear='2018'
                            endYear='2020'
                            jobName='Software Design Engineer'
                            jobDescription="Working as s software design engineer at Teresol.Pvt, Pakistan" />
                        <Experience
                            startYear='2017'
                            endYear='2020'
                            jobName='Freelancing'
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries." />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2> Skills</h2>
                        
                        <Cell col={12}>
                            <Grid>
                                <Cell className="" col={6}>
                                    <Skills
                                        skills='JavaScript'
                                        progress='50'
                                    />
                                    <Skills
                                        skills='NodeJs'
                                        progress='50'
                                    />
                                    <Skills
                                        skills='Reactjs'
                                        progress='25'
                                    />
                                </Cell>

                                <Cell className="" col={6}>


                                    <Skills
                                        skills='C++'
                                        progress='50'
                                    />
                                    <Skills
                                        skills='Qt'
                                        progress='70'
                                    />
                                </Cell>


                            </Grid>
                        </Cell>
                    </Cell>



                </Grid>
            </div >
        )
    }
}

export default resume
