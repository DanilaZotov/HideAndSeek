import '/css/style.css'
import '/css/allstyles.css'
import '/css/animalListStyle.css'
import '/css/ArticlesStyle.css'
import '/css/Profile.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import * as React from 'react';

import validationButton from '/public/validationButton.svg';
import editProfileButton from '/public/editProfileButton.svg';

export function AccountPage() {
    return (
        <>
        <main>
            <section className='profileInfo'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={10}>
                                <div className='profileContainer'>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={1}></Grid>
                                            <Grid item xs={2}>
                                                <div className='cirleAvatar'></div>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <p className='nickname'>Dom007</p>
                                                <p className='fullName'>Иван Иванов</p>
                                                <p className='contacts'>name@gmail.com  +7(999)555 12 04</p>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <a href='/'><img src={validationButton} className='bttnProfile'></img></a>
                                                <a href='/'><img src={editProfileButton}></img></a>
                                            </Grid>
                                            <Grid item xs={1}></Grid>
                                        </Grid>
                                    </Box>
                                </div></Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}></Grid> 
                            <Grid item xs={5}></Grid>
                            <Grid item xs={5}></Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                    </Box>
                
            </section>
            <section className='ownConent'>

            </section>
        </main>
        <footer>

        </footer>
        </>
    )
}