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

import doges1 from '/public/doges.png'
import Bella from '/DogsPics/Bella.png';
import Dana from '/DogsPics/Dana.png';
import Sema from '/DogsPics/Sema.png';
import Max from '/DogsPics/Max.png';
import Belka from '/DogsPics/Belka.png';
import Fox from '/DogsPics/Fox.png';
import Michelle from '/DogsPics/Michelle.png';

export function AnimalDescription() {

    let animals: any[] = [
        {img: doges1, name: 'Рэкс', age: '2 - 3 года',color: 'Чепраный окрас', sex: 'Мальчик', vax: 'Привит'},
        {img: Bella, name: 'Бэлла', age: '0,5 - 1 года',color: 'Черно-белый окрас', sex: 'Девочка', vax: 'Не привита'},
        {img: Dana, name: 'Дана', age: '5 - 10 лет',color: 'Волчий окрас', sex: 'Девочка', vax: 'Не привита'},
        {img: Max, name: 'Макс', age: '2 - 5 лет',color: 'Светлый окрас', sex: 'Мальчик', vax: 'Привит'},
      ];

    return (
    <>
    <main>
        <section className='fullAnimalInfo'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        
                            <div>
                                <h1 className='animalName'>{animals[0].name}</h1>
                                <img src={animals[0].img} className='bigPicture'></img>
                            </div>
                            
                        
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
                                            <p className='animalStatsLineText'>---</p>
                                            <p className='animalStatsLineText'>{animals[0].color}</p>
                                            <p className='animalStatsLineText'>{animals[0].name}</p>
                                            <p className='animalStatsLineText'>{animals[0].sex}</p>
                                            <p className='animalStatsLineText'>{animals[0].age}</p>
                                            <p className='animalStatsLineText'>--</p>
                                            <p className='animalStatsLineText'>--</p>
                                            <p className='animalStatsLineText'>Собака</p>
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