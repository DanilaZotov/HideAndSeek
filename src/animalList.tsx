import '/css/style.css'
import '/css/allstyles.css'
import '/css/animalListStyle.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import * as React from 'react';
import { Link } from 'react-router-dom';

export function AnimalList() {
    
    return (
    <>
    <main className="main">
        <section className="filterAnimals">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <div className='filter_waveheader'>Приручить котика</div>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    <select className='filterSelect'>
                                        <option value="" disabled selected>Тип объявления</option>
                                    </select>
                                    <select className='filterSelect'>
                                        <option value="" disabled selected>Окрас</option>
                                    </select>
                                    <input type="checkbox" id="allergic" className='filterCheckbox'></input>
                                    <label htmlFor='allergic' className='filterLabel'>Гипоаллергенная шерсть</label>
                                </Grid>
                                <Grid item xs={4}>
                                    <select className='filterSelect'>
                                        <option value="" disabled selected>Кот</option>
                                    </select>
                                    <select className='filterSelect'>
                                        <option value="" disabled selected>Пол</option>
                                    </select>
                                    <input type="checkbox" id="begginers" className='filterCheckbox'></input>
                                    <label htmlFor='begginers' className='filterLabel'>Подходит начинающим</label>
                                </Grid>
                                <Grid item xs={4}>
                                    <select className='filterSelect'>
                                        <option value="" disabled selected>Порода</option>
                                    </select>
                                    <select className='filterAge1'>
                                        <option value="" disabled selected>Возраст от</option>
                                    </select>
                                    <select className='filterAge2'>
                                        <option value="" disabled selected>До</option>
                                    </select>
                                    <a href=''><img src='./showAnimalsButton.svg' width={328}></img></a>
                                </Grid>
                            </Grid>    
                        </Box> 
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>    
            </Box>        
        </section>
        <section className='listOfAnimals'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Link to={'./AnimalDescription'}><img src='./fullCard.svg' width={1220} className='fullCardImg'></img></Link>
                        <img src='./fullCard.svg' width={1220} className='fullCardImg'></img>
                        <img src='./fullCard.svg' width={1220} className='fullCardImg'></img>
                        <img src='./fullCard.svg' width={1220} className='fullCardImg'></img>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>    
            </Box>         
        </section>
    </main>
    <footer>
    </footer>  
    </>
    
    );
}