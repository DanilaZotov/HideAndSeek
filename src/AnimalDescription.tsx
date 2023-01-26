import '/css/style.css'
import '/css/allstyles.css'
import '/css/animalListStyle.css'
import '/css/ArticlesStyle.css'
import '/css/AnimalDescription.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import * as React from 'react';

import homster from '/public/homster.svg';
import multiHomster from '/public/multiHomster.svg';
import dmButton from '/public/dmButton.svg'
import callButton from '/public/dmButton.svg'

export function AnimalDescription() {
    
    return (
    <>
    <main>
        <section className='fullAnimalInfo'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        <h1 className='animalName'>Сирийский хомяк "Кирюша"</h1>
                        <img src={homster} className='bigPicture' width={324}></img>
                        <img src={multiHomster}  width={524}></img>
                    </Grid>
                    <Grid item xs={5}>
                        <div className='advAuthor'>
                            <Box sx={{ flexGrow: 1}}>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <p className='authorName'>Юлия Суханова</p>
                                        <a href='/'><img src={ dmButton } className='authorImgs'></img></a>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <a href='/' className='otherAdvByAuthor'>Другие объявления</a>
                                        <a href='/'><img src={ callButton } className='authorImgs'></img></a>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <div className='animalStats'>
                            <p className='authorName'>Описание питомца</p>
                            <Box sx={{ flexGrow: 1}}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={6}>
                                            <p className='authorName'>Порода</p>
                                            <p className='authorName'>Окрас</p>
                                            <p className='authorName'>Кличка</p>
                                            <p className='authorName'>Пол</p>
                                            <p className='authorName'>Возраст</p>
                                            <p className='authorName'>Размер</p>
                                            <p className='authorName'>Вес</p>
                                            <p className='authorName'>Тип</p>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <p className='animalStatsLineText'>Сирийский</p>
                                            <p className='animalStatsLineText'>Персиковый</p>
                                            <p className='animalStatsLineText'>Кирюша</p>
                                            <p className='animalStatsLineText'>Мальчик</p>
                                            <p className='animalStatsLineText'>1 год 2 месяца</p>
                                            <p className='animalStatsLineText'>--</p>
                                            <p className='animalStatsLineText'>100г</p>
                                            <p className='animalStatsLineText'>Хомяк</p>
                                        </Grid>
                                    </Grid>
                                </Box>
                        </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>        
            </Box> 
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <div className='AuthorComment'>
                                <p className='authorName'>Комментарий продавца</p>
                                <p className='animalStatsLineText'> продам Сирийского хомячка. Мальчик.</p>
                                <p className='animalStatsLineText'> Окрас персиковый </p>
                                <p className='animalStatsLineText'> Пиво не пьет </p>
                            </div>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        </Grid>
                    </Box>           
        </section>
    </main>
    </>
    )
}