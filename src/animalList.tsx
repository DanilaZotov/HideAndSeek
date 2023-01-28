import '/css/style.css'
import '/css/allstyles.css'
import '/css/animalListStyle.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnimalDescription } from './AnimalDescription';

import doges1 from '/public/doges.png'
import Bella from '/DogsPics/Bella.png';
import Dana from '/DogsPics/Dana.png';
import Sema from '/DogsPics/Sema.png';
import Max from '/DogsPics/Max.png';
import Belka from '/DogsPics/Belka.png';
import Fox from '/DogsPics/Fox.png';
import Michelle from '/DogsPics/Michelle.png';


export function AnimalList() {
    let animalsLeft: any[] = [
        {img: doges1, name: 'Рэкс', age: '2 - 3 года',color: 'Чепраный окрас', sex: 'Мальчик', vax: 'Привит'},
        {img: Bella, name: 'Бэлла', age: '0,5 - 1 года',color: 'Черно-белый окрас', sex: 'Девочка', vax: 'Не привита'},
        {img: Dana, name: 'Дана', age: '5 - 10 лет',color: 'Волчий окрас', sex: 'Девочка', vax: 'Не привита'},
        {img: Max, name: 'Макс', age: '2 - 5 лет',color: 'Светлый окрас', sex: 'Мальчик', vax: 'Привит'},
      ];

      let animalsRight: any[] = [
        {img: Sema, name: 'Сема', age: '1,5 года',color: 'Оранжевый окрас', sex: 'Мальчик', vax: 'Привит'},
        {img: Belka, name: 'Белка', age: '1 год',color: 'Белый окрас', sex: 'Девочка', vax: 'Привита'},
        {img: Michelle, name: 'Мишель', age: '0.7 года',color: 'Черный окрас', sex: 'Девочка', vax: 'Привита'},
        {img: Fox, name: 'Фокс', age: '1,5 года',color: 'Коричневый окрас', sex: 'Мальчик', vax: 'Привит'},
      ];
    
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
                    <Grid item xs={5}>
                    {animalsLeft.map(animal => 
                        <div className='animalCard'>
                            <div className='animalCardinner'>
                                <img src={animal.img} className='cardImg'></img>   
                            </div>
                            <div className='animalCardinner'>
                                <div className='animalCardInnerInner'>
                                    <h1 className='cardHeader'>{animal.name}</h1>
                                    <p className='cardInfoLeft'>{animal.age}</p>
                                    <p className='cardInfoLeft'>{animal.color}</p>
                                </div>
                                <div className='animalCardInnerInner'>
                                    <p className='cardInfoRight'>{animal.sex}</p>
                                    <p className='cardInfoRight'>{animal.vax}</p>
                                </div>
                                <Link to = {"./AnimalDescription"} className='LinkDecoration'>
                                <div className='animalCardUnderLink'>
                                    Узнать больше
                                </div>
                                </Link>
                            </div>
                        </div>
                    )}
                        
                    </Grid>
                    <Grid item xs={5}>
                    {animalsRight.map(animal => 
                        <div className='animalCard'>
                            <div className='animalCardinner'>
                                <img src={animal.img} className='cardImg'></img>   
                            </div>
                            <div className='animalCardinner'>
                                <div className='animalCardInnerInner'>
                                    <h1 className='cardHeader'>{animal.name}</h1>
                                    <p className='cardInfoLeft'>{animal.age}</p>
                                    <p className='cardInfoLeft'>{animal.color}</p>
                                </div>
                                <div className='animalCardInnerInner'>
                                    <p className='cardInfoRight'>{animal.sex}</p>
                                    <p className='cardInfoRight'>{animal.vax}</p>
                                </div>
                                <Link to = {"./AnimalDescription"} className='LinkDecoration'>
                                <div className='animalCardUnderLink'>
                                    Узнать больше
                                </div>
                                </Link>
                            </div>
                        </div>
                    )}   
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